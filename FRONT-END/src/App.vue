<template>
    <iframe name="iframe1" id="iframe1" src="assets/img/video/VanCoTuong.mp3" frameborder="0" border="0" cellspacing="0" style="border-style: none;width: 0; height: 0;"></iframe>
   <!-- ##### Header Area Start ##### -->
  <header class="header_area">
    <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        <!-- Classy Menu -->
        <nav class="classy-navbar" id="essenceNav">
            <!-- Logo -->
            <a class="nav-brand" href="/">Hexa-<em style="font-style: normal;color: orange;">Chess</em></a>
            <!-- Navbar Toggler -->
            <div class="classy-navbar-toggler">
                <span class="navbarToggler"></span>
            </div>
            <!-- Menu -->
            <div class="classy-menu">
                <!-- close btn -->
                <div class="classycloseIcon">
                    <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                </div>
                <!-- Nav Start -->
                <div class="classynav">
                    <ul>
                        <li><a class="change" href="/">TRANG CHỦ</a></li>
                        <li><a class="change" href="/intro">GIỚI THIỆU</a></li>
                        <li><a class="change" href="/rule">CÁCH CHƠI</a></li>
                        <li><a class="change" v-if="ShowChat" href="/chat">TÁN GẨU</a></li>
                        <li><a class="change" href="/addfriend">KẾT BẠN</a></li>                                      
                    </ul>
                </div>
                <!-- Nav End -->
            </div>
        </nav>
      <div class="LogoutAccount">
        <a href="#" class="classImgLogout" @click="DangXuat" v-if="ShowLogout"><img src="https://i.imgur.com/QpR6DDl.png"></a>
      </div>
    </div>
  </header>
  <!-- ##### Header Area End ##### -->
  <router-view />
  <!-- ##### Body Area Start ##### -->
  <!-- <body>
    <section>
      <h1>Test lay du lieu</h1>
      <form action="">
        <table>
          <tr>
            <td>Tai khoan:</td>
            <td><input type="text" v-model="account.username" /></td>
          </tr>
          <tr>
            <td>Mat khau:</td>
            <td><input type="text" v-model="account.password" /></td>
          </tr>
          <tr>
            <td>Email:</td>
            <td><input type="text" v-model="account.email" /></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="text" @click="DangKy">Ok</button>
            </td>
          </tr>
        </table>
      </form>
      {{account}}
    </section>
  </body> -->
  <!-- ##### Body Area End ##### -->
  <!-- ##### Footer Area Start ##### -->
  <footer class="footer_area clearfix">
    <div class="container">
      <div class="row align-items-end">
        <!-- Single Widget Area -->
        <div class="col-12 col-md-6">
          <div class="single_widget_area">
            <div class="footer_heading mb-30">
              <h6>Đăng Ký Để Nhận Nhiều Thông Tin Về Cờ Tướng!</h6>
            </div>
            <div class="subscribtion_form">
              <form>
                <input
                  type="email"
                  name="mail"
                  class="mail"
                  placeholder="Nhập Email"
                />
                <button type="button" class="submit">
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <!-- Single Widget Area -->
        <div class="col-12 col-md-6">
          <div
            class="single_widget_area"
            style="position: relative; margin-left: 68%"
          >
            <div class="footer_social_area">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
                ><i class="fa fa-facebook" aria-hidden="true"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
                ><i class="fa fa-instagram" aria-hidden="true"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
                ><i class="fa fa-twitter" aria-hidden="true"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Pinterest"
                ><i class="fa fa-pinterest" aria-hidden="true"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Youtube"
                ><i class="fa fa-youtube-play" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12 text-center" style="margin-bottom: -25px">
          <p style="color: #fff">
            Bản quyền &copy;2021 | Được Design và Thiết kế bởi những ông hoàng
            HTML/ CSS
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!-- ##### Footer Area End ##### -->
</template>

<script>
//import axios from 'axios'

export default {
  name: "App",
  components: {},
  data() {
    return {
      account: {
        username: '',
        password: '',
        email: ''
      },
      ShowLogout: false,
      ShowChat: false
    };
  },
  created() {
    if (sessionStorage.getItem("key") != null) {
      this.ShowLogout = true;
      this.ShowChat = true;
    }
  },
  methods: {
    DangXuat(){
      sessionStorage.clear();
      location.reload();
      window.location.href="http://localhost:8080";
    }
  }
  // methods: {
  //   DangKy(e) {
  //     e.preventDefault();
  //     console.log("Ok");
  //     axios
  //       .post("http://localhost/hexachess/test.php", {
  //         taikhoan: this.account.username,
  //         matkhau: this.account.password,
  //         email: this.account.email
  //       })
  //       .then(function (response) {
  //           if (response.data == 'Success') {
  //               console.log(response.data);
  //           }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   },
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.LogoutAccount img{
   width: 46px;
}
.LogoutAccount{
  position: relative;
  right: 3%;
}
</style>
