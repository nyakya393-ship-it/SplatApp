// =========================
// Nintendo API Layer
// InkBoard
// =========================



const NintendoAPI = {


    connected:false,



    initialize(){

        console.log(
            "Nintendo API Ready"
        );

    },



    async connect(){


        /*
            本来ここに
            認証処理を接続
        */


        this.connected = true;


        return {

            success:true

        };


    }



};
