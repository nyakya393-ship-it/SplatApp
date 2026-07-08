// =========================
// Router
// =========================


const pages = {

    home: "pages/home.html",

    battles: "pages/battles.html",

    detail: "pages/battle-detail.html",

    schedule: "pages/schedule.html",

    salmon: "pages/salmon.html",

    weapons: "pages/weapons.html",

    gear: "pages/gear.html",

    settings: "pages/settings.html"

};



// ページ読み込み

async function loadPage(pageName){


    const app =
        document.getElementById(
            "app"
        );


    if(!pages[pageName]){

        console.error(
            "Page not found:",
            pageName
        );

        return;

    }



    try{


        const response =
            await fetch(
                pages[pageName]
            );


        const html =
            await response.text();



        app.innerHTML =
            html;


        window.scrollTo(
            0,
            0
        );


    }
    catch(error){


        console.error(
            error
        );


        app.innerHTML = `

        <div class="error-page">

            <h2>
            ページを読み込めませんでした
            </h2>

        </div>

        `;


    }


}



// 初期ページ

function initRouter(){


    loadPage(
        "home"
    );


}
