export default function() {
    return `<form action="" id="filmotique-form" class="filmotique-form">
        <div class="row center-xs">
            <label class="filmotique-form-label col-xs-10 col-sm-6 col-md-4">
                <span class="wcag">Movie search engine, type the name of the movie and hit enter</span>
                <input type="search" value="" placeholder="Type the movie name and hit enter" />
                <div id="filmotique-loader" class="filmotique-loader filmotique-loader--hidden"></div>
            </label>
        </div>
    </form>`;
}
