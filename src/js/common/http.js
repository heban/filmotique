import config from "../config.js";

export function prepareSearchRequestUrl ({apiUrl, apiMoviesEndPoint, apiKey, apiLang} = "", text = "") {
    return `${apiUrl}${apiMoviesEndPoint}?api_key=${apiKey}&language=${apiLang}&query=${text}`;
}

export default class HTTPModule {
    getMovies(text) {
        return fetch(prepareSearchRequestUrl(config, text), {
            method: "GET"
        }).then(response => {
            if (response.ok) {
                return response.json().catch(error => {
                    return Promise.reject(new Error(`Invalid JSON: ${error.message}`));
                });
            } else {
                return Promise.reject(new Error(`HTTP Error`));
            }
        }).catch((error) => {
            return Promise.reject(new Error(`HTTP Error: ${error.message}`));
        });
    }
}
