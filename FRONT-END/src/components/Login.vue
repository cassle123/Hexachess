<template>
  <div class="vue-tempalte">
    <form class="body-login">
      <div class="content-login">
        <h3>Đăng Nhập</h3>
        <br />
        <div class="form-group">
          <label>Tên đăng nhập:</label>
          <input
            type="username"
            required
            class="form-control form-control-lg"
            placeholder="Tên đăng nhập ..."
            v-model="account.username"
            id="idName"
          />
        </div>
        <div class="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            required
            class="form-control form-control-lg"
            placeholder="Mật khẩu ..."
            v-model="account.password"
            id="idPass"
          />
        </div>
        <br />
        <button
          @click="DangNhap"
          type="submit"
          class="btn btn-lg btn-block btn1"
        >
          Đăng nhập
        </button>
        <label class="lbl-reg"
          >Bạn chưa có tài khoản ? &nbsp;<a href="/register">Đăng Ký</a></label
        >
      </div>
    </form>
    <div v-for="row in info" v-bind:key="row.id">
      {{ row }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import TenDangNhap from '@/Test/ThongTinNguoiChoi'
export default {
  name: "Login",
  data() {
    return {
      info: "",
      account: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async DangNhap(e) {
      e.preventDefault()
      const TaiKhoan = this.account.username;
      const MatKhau = this.account.password;

      if(TaiKhoan == "" || MatKhau==""){
      alert('Bạn cần điền đầy đủ tài khoản và mật khẩu')
        return;
      }
      const response = await axios.post("hexachess/login.php", {
        taikhoan: TaiKhoan,
        matkhau: MatKhau,
      });
      if (response.data == "Sai Mật Khẩu") {
        alert("Bạn nhập sai mật khẩu");
      } else if (response.data == "Tài khoản không tồn tại") {
        alert("Tài khoản của bạn không tồn tại");
      } else {
        sessionStorage.setItem('key', response.data);
        sessionStorage.setItem('username', TaiKhoan);
        window.location.href="http://localhost:8080/";
      }
    },
  },
};
</script>

<style scoped>
.vue-tempalte {
  display: flex;
  height: 663px;
  justify-content: center;
  background-image: url(https://i.imgur.com/91Oj0DG.jpg);
  background-size: cover;
}
.body-login {
  width: 35%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  height: 550px;
  margin: auto;
  border-radius: 10px;
}
.content-login {
  position: relative;
  display: inline-block;
  top: 8%;
  width: 80%;
}
.content-login h3 {
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
.form-group label {
  color: #fff;
  font-size: 20px;
}
.btn1 {
  width: 55%;
  position: relative;
  margin: auto;
  margin-bottom: 17px;
  background-image: linear-gradient(to right, #ffd080, #e28743);
  font-weight: bold;
}
.content-login .lbl-reg {
  color: #ffd080;
  font-size: 15px;
}
.content-login .lbl-reg a {
  font-size: 15px;
}
.social-icons ul {
  list-style: none;
  margin: 7px;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
  border-radius: 9px;
}
.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  color: #111;
}
.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #f1c685;
}
.text-right {
  text-align: right !important;
  color: white;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: black;
}
.btn-outline-primary {
  color: #212529;
  border-color: #ffc107;
}
.btn-outline-primary:hover {
  color: #212529;
  border-color: #ffc107;
  background: orange;
}
</style>
