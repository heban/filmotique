import isString from "lodash/isString";

/*
 * getDOMElement - return DOM element
 * @param {object} - string or HTMLElement
*/
export function getDOMElement(el) {
    if (!el) {
        return null;
    } else if (isString(el)) {
        let rootEl = document.querySelector(el);
        if (rootEl) {
            return rootEl;
        }
    } else if (el instanceof HTMLElement) {
        return el;
    }

    return null;
}
