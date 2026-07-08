// =========================
// Storage System
// InkBoard
// =========================



const STORAGE_KEY = "inkboard_data";




// 初期データ

const defaultData = {


    battles: [],


    weapons: [],


    gearSets: [],


    settings: {

    darkMode: false,

    compactMode: false,

    notifications: true,

    nintendoAccount: {

        linked:false,

        username:null

    }

}


};




// データ取得

function getStorageData(){


    const data =
        localStorage.getItem(
            STORAGE_KEY
        );



    if(!data){


        return structuredClone(
            defaultData
        );


    }



    return JSON.parse(
        data
    );


}




// データ保存

function saveStorageData(data){


    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(data)

    );


}




// データ初期化

function resetStorageData(){


    localStorage.removeItem(
        STORAGE_KEY
    );


}




// データ確認

function hasStorageData(){


    return localStorage.getItem(
        STORAGE_KEY
    )
    !== null;


}
// =========================
// Battle Data Management
// =========================



function addBattle(battle){


    const data =
        getStorageData();



    data.battles.push(

        {

            id:
                Date.now(),


            ...battle

        }

    );



    saveStorageData(
        data
    );


}





function updateBattle(id, newData){


    const data =
        getStorageData();



    const index =
        data.battles.findIndex(

            battle =>
                battle.id === id

        );



    if(index === -1){

        return false;

    }



    data.battles[index] = {

        ...data.battles[index],

        ...newData

    };



    saveStorageData(
        data
    );



    return true;


}





function deleteBattle(id){


    const data =
        getStorageData();



    data.battles =
        data.battles.filter(

            battle =>
                battle.id !== id

        );



    saveStorageData(
        data
    );


}





// =========================
// Gear Management
// =========================



function saveGearSet(gear){


    const data =
        getStorageData();



    data.gearSets.push(

        {

            id:
                Date.now(),


            ...gear

        }

    );



    saveStorageData(
        data
    );


}





function updateSettings(settings){


    const data =
        getStorageData();



    data.settings = {

        ...data.settings,

        ...settings

    };



    saveStorageData(
        data
    );


}
// =========================
// Common Storage Utilities
// =========================



// 全戦績取得

function getBattles(){


    const data =
        getStorageData();



    return data.battles || [];


}




// ギア一覧取得

function getGearSets(){


    const data =
        getStorageData();



    return data.gearSets || [];


}




// 設定取得

function getSettings(){


    const data =
        getStorageData();



    return data.settings || {};


}




// データ全削除確認

function clearAllData(){


    resetStorageData();


}



// データ件数取得

function getDataCount(){


    const data =
        getStorageData();



    return {


        battles:
            data.battles.length,


        gearSets:
            data.gearSets.length


    };


}




// 初回起動チェック

function initializeStorage(){


    if(
        !hasStorageData()
    ){


        saveStorageData(

            structuredClone(
                defaultData
            )

        );


    }


}
// =========================
// Nintendo Account
// =========================


function getNintendoAccount(){

    const data =
        getStorageData();


    return (
        data.settings.nintendoAccount
        ||
        {
            linked:false,
            username:null
        }
    );

}



function saveNintendoAccount(account){

    const data =
        getStorageData();


    data.settings.nintendoAccount =
        account;


    saveStorageData(
        data
    );

}
// =========================
// Imported Battle Data
// =========================


function importBattles(battles){


    const data =
        getStorageData();



    battles.forEach(
        battle=>{


            data.battles.push({

                id:
                    Date.now()
                    +
                    Math.random(),


                ...battle

            });


        }
    );



    saveStorageData(
        data
    );


}




// 最新戦績取得

function getLatestBattles(limit = 10){


    const battles =
        getBattles();



    return battles

        .sort(
            (a,b)=>
                b.id - a.id
        )

        .slice(
            0,
            limit
        );


}
