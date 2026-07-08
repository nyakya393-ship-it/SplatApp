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


        notifications: true


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
