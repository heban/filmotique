import { prepareSearchRequestUrl } from "./http.js";
import config from "../config.js";

const correctUrl = "https://api.themoviedb.org/3/search/movie?api_key=d3148613227fc06b87962ae65adec594&language=en-US&query=";

test("prepareSearchRequestUrl should return correct url", () => {
    expect(prepareSearchRequestUrl(config)).toEqual(correctUrl);
});

test("prepareSearchRequestUrl shouldn't return correct url when object is undefined", () => {
    expect(prepareSearchRequestUrl()).not.toEqual(correctUrl);
});
