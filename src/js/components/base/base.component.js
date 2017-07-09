import { getDOMElement } from "../../common/dom.js";

/*
 * BaseComponent - base class for other components
*/
export default class BaseComponent {
    /*
     * constructor
     * @param {object} - configuration object with DOM element, template for component and other options for template
    */
    constructor({el, template, options}) {
        let _el = getDOMElement(el);

        /*
         * We want to privacy of our root element
        */
        this.getEl = () => {
            return _el;
        };

        /*
         * template shoud be a private prop
        */
        this.getTemplate = (options) => {
            return template(options);
        };

        /*
         * First render
        */
        this.render(options);
    }
    render(options) {
        this.getEl().innerHTML = this.getTemplate(options);
    }
}
