export default class BaseComponent {
    constructor({el, template, options}) {
        let _el = el;

        this.getEl = () => {
            return _el;
        };

        this.getTemplate = (options) => {
            return template(options);
        };

        this.render(options);
    }
    render(options) {
        this.getEl().innerHTML = this.getTemplate(options);
    }
}
