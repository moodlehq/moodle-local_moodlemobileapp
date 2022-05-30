(function() {
    /******
     * BLOCKING SECTION
     ******/

    // Set up the M object - only pending_js is implemented.
    window.M = window.M ? window.M : {};
    const M = window.M;
    M.util = M.util ? M.util : {};
    M.util.pending_js = M.util.pending_js ? M.util.pending_js : []; // eslint-disable-line camelcase

    /**
     * Logs information from this Behat runtime JavaScript, including the time and the 'BEHAT'
     * keyword so we can easily filter for it if needed.
     *
     * @param {string} text Information to log
     */
    const log = function() {
        const now = new Date();
        const nowFormatted = String(now.getHours()).padStart(2, '0') + ':' +
                String(now.getMinutes()).padStart(2, '0') + ':' +
                String(now.getSeconds()).padStart(2, '0') + '.' +
                String(now.getMilliseconds()).padStart(2, '0');
        console.log('BEHAT: ' + nowFormatted, ...arguments); // eslint-disable-line no-console
    };

    /**
     * Run after several setTimeouts to ensure queued events are finished.
     *
     * @param {function} target function to run
     * @param {number} count Number of times to do setTimeout (leave blank for 10)
     */
    const runAfterEverything = function(target, count) {
        if (count === undefined) {
            count = 10;
        }
        setTimeout(function() {
            count--;
            if (count == 0) {
                target();
            } else {
                runAfterEverything(target, count);
            }
        }, 0);
    };

    /**
     * Adds a pending key to the array.
     *
     * @param {string} key Key to add
     */
    const addPending = function(key) {
        // Add a special DELAY entry whenever another entry is added.
        if (window.M.util.pending_js.length == 0) {
            window.M.util.pending_js.push('DELAY');
        }
        window.M.util.pending_js.push(key);

        log('PENDING+: ' + window.M.util.pending_js);
    };

    /**
     * Removes a pending key from the array. If this would clear the array, the actual clear only
     * takes effect after the queued events are finished.
     *
     * @param {string} key Key to remove
     */
    const removePending = function(key) {
        // Remove the key immediately.
        window.M.util.pending_js = window.M.util.pending_js.filter(function(x) { // eslint-disable-line camelcase
            return x !== key;
        });
        log('PENDING-: ' + window.M.util.pending_js);

        // If the only thing left is DELAY, then remove that as well, later...
        if (window.M.util.pending_js.length === 1) {
            runAfterEverything(function() {
                // Check there isn't a spinner...
                checkUIBlocked();

                // Only remove it if the pending array is STILL empty after all that.
                if (window.M.util.pending_js.length === 1) {
                    window.M.util.pending_js = []; // eslint-disable-line camelcase
                    log('PENDING-: ' + window.M.util.pending_js);
                }
            });
        }
    };

    /**
     * Adds a pending key to the array, but removes it after some setTimeouts finish.
     */
    const addPendingDelay = function() {
        addPending('forced-delay');
        removePending('forced-delay');
    };

    // Override XMLHttpRequest to mark things pending while there is a request waiting.
    const realOpen = XMLHttpRequest.prototype.open;
    let requestIndex = 0;
    XMLHttpRequest.prototype.open = function() {
        ngZone.run(() => {
            const index = requestIndex++;
            const key = 'httprequest-' + index;

            try {
                // Add to the list of pending requests.
                addPending(key);

                // Detect when it finishes and remove it from the list.
                this.addEventListener('loadend', function() {
                    removePending(key);
                });

                return realOpen.apply(this, arguments);
            } catch (error) {
                removePending(key);
                throw error;
            }
        });
    };

    let waitingBlocked = false;

    /**
     * Checks if a loading spinner is present and visible; if so, adds it to the pending array
     * (and if not, removes it).
     */
    const checkUIBlocked = function() {
        const blocked = document.querySelector('div.core-loading-container, ion-loading, .click-block-active');
        if (blocked && blocked.offsetParent) {
            if (!waitingBlocked) {
                addPending('blocked');
                waitingBlocked = true;
            }
        } else {
            if (waitingBlocked) {
                removePending('blocked');
                waitingBlocked = false;
            }
        }
    };

    // It would be really beautiful if you could detect CSS transitions and animations, that would
    // cover almost everything, but sadly there is no way to do this because the transitionstart
    // and animationcancel events are not implemented in Chrome, so we cannot detect either of
    // these reliably. Instead, we have to look for any DOM changes and do horrible polling. Most
    // of the animations are set to 500ms so we allow it to continue from 500ms after any DOM
    // change.

    let recentMutation = false;
    let lastMutation = 0;

    /**
     * Called from the mutation callback to remove the pending tag after 500ms if nothing else
     * gets mutated.
     *
     * This will be called after 500ms, then every 100ms until there have been no mutation events
     * for 500ms.
     */
    const pollRecentMutation = function() {
        if (Date.now() - lastMutation > 500) {
            recentMutation = false;
            removePending('dom-mutation');
        } else {
            setTimeout(pollRecentMutation, 100);
        }
    };

    /**
     * Mutation callback, called whenever the DOM is mutated.
     */
    const mutationCallback = function() {
        lastMutation = Date.now();
        if (!recentMutation) {
            recentMutation = true;
            addPending('dom-mutation');
            setTimeout(pollRecentMutation, 500);
        }
        // Also update the spinner presence if needed.
        checkUIBlocked();
    };

    // Set listener using the mutation callback.
    const observer = new MutationObserver(mutationCallback);
    observer.observe(document, {attributes: true, childList: true, subtree: true});

    /******
     * DOM SECTION
     ******/

    /**
     * Check if an element is visible.
     *
     * @param {HTMLElement} element Element
     * @param {HTMLElement} container Container
     * @returns {boolean} Whether the element is visible or not
     */
    const isElementVisible = (element, container) => {
        if (element.getAttribute('aria-hidden') === 'true' || getComputedStyle(element).display === 'none')
            return false;

        const parentElement = getParentElement(element);
        if (parentElement === container)
            return true;

        if (!parentElement)
            return false;

        return isElementVisible(parentElement, container);
    };

    /**
     * Check if an element is selected.
     *
     * @param {HTMLElement} element Element
     * @param {HTMLElement} container Container
     * @returns {boolean} Whether the element is selected or not
     */
    const isElementSelected = (element, container) => {
        const ariaCurrent = element.getAttribute('aria-current');
        if (
            (ariaCurrent && ariaCurrent !== 'false') ||
            (element.getAttribute('aria-selected') === 'true') ||
            (element.getAttribute('aria-checked') === 'true')
        )
            return true;

        const parentElement = getParentElement(element);
        if (!parentElement || parentElement === container)
            return false;

        return isElementSelected(parentElement, container);
    };

    /**
     * Finds elements within a given container with exact info.
     *
     * @param {HTMLElement} container Parent element to search the element within
     * @param {string} text Text to look for
     * @return {Array} Elements containing the given text with exact boolean.
     */
    const findElementsBasedOnTextWithinWithExact = (container, text) => {
        const elements = [];
        const attributesSelector = `[aria-label*="${text}"], a[title*="${text}"], img[alt*="${text}"]`;

        for (const foundByAttributes of container.querySelectorAll(attributesSelector)) {
            if (!isElementVisible(foundByAttributes, container))
                continue;

            const exact = checkElementLabel(foundByAttributes, text);
            elements.push({ element: foundByAttributes, exact: exact });
        }

        const treeWalker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_DOCUMENT_FRAGMENT | NodeFilter.SHOW_TEXT,
            {
                acceptNode: node => {
                    if (
                        node instanceof HTMLStyleElement ||
                        node instanceof HTMLLinkElement ||
                        node instanceof HTMLScriptElement
                    )
                        return NodeFilter.FILTER_REJECT;

                    if (
                        node instanceof HTMLElement && (
                            node.getAttribute('aria-hidden') === 'true' || getComputedStyle(node).display === 'none'
                        )
                    )
                        return NodeFilter.FILTER_REJECT;

                    return NodeFilter.FILTER_ACCEPT;
                }
            },
        );

        let currentNode;
        while (currentNode = treeWalker.nextNode()) {
            if (currentNode instanceof Text) {
                if (currentNode.textContent.includes(text)) {
                    elements.push({ element: currentNode.parentElement, exact: currentNode.textContent.trim() == text });
                }

                continue;
            }

            const labelledBy = currentNode.getAttribute('aria-labelledby');
            const labelElement = labelledBy && container.querySelector(`#${labelledBy}`);
            if (labelElement && labelElement.innerText && labelElement.innerText.includes(text)) {
                elements.push({ element: currentNode, exact: labelElement.innerText.trim() == text });

                continue;
            }

            if (currentNode.shadowRoot) {
                for (const childNode of currentNode.shadowRoot.childNodes) {
                    if (
                        !(childNode instanceof HTMLElement) || (
                            childNode instanceof HTMLStyleElement ||
                            childNode instanceof HTMLLinkElement ||
                            childNode instanceof HTMLScriptElement
                        )
                    ) {
                        continue;
                    }

                    if (childNode.matches(attributesSelector)) {
                        const exact = checkElementLabel(childNode, text);
                        elements.push({ element: childNode, exact: exact});

                        continue;
                    }

                    elements.push(...findElementsBasedOnTextWithinWithExact(childNode, text));
                }
            }
        }

        return elements;
    };

    /**
     * Checks an element has exactly the same label (title, alt or aria-label).
     *
     * @param element Element to check.
     * @param text Text to check.
     * @return If text matches any of the label attributes.
     */
    const checkElementLabel = function(element, text) {
        return element.title === text ||
            element.getAttribute('alt') === text ||
            element.getAttribute('aria-label') === text;
    }

    /**
     * Finds elements within a given container.
     *
     * @param {HTMLElement} container Parent element to search the element within.
     * @param {string} text Text to look for.
     * @return {HTMLElement[]} Elements containing the given text.
     */
     const findElementsBasedOnTextWithin = (container, text) => {
        const elements = findElementsBasedOnTextWithinWithExact(container, text);

        // Give more relevance to exact matches.
        elements.sort((a, b) => {
            return b.exact - a.exact;
        });

        return elements.map(element => element.element);
    };

    /**
     * Given a list of elements, get the top ancestors among all of them.
     *
     * This will remote duplicates and drop any elements nested within each other.
     *
     * @param {Array} elements Elements list.
     * @return {Array} Top ancestors.
     */
    const getTopAncestors = function(elements) {
        const uniqueElements = new Set(elements);

        for (const element of uniqueElements) {
            for (otherElement of uniqueElements) {
                if (otherElement === element) {
                    continue;
                }

                if (element.contains(otherElement)) {
                    uniqueElements.delete(otherElement);
                }
            }
        }

        return Array.from(uniqueElements);
    };

    /**
     * Get parent element, including Shadow DOM parents.
     *
     * @param {HTMLElement} element Element.
     * @return {HTMLElement} Parent element.
     */
    const getParentElement = function(element) {
        return element.parentElement || (element.getRootNode() && element.getRootNode().host) || null;
    };

    /**
     * Get closest element matching a selector, without traversing up a given container.
     *
     * @param {HTMLElement} element Element.
     * @param {string} selector Selector.
     * @param {HTMLElement} container Topmost container to search within.
     * @return {HTMLElement} Closest matching element.
     */
    const getClosestMatching = function(element, selector, container) {
        if (element.matches(selector)) {
            return element;
        }

        if (element === container || !element.parentElement) {
            return null;
        }

        return getClosestMatching(element.parentElement, selector, container);
    };

    // Containers that block containers behind them.
    const blockingContainers = ['ION-ALERT', 'ION-POPOVER', 'ION-ACTION-SHEET', 'CORE-USER-TOURS-USER-TOUR', 'ION-PAGE'];

    /**
     * Function to find top container elements.
     *
     * @param {string} containerName Whether to search inside the a container name.
     * @return Found top container elements.
     */
    const getCurrentTopContainerElements = function (containerName) {
        const topContainers = [];
        let containers = Array.from(document.querySelectorAll([
            'ion-alert.hydrated',
            'ion-popover.hydrated',
            'ion-action-sheet.hydrated',
            'ion-modal.hydrated',
            'core-user-tours-user-tour.is-active',
            'ion-toast.hydrated',
            'page-core-mainmenu',
            'ion-app',
        ].join(', ')));

        containers = containers
            .filter(container => {
                if (container.tagName === 'ION-ALERT') {
                    // For some reason, in Behat sometimes alerts aren't removed from DOM, the close animation doesn't finish.
                    // Filter alerts with pointer-events none since that style is set before the close animation starts.
                    return container.style.pointerEvents !== 'none';
                }

                // Ignore pages that are inside other visible pages.
                return container.tagName !== 'ION-PAGE' || !container.closest('.ion-page.ion-page-hidden');
            })
            // Sort them by z-index.
            .sort((a, b) =>  Number(getComputedStyle(b).zIndex) - Number(getComputedStyle(a).zIndex));

        if (containerName === 'split-view content') {
            // Find non hidden pages inside the containers.
            containers.some(container => {
                if (!container.classList.contains('ion-page')) {
                    return false;
                }

                const pageContainers = Array.from(container.querySelectorAll('.ion-page:not(.ion-page-hidden)'));
                let topContainer = pageContainers.find((page) => !page.closest('.ion-page.ion-page-hidden')) ?? null;

                topContainer = (topContainer || container).querySelector('core-split-view ion-router-outlet');
                topContainer && topContainers.push(topContainer);

                return !!topContainer;
            });

            return topContainers;
        }

        // Get containers until one blocks other views.
        containers.find(container => {
            if (container.tagName === 'ION-TOAST') {
                container = container.shadowRoot?.querySelector('.toast-container') || container;
            }
            topContainers.push(container);

            return blockingContainers.includes(container.tagName);
        });

        return topContainers;
    }

    /**
     * Function to find element based on their text or Aria label.
     *
     * @param locator Element locator.
     * @param containerName Whether to search only inside a specific container.
     * @return First found element.
     */
    const findElementBasedOnText = function (locator, containerName) {
        return findElementsBasedOnText(locator, containerName)[0];
    }


    /**
     * Function to find elements based on their text or Aria label.
     *
     * @param locator Element locator.
     * @param containerName Whether to search only inside a specific container.
     * @return Found elements
     */
    const findElementsBasedOnText = function (locator, containerName = '') {
        const topContainers = getCurrentTopContainerElements(containerName);

        return topContainers.reduce((elements, container) =>
            elements.concat(findElementsBasedOnTextInContainer(locator, container)), []);
    }

    /**
     * Function to find elements based on their text or Aria label.
     *
     * @param locator Element locator.
     * @param container Container to search in.
     * @return Found elements
     */
    const findElementsBasedOnTextInContainer = function(locator, topContainer) {
        let container = topContainer;

        if (locator.within) {
            const withinElements = findElementsBasedOnText(locator.within);

            if (withinElements.length === 0) {
                throw new Error('There was no match for within text')
            } else if (withinElements.length > 1) {
                const withinElementsAncestors = getTopAncestors(withinElements);

                if (withinElementsAncestors.length > 1) {
                    throw new Error('Too many matches for within text');
                }

                topContainer = container = withinElementsAncestors[0];
            } else {
                topContainer = container = withinElements[0];
            }
        }

        if (topContainer && locator.near) {
            const nearElements = findElementsBasedOnText(locator.near);

            if (nearElements.length === 0) {
                throw new Error('There was no match for near text')
            } else if (nearElements.length > 1) {
                const nearElementsAncestors = getTopAncestors(nearElements);

                if (nearElementsAncestors.length > 1) {
                    throw new Error('Too many matches for near text');
                }

                container = getParentElement(nearElementsAncestors[0]);
            } else {
                container = getParentElement(nearElements[0]);
            }
        }

        do {
            if (!container) {
                break;
            }

            const elements = findElementsBasedOnTextWithin(container, locator.text);

            let filteredElements = elements;

            if (locator.selector) {
                filteredElements = [];
                const selector = locator.selector;

                elements.forEach((element) => {
                    const closest = getClosestMatching(element, selector, container);
                    if (closest) {
                        filteredElements.push(closest);
                    }
                });
            }

            if (filteredElements.length > 0) {
                return filteredElements;
            }

        } while (container !== topContainer && (container = getParentElement(container)) && container !== topContainer);

        return [];
    };

    /**
     * Make sure that an element is visible and wait to trigger the callback.
     *
     * @param {HTMLElement} element Element.
     * @param {Function} callback Callback called when the element is visible, passing bounding box parameter.
     */
    const ensureElementVisible = function(element, callback) {
        const initialRect = element.getBoundingClientRect();

        element.scrollIntoView(false);

        requestAnimationFrame(function () {
            const rect = element.getBoundingClientRect();

            if (initialRect.y !== rect.y) {
                setTimeout(function () {
                    callback(rect);
                }, 300);

                return;
            }

            callback(rect);
        });
    };

    /**
     * Press an element.
     *
     * @param {HTMLElement} element Element to press.
     */
    const pressElement = function(element) {
        ngZone.run(() => {
            addPending('press-element');

            ensureElementVisible(element, function(rect) {
                // Simulate a mouse click on the button.
                const eventOptions = {
                    clientX: rect.left + rect.width / 2,
                    clientY: rect.top + rect.height / 2,
                    bubbles: true,
                    view: window,
                    cancelable: true,
                };

                // Events don't bubble up across Shadow DOM boundaries, and some buttons
                // may not work without doing this.
                const parentElement = getParentElement(element);

                if (parentElement && parentElement.matches('ion-button, ion-back-button')) {
                    element = parentElement;
                }

                // There are some buttons in the app that don't respond to click events, for example
                // buttons using the core-supress-events directive. That's why we need to send both
                // click and mouse events.
                element.dispatchEvent(new MouseEvent('mousedown', eventOptions));

                setTimeout(() => {
                    element.dispatchEvent(new MouseEvent('mouseup', eventOptions));
                    element.click();

                    removePending('press-element');
                }, 300);
            });
        });
    };

    /**
     * Set an element value.
     *
     * @param element HTML to set.
     * @param value Value to be set.
     */
    const setElementValue = function(element, value) {
        ngZone.run(() => {
            addPending('set-value');

            // Functions to get/set value depending on field type.
            let setValue;
            let getValue;
            switch (element.nodeName) {
                case 'INPUT':
                case 'TEXTAREA':
                    setValue = function(text) {
                        element.value = text;
                    };
                    getValue = function() {
                        return element.value;
                    };
                    break;
                case 'DIV':
                    setValue = function(text) {
                        element.innerHTML = text;
                    };
                    getValue = function() {
                        return element.innerHTML;
                    };
                    break;
            }

            // Pretend we have cut and pasted the new text.
            let event;
            if (getValue() !== '') {
                event = new InputEvent('input',
                    {bubbles: true, view: window, cancelable: true, inputType: 'deleteByCut'});

                setTimeout(function() {
                    setValue('');
                    element.dispatchEvent(event);
                }, 0);
            }

            if (value !== '') {
                event = new InputEvent('input',
                    {bubbles: true, view: window, cancelable: true, inputType: 'insertFromPaste', data: value});

                setTimeout(function() {
                    setValue(value);
                    element.dispatchEvent(event);
                    removePending('set-value');
                }, 0);
            } else {
                removePending('set-value');
            }
        });
    }

    /******
     * PUBLIC SECTION
     ******/

    /**
     * Function to find and click an app standard button.
     *
     * @param {string} button Type of button to press
     * @return {string} OK if successful, or ERROR: followed by message
     */
    const behatPressStandard = function(button) {
        log('Action - Click standard button: ' + button);

        // Find button
        let foundButton = null;

        switch (button) {
            case 'back':
                foundButton = findElementBasedOnText({ text: 'Back' });
                break;
            case 'main menu': // Deprecated name.
            case 'more menu':
                foundButton = findElementBasedOnText({
                    text: 'More',
                    selector: 'ion-tab-button',
                });
                break;
            case 'user menu' :
                foundButton = findElementBasedOnText({ text: 'User account' });
                break;
            case 'page menu':
                foundButton = findElementBasedOnText({ text: 'Display options' });
                break;
            default:
                return 'ERROR: Unsupported standard button type';
        }

        if (!foundButton) {
            return `ERROR: Button '${button}' not found`;
        }

        // Click button
        pressElement(foundButton);

        return 'OK';
    };

    /**
     * When there is a popup, clicks on the backdrop.
     *
     * @return {string} OK if successful, or ERROR: followed by message
     */
    const behatClosePopup = function() {
        log('Action - Close popup');

        let backdrops = Array.from(document.querySelectorAll('ion-backdrop'));
        backdrops = backdrops.filter(function(backdrop) {
            return !!backdrop.offsetParent;
        });

        if (!backdrops.length) {
            return 'ERROR: Could not find backdrop';
        }
        if (backdrops.length > 1) {
            return 'ERROR: Found too many backdrops';
        }
        const backdrop = backdrops[0];
        backdrop.click();

        // Mark busy until the click finishes processing.
        addPendingDelay();

        return 'OK';
    };

    /**
     * Function to find an arbitrary element based on its text or aria label.
     *
     * @param {object} locator Element locator.
     * @param {string} containerName Whether to search only inside a specific container content.
     * @return {string} OK if successful, or ERROR: followed by message
     */
    const behatFind = function(locator, containerName) {
        log('Action - Find', { locator, containerName });

        try {
            const element = findElementBasedOnText(locator, containerName);

            if (!element) {
                return 'ERROR: No element matches locator to find.';
            }

            log('Action - Found', { locator, containerName, element });
            return 'OK';
        } catch (error) {
            return 'ERROR: ' + error.message;
        }
    };

    /**
     * Scroll an element into view.
     *
     * @param {object} locator Element locator.
     * @return {string} OK if successful, or ERROR: followed by message
     */
    const behatScrollTo = function(locator) {
        log('Action - scrollTo', { locator });

        try {
            let element = findElementBasedOnText(locator);

            if (!element) {
                return 'ERROR: No element matches element to scroll to.';
            }

            element = element.closest('ion-item') ?? element.closest('button') ?? element;

            element.scrollIntoView();

            log('Action - Scrolled to', { locator, element });
            return 'OK';
        } catch (error) {
            return 'ERROR: ' + error.message;
        }
    }

    /**
     * Load more items form an active list with infinite loader.
     *
     * @return {string} OK if successful, or ERROR: followed by message
     */
    const behatLoadMoreItems = async function() {
        log('Action - loadMoreItems');

        try {
            const infiniteLoading = Array
                .from(document.querySelectorAll('core-infinite-loading'))
                .find(element => !element.closest('.ion-page-hidden'));

            if (!infiniteLoading) {
                return 'ERROR: There isn\'t an infinite loader in the current page.';
            }

            const initialOffset = infiniteLoading.offsetTop;
            const isLoading = () => !!infiniteLoading.querySelector('ion-spinner[aria-label]');
            const isCompleted = () => !isLoading() && !infiniteLoading.querySelector('ion-button');
            const hasMoved = () => infiniteLoading.offsetTop !== initialOffset;

            if (isCompleted()) {
                return 'ERROR: All items are already loaded.';
            }

            infiniteLoading.scrollIntoView({ behavior: 'smooth' });

            // Wait 100ms
            await new Promise(resolve => setTimeout(resolve, 100));

            if (isLoading() || isCompleted() || hasMoved()) {
                return 'OK';
            }

            infiniteLoading.querySelector('ion-button').click();

            // Wait 100ms
            await new Promise(resolve => setTimeout(resolve, 100));

            return (isLoading() || isCompleted() || hasMoved()) ? 'OK' : 'ERROR: Couldn\'t load more items';
        } catch (error) {
            return 'ERROR: ' + error.message;
        }
    }

    /**
     * Check whether an item is selected or not.
     *
     * @param {object} locator Element locator.
     * @return {string} YES or NO if successful, or ERROR: followed by message
     */
    const behatIsSelected = function(locator) {
        log('Action - Is Selected', locator);

        try {
            const element = findElementBasedOnText(locator);

            return isElementSelected(element, document.body) ? 'YES' : 'NO';
        } catch (error) {
            return 'ERROR: ' + error.message;
        }
    }

    /**
     * Function to press arbitrary item based on its text or Aria label.
     *
     * @param {object} locator Element locator.
     * @return {string} OK if successful, or ERROR: followed by message
     */
    const behatPress = function(locator) {
        log('Action - Press', locator);

        let found;
        try {
            found = findElementBasedOnText(locator);

            if (!found) {
                return 'ERROR: No element matches locator to press.';
            }

            pressElement(found);

            return 'OK';
        } catch (error) {
            return 'ERROR: ' + error.message;
        }
    };

    /**
     * Gets the currently displayed page header.
     *
     * @return {string} OK: followed by header text if successful, or ERROR: followed by message.
     */
    const behatGetHeader = function() {
        log('Action - Get header');

        let titles = Array.from(document.querySelectorAll('.ion-page:not(.ion-page-hidden) > ion-header h1'));
        titles = titles.filter(function(title) {
            return isElementVisible(title, document.body);
        });

        if (titles.length > 1) {
            return 'ERROR: Too many possible titles.';
        } else if (!titles.length) {
            return 'ERROR: No title found.';
        } else {
            const title = titles[0].innerText.trim();
            return 'OK:' + title;
        }
    };

    /**
     * Sets the text of a field to the specified value.
     *
     * This currently matches fields only based on the placeholder attribute.
     *
     * @param {string} field Field name
     * @param {string} value New value
     * @return {string} OK or ERROR: followed by message
     */
    const behatSetField = function(field, value) {
        log('Action - Set field ' + field + ' to: ' + value);

        const found = findElementBasedOnText({ text: field, selector: 'input, textarea, [contenteditable="true"]' });
        if (!found) {
            return 'ERROR: No element matches field to set.';
        }

        setElementValue(found, value);

        return 'OK';
    };

    /**
     * Get an Angular component instance.
     *
     * @param {string} selector Element selector
     * @param {string} className Constructor class name
     * @return {object} Component instance
     */
    const behatGetAngularInstance = function(selector, className) {
        log('Action - Get Angular instance ' + selector + ', ' + className);

        const activeElement = Array.from(document.querySelectorAll(`.ion-page:not(.ion-page-hidden) ${selector}`)).pop();

        if (!activeElement || !activeElement.__ngContext__) {
            return null;
        }

        return activeElement.__ngContext__.find(node => node?.constructor?.name === className);
    };

    /**
     * Handles a custom URL.
     *
     * @param url Url to open.
     * @return OK if successful, or ERROR: followed by message.
     */
    const behatHandleCustomURL = function (url) {
        addPending('custom-url');

        try {
            window.urlSchemes.handleCustomURL(url);

            return 'OK';
        } catch (error) {
            return 'ERROR: ' + error.message;
        } finally {
            removePending('custom-url');
        }
    };

    /**
     * Sets config on the app.
     *
     * @param options Config options.
     */
    const behatSetConfig = function(options) {
        if (!options) {
            return;
        }

        if (options.skipOnBoarding === true) {
            configProvider.set('onboarding_done', 1);
        }

        if (options.configOverrides) {
            // Set the cookie so it's maintained between reloads.
            document.cookie = 'MoodleAppConfig=' + JSON.stringify(options.configOverrides);
            configProvider.patchEnvironment(options.configOverrides, { patchDefault: true });
        }
    }

    // Make some functions publicly available for Behat to call.
    window.behat = {
        pressStandard : behatPressStandard,
        closePopup : behatClosePopup,
        find : behatFind,
        scrollTo : behatScrollTo,
        loadMoreItems: behatLoadMoreItems,
        isSelected : behatIsSelected,
        press : behatPress,
        setField : behatSetField,
        getHeader : behatGetHeader,
        handleCustomURL: behatHandleCustomURL,
        setConfig: behatSetConfig,
        getAngularInstance: behatGetAngularInstance,
    };
})();
