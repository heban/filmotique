import BaseComponent from "../base/base.component.js";
import channel from "../../common/pubsub.js";

export default class ListComponent extends BaseComponent {
    constructor(options) {
        super(options);

        /*
         * Listen to 'render/movies' event and rerender component
        */
        channel().subscribe("render/movies", (data) => {
            console.log(data);
            this.render(data);
        });
    }
}
