import BaseComponent from "./base.component.js";

test("Should trigger render method after initialization", () => {
    BaseComponent.prototype.render = jest.fn();
    let baseComponent = new BaseComponent({
        el: document.createElement("div"),
        template: jest.fn()
    });

    expect(baseComponent.render).toHaveBeenCalled();
});
