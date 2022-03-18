<template>
   <main class="main-intro" id="top">
    <section class="body-intro">
      <div class="container-intro">       
        <h2>Giới thiệu cờ tướng</h2>
        <p style="font-size: 15px;text-align: center">Cờ tướng (Tiếng Trung: 象棋), hay còn gọi là cờ Trung Hoa (Tiếng Trung: 中國象棋), 
          là một trò chơi trí tuệ dành cho hai người. Đây là loại cờ phổ biến nhất tại các nước như Trung Quốc, Việt Nam, Đài Loan và 
          Singapore và nằmtrong cùng một thể loại cờ với cờ vua, shogi, janggi. Trò chơi này mô phỏng cuộc chiến giữa hai quốc gia, 
          với mục tiêu là bắt được Tướng của đối phương. Các đặc điểm khác biệt của cờ tướng so với các trò chơi cùng họ là: các quân 
          đặt ở giao điểm các đường thay vì đặt vào ô, quân Pháo phải nhảy qua 1 quân khi ăn quân, các khái niệm sông và cung nhằm giới 
          hạn các quân Tướng, Sĩ và Tượng.</p> 
        <div class="card card-span h-100 text-white">
          <img class="card-img h-100" src="assets/img/core-img/cotuonggioithieu.jpg" />
          <a class="stretched-link" href="#!"></a>
        </div><br>
          <p style="font-size :15px">
          Người Trung Hoa đặt tên cho cờ này là Tượng kỳ (象棋) với 
          ý nghĩa cờ hình tượng (theo chữ Hán) chứ không phải vì có quân tượng (voi) trên bàn cờ. Cũng có một số tài liệu lý 
          giải rằng, vì Trung Hoa trước thời nhà Nguyên (1271-1368)... thì không có voi, khi họ tiếp nhận Saturanga thấy trong 
          các quan có quân voi lạ nên người Trung Hoa bèn gọi là "tượng kỳ" để kỷ niệm một loại cờ lạ có con voi. Như thế có 
          người suy ra "tượng kỳ" có nghĩa là cờ voi. Trong tiếng Việt, từ trước tới nay trò chơi này được gọi là cờ tướng do 
          trong bàn cờ quân Tướng là quan trọng nhất.</p>
      </div>
      <hr class="logo-brand" style="margin-top: 25px; border: 0; border-top: 1px solid #ff0000; width: 80%; margin-left: 10%;"/>
        <div class="tieu-de">
            <h2>Các bàn cờ từ xưa đến nay!</h2>
        </div>      
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <img class="card-img w-50 h-40" src="assets/img/core-img/co1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="card-img w-50 h-40" src="assets/img/core-img/co2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="card-img w-50 h-40" src="assets/img/core-img/co3.jpg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="card-img w-50 h-40" src="assets/img/core-img/co4.jpg" alt="Fourth slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      </div>
    </section>
   </main>
</template>

<script>
export default {
    name: 'Intro'
}
</script>

<style>
  .main-intro{
    margin-bottom: 0;
    margin-top: 0;
    background-image: url(https://i.imgur.com/fR5xqpT.jpg);
    background-size: cover;
  }
  .body-intro{
    background-color: rgba(0,0,0,0.5);
    width: 1200px;
    margin: auto;
    height: 1628px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .container-intro p{
    color: #fff;
  }
  .tieu-de h2{
    text-transform: uppercase;
    color: orange;
  }
  .container-intro h2{
    text-transform: uppercase;
    color: orange;
  }
</style>