import "../sass/app.scss";
import AppComponent from "./components/app/app.component.js";
import tmpl from "./components/app/templates/main.tmpl.js";

new AppComponent({
    el: document.querySelector("#filmotique-app"),
    template: tmpl
});
