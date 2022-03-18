<template>
  <div class="container-listroom" style="background-image:url(assets/img/bg-img/backgoung.jpg);background-size:cover;">
      <img src="assets/img/bg-img/DANHSACHPHONG.png" alt="">
      <div class="function-btn">
        <button class="btn-create" @click="ClickCreateNewRoom">Tạo bàn mới</button>
        <div class="list-Room">
          <div class="" v-for="data in DataRoom" :key="data">
            <!-- nơi chứa danh sách phòng -->
            <a href="#" style="fontSize:20px;" @click="ClickJoinRoom(data.RoomName)">{{ data.RoomName }}</a>
          </div>
        </div>
      </div>
  </div>
  <div class="space" style="margin-bottom:663px"></div>
</template>

<script>
import { io } from "socket.io-client";
export default {
  name: 'ListRoom', 
  data(){
    return{
      min: 1000,
      max: 9999,
      isGetRoom: true,
      DataRoom: [],
      strRoomName: "xin chào",
      strUsername: ""
    }
  },

  created(){ // Khởi tạo socket kết nối tới server

    this.socketInstance = io("http://localhost:3000/");
    this.socketInstance.emit("socketClientSendRequestListRoom", this.isGetRoom);
    this.LoadNewRoom(); //Nhận dữ liệu phòng người chơi khác tạo
    // this.LoadDeleteRoom();//Nhận dữ liệu phòng đã bị xóa
    this.LoadRoom();
    
    
    this.strUsername = sessionStorage.getItem("key"); // Tạo biến để chứa tên tài khoản
    console.log("Tài khoản hiện đang đăng nhập vào trang: "+ this.strUsername);
    // this.socketInstance.emit("socketClientSendUsername", this.strUsername);
    this.ShowLeaveRoom();
  },

  methods: {
    LoadRoom: function () {
      const push = this.DataRoom;

      this.socketInstance.on("socketServerSendRequestListRoom", function (Data) {
        // console.log("Nhận dữ liệu danh sách phòng từ server: " + Data[1].roomname);

        console.log("Nhận tổng số phòng: " + Data.length)

        for(let i=0; i<Data.length; i++)
        {
          push.push({
            RoomName: Data[i].roomname,
          });
          console.log("Tên phòng thứ "+ i+ ": "+ Data[i].roomname)
        }
      });
    },
    LoadNewRoom: function () {
      const push = this.DataRoom;
      this.socketInstance.on("socketServerSendNewRoom", function (Data) {
        push.push({
          RoomName: Data,
        });
      });
    },
    // LoadDeleteRoom: function () {
    //   const push = this.DataRoom;
    //   this.socketInstance.on("socketServerSendDisconnect", function (Data) {
    //     console.log(Data);
    //     console.log(push);
    //     for(let i=0; i<push.length; i++)
    //     {
    //       console.log(push[i].RoomName);
    //       if (push[i].RoomName == Data) {
    //         push.splice(i,1);
    //         //console.log(push[i].RoomName);
    //       }
    //     }
    //   });
    // },
    ClickCreateNewRoom(){
      
      this.socketInstance.emit("socketClientCreateNewRoom", this.strUsername); // Gửi dữ liệu tên chủ phòng từ client đến server

      this.socketInstance.on("socketServerSendChangePageToBoard", function (DataServerSend) {
        if(DataServerSend.isCheckChange){ 
          alert("Bạn tạo phòng thành công với tên: " + DataServerSend.NewRoomName);
          // this.$router.push('/board'); //Phần chuyển trang này chưa làm được

          window.location.href = "http://localhost:8080/board";
          //Còn chưa xử lý xuất ra danh sách phòng từ CSDL
          sessionStorage.setItem("roomNameCreatedHost", DataServerSend.NewRoomName); // Gán tên cho chủ phòng
        }
      })
    },

    ClickJoinRoom(roomName){
      sessionStorage.setItem("roomNameGuestJoin", roomName); //Lấy tên phòng khi người chơi 
      sessionStorage.setItem("GuestJoinRoom", sessionStorage.getItem("key"))
      window.location.href = "http://localhost:8080/board";
      sessionStorage.setItem("FirstJoinRoom", true)
    },

    //Random
    GenerateNumber: function () {
      return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
    },

    ShowLeaveRoom:function () {
      if(sessionStorage.getItem("LeaveRoom")){
        alert("Đối phương đã rời phòng");
        sessionStorage.setItem("LeaveRoom", "")
      }
    }
  }
}
</script>

<style scoped>
  .list-Room{
    position: fixed;
    width: 1300px;
    border-radius: 25px;
    background-color: rgba(0,0,0,0.7);
    box-shadow: 0 0 17px #333;
    margin: 9% auto;
    height: 470px;
    margin-left: 16.2%;
  }
  .container-listroom{
    height: 663px;
    position: fixed;
    width: 100%;
  }
  .container-listroom img{
    position: fixed;
    width: 34%;
    height: 17%;
    left: 33%;
  }
.btn-create{
    position: fixed;
    width: 6%;
    height: 35px;
    border-radius: 10px;
    background: none;
    border: 3px solid yellow;
    color: white;
    top: 25%;
    left: 77.8%;
    font-weight: bold;
}
@media (max-width: 1000px){
  .list-Room{
    width: 850px;
    right: 5.5%;
    top: 17%;
  }
  .container-listroom img{
    height: 15%;
    width: 45%;
    left: 29%;
  }
  .search-container{
    top: 22%;
    left: 5.5%;
  }
  .btn-create{
    top: 22%;
    left: 81.4%;
    width: 13%;
  }
}
</style>