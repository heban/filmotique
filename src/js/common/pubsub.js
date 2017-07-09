import PSub from "psub";

export default (() => {
    const channel = new PSub();
    return function () {
        return channel;
    };
})();
