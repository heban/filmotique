import ListComponent from "./list.component.js";

test("Should trigger render method from inherited class after initialization", () => {
    const spy = jest.spyOn(ListComponent.prototype, "render");
    new ListComponent({
        el: document.createElement("div"),
        template: jest.fn()
    });

    expect(spy).toHaveBeenCalled();
});
