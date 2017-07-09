export default function(movies) {
    return (movies && movies.length) ? `<ul class="row center-xs">
        ${movies.map(movie => `
            <li>
                ${movie.title}
            </li>
        `)}
    </ul>` : `<div class="row center-xs"><div class="col-xs-4"><p>No results</p></div></div>`;
}
