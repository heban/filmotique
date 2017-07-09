import BaseComponent from "../base/base.component.js";
import HeaderComponent from "../header/header.component.js";
import tmplHeader from "../header/templates/main.tmpl.js";
import ListComponent from "../list/list.component.js";
import tmplList from "../list/templates/main.tmpl.js";
import SearchComponent from "../search/search.component.js";
import tmplSearch from "../search/templates/main.tmpl.js";
import config from "../../config.js";

export default class AppComponent extends BaseComponent {
    constructor(options) {
        super(options);

        /*
         * HeaderComponent with project name and scrollToTop feature
        */
        this.headerComponent = new HeaderComponent({
            el: "#filmotique-header",
            template: tmplHeader,
            options: {
                title: config.appName
            }
        });

        /*
         * Primary element - input with search behavior
        */
        this.searchComponent = new SearchComponent({
            el: "#filmotique-search",
            template: tmplSearch
        });

        /*
         * Movies list
        */
        this.listComponent = new ListComponent({
            el: "#filmotique-list",
            template: tmplList
        });
    }
}
