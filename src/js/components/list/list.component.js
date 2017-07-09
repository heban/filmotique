import BaseComponent from "../base/base.component.js";
import channel from "../../common/pubsub.js";

export default class ListComponent extends BaseComponent {
    constructor(options) {
        super(options);

        channel().subscribe("render/movies", (data) => {
            this.render(data);
        });
    }
}
