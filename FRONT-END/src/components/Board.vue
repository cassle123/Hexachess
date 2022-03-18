<template>
   <main class="main" id="top">
     <div class="classLogout">
       <a href="/room" @click="ClickSendOutRoom"><img src="https://i.imgur.com/bRHR6bO.png" alt=""></a>
     </div>
     <section>
       <div class="container">
          <PopupWin v-if="isPopupWin"></PopupWin>
          <PopupLose v-if="isPopupLose"></PopupLose>
          <!-- <PopupWait v-if="!isPopupLose"></PopupWait> -->
         <div class="row h-100 g-0">
          <div class="col-md-6">
             <div class="card card-span h-100 text-white">
               <div class="test" style="width: 100%">
                 <h1></h1>
                  <img @load="loadCo" @click="clickCo(co)" v-for="co in hinh" :id="co.id" :src="co.hinh" :style="co.vitri" :class="co.class" :key="co" alt="" style="position: absolute;">
                  <img @click="clickDiChuyen(src)" v-for="src in dot" :src="src.hinh" :style="src.vitri" :class="src.class" :key="src" alt="" style="position: absolute;">
                  <img class="card-img h-100" src="coduyluan/Banco.png" alt="..." style="margin-top:-9px"/>
                  <a class="stretched-link" href="#!"></a>
               </div>
              </div>
           </div>
           <div class="col-md-6 BenPhai" style="background-color: #E09637;border-top-right-radius: 10px;border-bottom-right-radius: 10px;">
             <img src="assets/img/bg-img/logohexa.png" alt="" class="hinh-anh">
             <h1 v-if="isHost" class="solo-header">{{strRoomName}} </h1>
             <h1 v-else class="solo-header">{{strRoomName}} </h1>
             <div class="player">
               <div class="col-md-12">
                 <div v-for="data in DataInfoPlayer" :key="data">
                   <template v-if="isHost">
                      <div class="col-md-6" id="member1">Người Chơi 1
                        <p v-if="isLuocDiChuyen">{{data.host}}</p>
                        <p v-else>{{data.host}}</p>
                      </div>
                      <div class="col-md-6" id="member2" >Người Chơi 2
                        <div class="testmau">
                          <p v-if="!isLuocDiChuyen" >{{data.guest}}</p>
                          <p v-else >{{data.guest}}</p>
                        </div>
                      </div>
                   </template>
                   <template v-else>
                      <div class="col-md-6" id="member1">Người Chơi 1                        
                        <p v-if="!isLuocDiChuyen">{{data.host}}</p>
                        <p v-else>{{data.host}}</p>
                      </div>
                      <div class="col-md-6" id="member2" >Người Chơi 2
                        <div class="testmau">
                          <p v-if="isLuocDiChuyen" >{{data.guest}}</p>
                          <p v-else >{{data.guest}}</p>
                        </div>
                      </div>
                   </template>
                  
                 </div>
               </div>
             </div>
             <!-- <div class="button-role">
               <button class="snip1582">Bỏ Cuộc</button>
               <button class="snip1582">Undo</button>
               <button class="snip1582">Redo</button>
             </div> -->
             <div class="chat-game">
               <h3>Chat Vui Nào !</h3>
               <input type="text" style="display:inline-block" v-model="message">&nbsp;
               <button @click="ClickSendDataChatToRoom">Gửi</button>
               <div style="background-color:white;" v-for="data in DataChat" :key="data">
                    {{data.chat}}
                    </div>
             </div>
             <div class="draw-img">
               <p style="color: yellow;font-size: 20px;">----======{(-_-)}======----</p>
             </div>         
           </div>
         </div>
       </div>
     </section>
   </main>
</template>

