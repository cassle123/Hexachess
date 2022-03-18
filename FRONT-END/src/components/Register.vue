<template>
  <div class="vue-tempalte">
    <form class="body-login">
      <div class="content-login">
        <h3>Đăng Ký</h3><br>
        <div class="form-group">
          <label>Họ và Tên:</label>
          <input
            type="text"
            class="form-control form-control-lg"
            placeholder="Nhập họ và tên ..."
            v-model="account.fullname"
            id="idHoVaTen"
          />
        </div>
        <div class="form-group">
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            class="form-control form-control-lg"
            placeholder="Nhập tên đăng nhập ..."
            v-model="account.username"
            id="idTenDangNhap"
          />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Nhập Email ..."
            v-model="account.email"
            id="idEmail"
          />
        </div>
        <div class="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Nhập mật khẩu ..."
            v-model="account.password"
            id="idMatKhau"
          />
        </div><br>
        <button type="submit" @click="DangKy" class="btn btn-lg btn-block btn1">
          Đăng ký
        </button>
        <label class="lbl-reg">Bạn đã có tài khoản ? &nbsp;<a href="/login">Đăng Nhập</a></label>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data() {
    return {
      account: {
        fullname: '',
        username: '',
        password: '',
        email: ''
      },
    };
  },
  methods: {
    async DangKy(e) {
      var varArray = document.getElementsByTagName('input');
      var idHoVaTen = varArray[0].value;
      var idTenDangNhap = varArray[1].value;
      var idEmail = varArray[2].value;
      var idMatKhau = varArray[3].value;
      e.preventDefault();
      if(idHoVaTen == "" || idTenDangNhap == "" || idEmail == "" || idMatKhau ==""){
        alert("Các trường thông tin không được để trống !");
        return;
      }
      if(idTenDangNhap.length < 3 || idTenDangNhap.length > 10 || idMatKhau.length < 3 || idMatKhau.length > 10){
        alert ("Tài khoản, mật khẩu không ít hơn 3 ký tự và không vượt quá 10 ký tự");
        return;
      }
      await axios.post("hexachess/register.php", {
          hoten: this.account.fullname,
          taikhoan: this.account.username,
          matkhau: this.account.password,
          email: this.account.email
        })
        .then(function (response) {
          if (response.data == 'Success') {
            window.location.href = "http://localhost:8080/login";
            alert('Đăng ký thành công');
          }
          else{
            alert(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
      });
    },
  }
};
</script>

<style scoped>
.vue-tempalte{
  display: flex;
  height: 663px;
  justify-content: center;
  background-image: url(https://i.imgur.com/91Oj0DG.jpg);
  background-size: cover;
}
.body-login{
    width: 35%;
    position: relative;
    background-color: rgba(0,0,0,0.5);
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    height: 628px;
    margin: auto;
    border-radius: 10px;
}
.content-login{
    position: relative;
    display: inline-block;
    top: 3%;
    width: 80%;
}
.content-login h3{
  color: #fff;
  font-size: 40px;
}
.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;

}
.form-group label{
  color: #fff;
  font-size: 20px;
}
.btn1{
  width: 55%;
  position: relative;
  margin: auto;
  margin-bottom: 17px;
  background-image: linear-gradient(to right, #ffd080, #e28743);
  font-weight: bold;
}
.content-login .lbl-reg{
  color: #ffd080;
  font-size: 15px;
}
.content-login .lbl-reg a{
  font-size: 15px;
}
</style>
