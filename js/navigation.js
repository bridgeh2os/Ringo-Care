const pages = [
    {
        name:"Home",
        link:"index.html"
    },
    {
        name:"Routine",
        link:"routine.html"
    },
    {
        name:"Medical",
        link:"medical.html"
    },
    {
        name:"Emergency",
        link:"emergency.html"
    },
    {
        name:"Photos",
        link:"photos.html"
    }
];


function createNavigation(){

    const links =
        pages.map(
            page =>
            `<a href="${page.link}">
                ${page.name}
            </a>`
        ).join("");


    document.querySelector("#site-header")
        .innerHTML =
        `
        <header class="container">
            <h2>
                🐱 Ringo Care
            </h2>

            <button id="theme-toggle">
                Theme
            </button>
        </header>
        `;


    document.querySelector("#desktop-navigation")
        .innerHTML =
        `
        <nav class="container">
            ${links}
        </nav>
        `;


    document.querySelector("#mobile-navigation")
        .innerHTML =
        `
        <nav class="mobile-nav">
            ${links}
        </nav>
        `;


    document.querySelector("#site-footer")
        .innerHTML =
        `
        <footer class="container">
            <p>
                Ringo Care ❤️
            </p>
        </footer>
        `;

}


createNavigation();