<script>
//Import thư viện server
import { io } from "socket.io-client";
import axios from 'axios'
import mang from '@/Test/test.js'
import MaTran from '@/Test/MaTranBanCo.js'
import TinhNuocDi from '@/Test/TinhNuocDi.js'
import PopupWin from './PopupWin'
import PopupLose from './PopupLose'
// import PopupWait from './PopupWaitPlayer'
const guest = sessionStorage.getItem("GuestJoinRoom");
export default {
  components: { 
    PopupWin,
    PopupLose,
    // PopupWait
   },
  name: 'Board',
  data() {
    return {
      isHost: false,
      isLuocDiChuyen: false,
      isPopupWin: false,
      isPopupLose: false,
      isShow: true,
      mangi: 1,
      hinh: [
        {
          i:0,
          id: mang[0].id,
          hinh: mang[0].hinh,
          vitri: 'left: ' + mang[0].vitri.left + 'px; top: ' + mang[0].vitri.top + 'px',
          class: mang[0].id + ' ' + mang[0].loai
        }    
      ],
      dot: [
        {
          quanco: null,
          hinh: null,
          vitri: null,
          class: null,
          left: null,
          top: null,
          x: null,
          y: null
        }
      ],
      DataQuanCo: [],

      //Hiển thị thông tin người chơi
      strHost: "", // Người chơi 1
      strGuest: "", // Người chơi 2
      isCheckInforPlayer: true,
      DataInfoPlayer: [],
      strRoomName: "",

      //Chat
      messageChat: "",
      messageChatShow: "",
      DataChat: []

    }
  },
  computed: {
    message: {
      get(){
        return this.messageChat
      },
      set(value){
        this.messageChat = value
      }
    },
    chatMsg: {
      get(){
        return this.messageChatShow
      },
      set(value){
        this.messageChatShow = value
      }
    }
  },
  created() {
    this.socketInstance = io("http://localhost:3000/");
    const roomNameOfHost = sessionStorage.getItem("roomNameCreatedHost");
    const DataGuestJoinRom = 
      {
        GuestIdInDb: sessionStorage.getItem("GuestJoinRoom"),
        RoomName: sessionStorage.getItem("roomNameGuestJoin"),
      }
    
    if(roomNameOfHost != null){
      //Vào phòng và chỉnh sửa thông tin hiển thị người chơi
      this.socketInstance.emit("socketClientHostSendRequestInformationPlayer", roomNameOfHost); //Gửi tên phòng
      this.ChangeInfoPlayer();
      this.strRoomName = roomNameOfHost;
    }else if(DataGuestJoinRom.GuestIdInDb != null){
      this.socketInstance.emit("socketClientGuestSendDataWhenJoinRoom", DataGuestJoinRom);
      this.strRoomName = sessionStorage.getItem("roomNameGuestJoin");
    }


    this.ChangeInfoPlayerAll();

    //Nhận dữ liệu chat từ trong phòng
    this.GetDataChatRoom();

    //gửi dữ liệu phòng
    if(roomNameOfHost != null){
      //Vào phòng và chỉnh sửa thông tin hiển thị người chơi
      this.socketInstance.emit("socketSendRoomName", roomNameOfHost);
    }else if(DataGuestJoinRom.GuestIdInDb != null){
      this.socketInstance.emit("socketSendRoomName", DataGuestJoinRom.RoomName);
    }
    //Kiểm tra host được di chuyển trước
    if(guest == null) //Host
    {
      this.isLuocDiChuyen = true;
      this.isHost = true;
    }
    this.SocketOn();
  },
  methods: {
    SocketOn(){
      const This = this;
      const Hinh = this.hinh;
      
      this.socketInstance.on("socketClientSendDataQuanCoToServer", function (Data) {
        console.log(
          "Nhận nội dung từ máy khác: " + Data.x +  "-" + Data.y + " " + Data.user
        );
        if (Data.CoBiAn != -1) {
          if (mang[Data.CoBiAn].id == "tuong") {
            This.btnOpenPopupLose();
            This.UpdateWinLose(0);
          }else{
            if (mang[Data.CoBiAn].id == "tuong_do") {
              This.btnOpenPopupLose();
              This.UpdateWinLose(0);
            }else Hinh[Data.CoBiAn].hinh = null;
          }
        }
        MaTran[Data.Yold][Data.Xold].id = "";
        MaTran[Data.y][Data.x].id = mang[Data.quanCo].id;
        Hinh[Data.quanCo].vitri = 'left: ' + Data.left + 'px; top: ' + Data.top + 'px';
        This.isLuocDiChuyen = true;
      });
    },
    async UpdateWinLose(num){
      const response = await axios.post("hexachess/updatewinlose.php",{
        id: sessionStorage.getItem('key'),
        winorlose: num
      })
      if (response.data == "1") {
        console.log(response.data);
      }else console.log(response)      
    },
    btnOpenPopupWin(){
      this.isPopupWin = true;
    },
    btnOpenPopupLose(){
      this.isPopupLose = true;
    },
    loadCo: function(){
      if (this.mangi < 32) {
          this.hinh.push({
            i: this.mangi,
            id: mang[this.mangi].id,
            hinh: mang[this.mangi].hinh,
            vitri: 'left: ' + mang[this.mangi].vitri.left + 'px; top: ' + mang[this.mangi].vitri.top + 'px',
            class: mang[this.mangi].id + ' ' + mang[this.mangi++].loai,
        })
      }
    },
    clickCo: function(src){
      if (!this.isLuocDiChuyen) {
        return;
      }
      //Lấy tên quân cờ và loại quân cờ đã chọn
      const loaico = src.class.split(" ");
      if (guest == null) {
        if (loaico[1] != "Do") {
          return;
        }
      }else{
        if (loaico[1] != "Den") {
          return;
        }
      }
      
      var x,y;
      for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
          if (MaTran[i][j].id == loaico[0]) {
            x = j;
            y = i;
          }
        }
      }
      var NuocDi = new Array();
      NuocDi = TinhNuocDi(loaico[0], loaico[1], x, y);
      //Xóa dấu dot cũ
      this.dot.splice(0);

      for (let i = 0; i < NuocDi.length; i++) {
        this.dot.push({
          quanco: src,
          hinh: '/coduyluan/dot.png',
          vitri: 'left: ' + MaTran[NuocDi[i].top][NuocDi[i].left].left + 'px; top: ' + MaTran[NuocDi[i].top][NuocDi[i].left].top + 'px; margin-left:8px; margin-top: 6px',
          class: 'dropimage' + i + '',
          left: MaTran[NuocDi[i].top][NuocDi[i].left].left,
          top: MaTran[NuocDi[i].top][NuocDi[i].left].top,
          x: NuocDi[i].left,
          y: NuocDi[i].top
        })
      }
    },
    clickDiChuyen: function(src){
      this.isLuocDiChuyen = false;
      const loaico = src.quanco.class.split(" ");
      const ConCoHienTai = src.quanco.i;
      const left = src.left;
      const top = src.top;
      const x = src.x;
      const y = src.y;
      this.hinh[ConCoHienTai].vitri = 'left: ' + left + 'px; top: ' + top + 'px';
      //alert(this.hinh[ConCoHienTai].id);
      //Xóa dấu dot cũ
      this.dot.splice(0);
      //Xóa con cờ ở điểm cũ
      var vXold, vYold;
      for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
          if (MaTran[i][j].id == loaico[0]) {
            MaTran[i][j].id = "";
            vYold = i;
            vXold = j;
          }
        }
      }
      //Ăn cờ
      if (MaTran[y][x].id != "") {
        for (let i = 0; i < mang.length; i++) {
          if (MaTran[y][x].id == mang[i].id) {
            if (loaico[1] != mang[i].loai) {
              if (mang[i].id == "tuong") {
                this.btnOpenPopupWin();
                this.UpdateWinLose(1);
              } else {
                if (mang[i].id == "tuong_do") {
                  this.btnOpenPopupWin();
                  this.UpdateWinLose(1);
                }
                else {
                  this.hinh[i].hinh = null;
                  MaTran[y][x].id = mang[ConCoHienTai].id;
                }
              }
              this.SendData(ConCoHienTai, x, y, vXold, vYold, left, top, i);
            }
          }
        }
      } else {
        MaTran[y][x].id = mang[ConCoHienTai].id;
        //Truyền dữ liệu nước đi
        this.SendData(ConCoHienTai, x, y, vXold, vYold, left, top, -1);
      }
    },
    SendData(dataCo, dataX, dataY, dataXold, dataYold, dataLeft, dataTop, dataCoBiAn) {
      const DataChess = {
        // Tạo dữ liệu để gửi sang server
        id: new Date().getTime(),
        user: "Temp",
        quanCo: dataCo,
        x: dataX,
        y: dataY,
        Xold: dataXold,
        Yold: dataYold,
        left: dataLeft,
        top: dataTop,
        CoBiAn: dataCoBiAn
      };

      //Gửi dữ liệu nước đi từ client sang server
      this.socketInstance.emit(
        "socketClientSendDataQuanCoToServer",
        DataChess
      );
      console.log('Truyền dữ liệu nước đi');
    },
    ChangeInfoPlayer: function (){ //Lấy tên khi host tạo phòng
      const push = this.DataInfoPlayer;

      this.socketInstance.on("socketServerSendRequestInformationPlayer", function(data){ // Nhận tên phòng

      push.splice(0);

        push.push({
          host: data[0].host,
          guest: data[0].guest,
        });
        sessionStorage.setItem(("Host"), data[0].host)
        sessionStorage.setItem(("Guest"), data[0].guest)
      }) 
    },
    ChangeInfoPlayerAll: function (){ //Đổi thông tin cả Host và Guest
      const push = this.DataInfoPlayer;
      this.socketInstance.on("IoSendDataInfoPlayer", function(data){ // Nhận tên phòng
        push.splice(0);
        push.push({
          host: data[0].host,
          guest: data[0].guest
        });
        sessionStorage.setItem(("Host"), data[0].host)
        sessionStorage.setItem(("Guest"), data[0].guest)
      })

      this.socketInstance.on("socketServerSendLeaveRoom", function(data){
        console.log("Nhận dữ liệu có người thoát phòng", data);
        sessionStorage.setItem("LeaveRoom", true)
        window.location.href="http://localhost:8080/room";
      })

      
      },

    //Chức năng chat trong phòng
    ClickSendDataChatToRoom: function(){
      var RoomNameFinal = "";

      if(sessionStorage.getItem("roomNameCreatedHost") != null)
        RoomNameFinal = sessionStorage.getItem("roomNameCreatedHost")
      else if(sessionStorage.getItem("roomNameGuestJoin") != null)
        RoomNameFinal = sessionStorage.getItem("roomNameGuestJoin")
      const DataChatRoom = {
        RoomNameHost : RoomNameFinal,
        MessageChat : this.message,
      }
      this.socketInstance.emit("socketSendChatToServer", DataChatRoom)

      //Xử lý ai là người Gửi
      if(sessionStorage.getItem("GuestJoinRoom") == null) //Host
      {
        const push = this.DataChat;

        push.push({
          chat: sessionStorage.getItem("Host") + ": " + this.message
        });
      }else{
        const push = this.DataChat;

        push.push({
          chat: sessionStorage.getItem("Guest") + ": " + this.message
        });
      }
      this.message = "";
    },

    GetDataChatRoom: function(){
      const push = this.DataChat;
      this.socketInstance.on("socketServerSendChatToRoom", function(data){
        if(guest == null) //Host
        {
          push.push({
          chat: sessionStorage.getItem("Guest") + ": " + data
          });
        }else{
          push.push({
          chat: sessionStorage.getItem("Host") + ": " + data
        });
        }
        
      })
    },

    ClickSendOutRoom: function(){
      const isLeave = true
      this.socketInstance.emit("socketClientSendLeaveRoom", isLeave)
    },

  }
}
</script>

