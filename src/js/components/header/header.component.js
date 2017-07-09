import BaseComponent from "../base/base.component.js";

export default class HeaderComponent extends BaseComponent {
    constructor(options) {
        super(options);

        this.link = this.getEl().querySelector("a");

        this.onLinkClick = this.onLinkClick.bind(this);
        this.removeListeners();
        this.addListeners();
    }
    addListeners() {
        this.link.addEventListener("click", this.onLinkClick);
    }
    removeListeners() {
        this.link.removeEventListener("click", this.onLinkClick);
    }
    onLinkClick(e) {
        e.preventDefault();
        this.scrollToTop();
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
}
