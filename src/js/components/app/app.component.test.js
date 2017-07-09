import AppComponent from "./app.component.js";

test("Should trigger render method from inherited class after initialization", () => {
    const spy = jest.spyOn(AppComponent.prototype, "render");
    let appComponent = new AppComponent({
        el: document.createElement("div"),
        template: jest.fn()
    });

    expect(spy).toHaveBeenCalled();
});