<style scoped>
.h-100{
    margin-right: 2%;
  }
  @media (max-width: 1200px) {
    .h-100{
      width: 510px;
    }
    .BenPhai{
      left: 55%;
    }
    .player p{
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-bottom: 30px;
    }
    .container{
      height: 20%;
    }
    .chat-game{
      top: 10%;
    }
    .draw-img{
      position: relative;
      top: 12%;
    }
  }
  @media (max-width: 800px) {
    .h-100{
      width: 510px;
      margin-right: -0.1%
    }
    .text-white{
      margin-left: -3.3%;
    }
    .BenPhai{
      left: -1%;
    }
  }
  .classLogout{
    position: fixed;
    top: 7%;
    left: 40px;
  }
  .classLogout img{
    width: 80px;
  }
  .main{
    margin-bottom: 46px;
    margin-top: 46px;
  }
  .hinh-anh{
    position: relative;
    width: 15%;
    top: 2%;
    border-radius: 50%;
  }
  .solo-header{
    position: relative;
    top: 5%;
    font-size: 30px;
  }
  .player{
    position: relative;
    top: 14%;
  }
  .player p{
    background-color: chocolate;
    height: 50px;
    border-radius: 10px;
    padding: 12px;
    margin-top: 12px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
  .testmau p{
    background-color: #30598C;
    height: 50px;
    border-radius: 10px;
    padding: 12px;
    margin-top: 12px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
  #member1, #member2{
    font-size: 18px;
    font-weight: bold;
    color: yellow;
    display:inline-block;
  }
  .button-role{
    position: relative;
    margin-top: 7%;
  }
  .snip1582 {
  background-color: #c47135;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'BenchNine', Arial, sans-serif;
  font-size: 1em;
  font-size: 14px;
  line-height: 1em;
  margin: 10px 20px;
  outline: none;
  padding: 12px 30px 10px;
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
}
.snip1582:before,
.snip1582:after {
  border-color: transparent;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-style: solid;
  border-width: 0;
  content: "";
  height: 24px;
  position: absolute;
  width: 24px;
}
.snip1582:before {
  border-color: #c47135;
  border-top-width: 2px;
  left: 0px;
  top: -5px;
}
.snip1582:after {
  border-bottom-width: 2px;
  border-color: #c47135;
  bottom: -5px;
  right: 0px;
}
.snip1582:hover,
.snip1582.hover {
  background-color: #c47135;
}
.snip1582:hover:before,
.snip1582.hover:before,
.snip1582:hover:after,
.snip1582.hover:after {
  height: 100%;
  width: 100%;
}
.chat-game{
  position: relative;
  margin-top: 25%;
}
.chat-game h3{
  font-family: 'Monaco', cursive;
}
.chat-game input{
    display: inline-block;
    width: 70%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 32px;
    position: relative;
    margin-bottom: 5px;
}
.chat-game button{
  width: 16%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 32px;
  background-color: yellow;
  font-size: 16px;
  font-weight: bold;
}
</style>
