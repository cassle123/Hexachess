<template>
  <!-- ##### Welcome Area Start ##### -->
  <section
    class="welcome_area bg-img background-overlay"
    style="background-image: url(assets/img/bg-img/imagehome.jpg)">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12">
          <div class="hero-content">
            <h6>Thử Sức Với Siêu Phẩm</h6>
            <h2>CỜ TƯỚNG CHIẾN !</h2>
            <a v-if="showTrangCaNhan" href="/room" class="btn essence-btn" style="border-radius: 10px">
                PHÒNG CỜ
            </a>
            <a v-else href="/login" class="btn essence-btn" style="border-radius: 10px">
                CHƠI NGAY
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Welcome Area End ##### -->

  <!-- ##### Top Catagory Area Start ##### -->
  <div class="top_catagory_area section-padding-80 clearfix">
    <div class="container">
      <div class="row justify-content-center">
        <!-- Single Catagory -->
        <div class="col-12 col-sm-6 col-md-4">
          <div
            class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style="background-image: url(assets/img/bg-img/buttonchess.jpg); border: 5px solid orange;">
            <div class="catagory-content">
              <a href="/profile" v-if="showTrangCaNhan">TRANG CÁ NHÂN</a>
              <a href="/login" v-else>ĐĂNG NHẬP</a>
            </div>
          </div>
        </div>
        <!-- Single Catagory -->
        <div class="col-12 col-sm-6 col-md-4">
          <div
            class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style="background-image: url(assets/img/bg-img/buttonchess1.jpg); border: 5px solid orange;">
            <div class="catagory-content">
              <a href="#"><img src="https://i.imgur.com/gYO2PUe.png" alt=""/></a>
            </div>
          </div>
        </div>
        <!-- Single Catagory -->
        <div class="col-12 col-sm-6 col-md-4">
          <div
            class="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style="background-image: url(assets/img/bg-img/buttonchess2.jpg); border: 5px solid orange;">
            <div class="catagory-content">
              <a href="/computer">MÁY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ##### Top Catagory Area End ##### -->

  <!-- ##### CTA Area Start ##### -->
  <div class="cta-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="cta-content bg-img background-overlay"
            style="background-image: url(assets/img/bg-img/khung2.png)"
          >
            <video
              controls
              style="
                width: 89.5%;
                border-radius: 10px;
                height: 96%;
                padding-top: 80px;
              "
            >
              <source src="assets/img/video/azirvideo_Trim.mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ##### CTA Area End ##### -->

  <!-- ##### New Arrivals Area Start ##### -->
  <section class="new_arrivals_area section-padding-80 clearfix">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <h2>Cao Nhân Cờ Tướng</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="popular-products-slides owl-carousel">
            <!-- Single Product -->
            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="assets/img/product-img/hinh4.jpg" alt="" />
              </div>
              <!-- Product Description -->
              <div class="product-description">
                <a href="#">
                  <h6>Nguyễn Vũ Quân</h6>
                </a>
              </div>
            </div>

            <!-- Single Product -->
            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="assets/img/product-img/hinh1.jpg" alt="" />
              </div>
              <!-- Product Description -->
              <div class="product-description">
                <a href="#">
                  <h6>Trương Á Minh</h6>
                </a>
              </div>
            </div>

            <!-- Single Product -->
            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="assets/img/product-img/hinh2.jpg" alt="" />
              </div>
              <!-- Product Description -->
              <div class="product-description">
                <a href="#">
                  <h6>Lại Lý Huynh</h6>
                </a>
              </div>
            </div>

            <!-- Single Product -->
            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="assets/img/product-img/hinh3.jpg" alt="" />
              </div>
              <!-- Product Description -->
              <div class="product-description">
                <a href="#">
                  <h6>Võ Minh Nhất</h6>
                </a>
              </div>
            </div>

            <!-- Single Product -->
            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="assets/img/product-img/hinh5.jpg" alt="" />
              </div>
              <!-- Product Description -->
              <div class="product-description">
                <a href="#">
                  <h6>Trần Quốc Việt (Việt Xích Lô)</h6>
                </a>
              </div>
            </div>

            <!-- Single Product -->
            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="assets/img/product-img/hinh6.jpg" alt="" />
              </div>
              <!-- Product Description -->
              <div class="product-description">
                <a href="#">
                  <h6>Nguyễn Hoàng Lâm</h6>
                </a>
              </div>
            </div>

            <!-- Single Product -->
            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="assets/img/product-img/hinh7.jpg" alt="" />
              </div>
              <!-- Product Description -->
              <div class="product-description">
                <a href="#">
                  <h6>Trềnh A Sáng</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### New Arrivals Area End ##### -->

  <!-- ##### Brands Area Start ##### -->

  <div class="brands-area d-flex align-items-center justify-content-between" style="margin-top: -45px">
    <div class="hinh-anh">
        <img src="assets/img/bg-img/logokyvuong.png" style="width: 24%;position: relative;margin-left: 160%;"/>
    </div>
  </div>

  <!-- ##### Brands Area End ##### -->
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showTrangCaNhan: false,
    };
  },
  created() {
    if (sessionStorage.getItem("key") != null) {
      this.showTrangCaNhan = true;
    }
  }
};
</script>

<style scoped>
.catagory-content img {
  position: relative;
  display: block;
  width: 90px;
}
</style>