<template>
  <div class="BodyUpdate">
      <div class="FormUpdate">
          <h2>Đổi mật khẩu</h2>
          <div class="ContentUpdate">
            <div class="form-group">
                <label>Mật khẩu cũ</label>
                <input type="password" class="form-control form-control-lg" placeholder="Nhập mật khẩu cũ ..."
                v-model="info.password"
                />
            </div>
            <div class="form-group">
                <label>Mật khẩu mới</label>
                <input type="password" class="form-control form-control-lg" placeholder="Nhập mật khẩu mới ..."
                v-model="info.passwordnew"
                />
            </div>
            <button type="submit" @click="CapNhat" class="btn btn-lg btn-block btnUpdate">
                Cập Nhật
            </button>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'UpdatePassword',
    data() {
    return {
      info: {
        id: '',
        password:'',
        passwordnew:''
      },
    };
  },
  created(){
    console.log(sessionStorage.getItem("key"))
  },
  methods: {
    async CapNhat(e) {
      e.preventDefault();
      const MatKhauCu = this.info.password;
      const MatKhauMoi = this.info.passwordnew;

      if(MatKhauCu == "" || MatKhauMoi==""){
      alert('Bạn cần điền đầy đủ mật khẩu')
        return;
      }
      if(MatKhauMoi.length<3 ){
      alert('Nhập mật khẩu lớn hơn 3')
        return;
      }
      await axios.post("hexachess/updatepassword.php", {
          id: sessionStorage.getItem("key"),
          matkhau: this.info.password,
          matkhaumoi: this.info.passwordnew
        })
        .then(function (response) {
          if (response.data == 'Cập nhật thành công') {
            console.log(response.data)
            alert('Cập nhật thành công')
            window.location.href = "http://localhost:8080/profile"
          }else alert(response.data)
          
        })
        .catch(function (error) {
          console.log(error);
      });
    },
  }
};
</script>

<style scoped>
    .BodyUpdate{
        height: 663px;
        background-image: url(https://i.imgur.com/eaAPr0t.jpg);
        background-size: cover;
    }
    .FormUpdate{
        width: 675px;
        border-radius: 25px;
        background-color: rgba(0,0,0,0.7);
        box-shadow: 0 0 17px #333;
        height: 560px;
        margin-left: 32.4%;
        position: relative;
        top: 8%;
    }
    .FormUpdate h2{
        color: orange;
        top: 7%;
        position: relative;
        font-family: cursive;
        font-size: 45px;
    }
    .ContentUpdate{
        position: relative;
        top: 11%;
    }
    .ContentUpdate label{
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        position: relative;
    }
    .ContentUpdate input{
        width: 75%;
        left: 12%;
        position: relative;
    }
    .btnUpdate{
        width: 30%;
        left: 35%;
        position: relative;
        font-weight: bold;
        background-image: linear-gradient(to right, #70A611, #CCC91B);
    }
    @media (max-width: 1000px){
        .FormUpdate{
            right: 18%;
        }
    }
</style>