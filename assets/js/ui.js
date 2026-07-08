// =========================
// UI Controller
// =========================



// アクティブタブ変更

function setActiveTab(pageName){


    const tabs =
        document.querySelectorAll(
            "[data-page]"
        );



    tabs.forEach(tab=>{


        tab.classList.remove(
            "active"
        );



        if(
            tab.dataset.page === pageName
        ){

            tab.classList.add(
                "active"
            );

        }


    });


}



// タブ初期化

function initTabs(){


    const tabs =
        document.querySelectorAll(
            "[data-page]"
        );



    tabs.forEach(tab=>{


        tab.addEventListener(
            "click",
            ()=>{


                const page =
                    tab.dataset.page;



                loadPage(
                    page
                );



                setActiveTab(
                    page
                );


            }
        );


    });


}
// =========================
// Battle List UI
// =========================


function renderBattleList(){


    const container =
        document.getElementById(
            "battleList"
        );


    if(!container){

        return;

    }



    const battles =
        getLatestBattles();



    if(
        battles.length === 0
    ){

        container.innerHTML = `


        <div class="empty-state">


            <div class="empty-icon"></div>


            <h3 class="empty-title">

                戦績がありません

            </h3>


            <p class="empty-text">

                戦績データを取得すると表示されます。

            </p>


        </div>


        `;


        return;

    }



    container.innerHTML = "";


    battles.forEach(
        battle=>{


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "battle-card";



            card.innerHTML = `


            <div class="battle-card-header">


                <span class="battle-mode">

                    ${battle.mode || "バトル"}

                </span>


                <span class="battle-result ${battle.result}">

                    ${battle.result || "-"}

                </span>


            </div>



            <div class="battle-stage">

                ${battle.stage || "ステージ不明"}

            </div>



            <div class="battle-stats">


                <div class="battle-stat">

                    <span class="battle-stat-value">

                        ${battle.kills || 0}

                    </span>


                    <span class="battle-stat-label">

                        キル

                    </span>


                </div>


                <div class="battle-stat">

                    <span class="battle-stat-value">

                        ${battle.deaths || 0}

                    </span>


                    <span class="battle-stat-label">

                        デス

                    </span>


                </div>


                <div class="battle-stat">

                    <span class="battle-stat-value">

                        ${battle.paint || 0}

                    </span>


                    <span class="battle-stat-label">

                        塗り

                    </span>


                </div>


            </div>


            `;

const button =
    document.createElement(
        "button"
    );


button.className =
    "btn btn-primary btn-block";


button.textContent =
    "詳しく見る";


button.addEventListener(
    "click",
    ()=>{


        location.hash =
            `battle-detail?id=${battle.id}`;


    }
);


card.appendChild(
    button
);

            container.appendChild(
                card
            );


        }
    );


}
function renderBattleDetail(){


    const area =
        document.getElementById(
            "battleDetail"
        );


    if(!area){

        return;

    }


    const params =
        new URLSearchParams(
            location.hash.split("?")[1]
        );


    const id =
        params.get("id");


    const battle =
        getBattleById(id);



    if(!battle){

        area.innerHTML =
        "データがありません";

        return;

    }



    area.innerHTML = `


    <h3>

    ${battle.stage}

    </h3>


    <p>

    結果:
    ${battle.result}

    </p>


    <p>

    キル:
    ${battle.kills}

    </p>


    <p>

    デス:
    ${battle.deaths}

    </p>


    <p>

    塗り:
    ${battle.paint}

    </p>


    `;


}
