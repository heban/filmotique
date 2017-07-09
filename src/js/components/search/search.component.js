import BaseComponent from "../base/base.component.js";
import HTTPModule from "../../common/http.js";
import channel from "../../common/pubsub.js";

export default class SearchComponent extends BaseComponent {
    constructor(options) {
        super(options);

        this.preventSubmit = false;
        /*
         * cache important elements
        */
        this.form = this.getEl().querySelector("form");
        this.input = this.getEl().querySelector("input");
        this.loader = this.getEl().querySelector("#filmotique-loader");

        /*
         * HttpModule to provide data, PubSub to publish data to other components
        */
        this.http = new HTTPModule();
        this.channel = channel();

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.removeListeners();
        this.addListeners();
    }
    addListeners() {
        this.form.addEventListener("submit", this.onFormSubmit);
    }
    removeListeners() {
        /*
         * uber-simple memory leaks prevention
        */
        this.form.removeEventListener("submit", this.onFormSubmit);
    }
    showLoader() {
        this.loader.classList.remove("filmotique-loader--hidden");
    }
    hideLoader() {
        this.loader.classList.add("filmotique-loader--hidden");
    }
    disableForm() {
        /*
         * animate input to top of the page and show loader
        */
        this.preventSubmit = true;
        this.form.classList.add("filmotique-form--up");
        this.showLoader();
    }
    enableForm() {
        this.preventSubmit = false;
        this.hideLoader();
    }
    buildMovieList(data) {
        if (data && data.results) {
            this.channel.publish("render/movies", data.results);
        }
    }
    onFormSubmit(e) {
        e.preventDefault();

        if (this.preventSubmit) {
            return;
        }

        let value = this.input.value.trim();
        if (value) {
            this.disableForm();

            this.http.getMovies(value).then(response => {
                this.enableForm();
                this.buildMovieList(response);
            }, () => {
                this.enableForm();
                this.buildMovieList();
            });
        }
    }
}
