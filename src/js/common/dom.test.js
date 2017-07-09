import { getDOMElement } from "./dom.js";

test("Should return null if has no param", () => {
    expect(getDOMElement()).toBe(null);
});
