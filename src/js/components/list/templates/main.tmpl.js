export default function(movies) {
    return (movies && movies.length) ? `<ul class="row center-xs around-xs middle-xs">
        ${movies.map(movie => `<li class="filmotique-movie col-xs-12 col-md-4">
            <div class="box">
                <span class="movie-title">${movie.title}</span>
                <span class="movie-date">${movie.release_date}</span>
            </div>
        </li>`).join("")}
    </ul>` : `<div class="row center-xs"><div class="col-xs-4"><p>No results</p></div></div>`;
}
