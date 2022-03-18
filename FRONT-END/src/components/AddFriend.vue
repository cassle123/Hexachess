<template>
  <div class="layout">
    <h1 class="title-add-friends">Tìm bạn bốn phương</h1>
    <div id="carouselId" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <main class="grid">
                    <div class="slider-div" id="image1">
                        <img src="/assets/img/bg-img/backgoung.jpg">
                        <div class="text">
                            <h3>Tên người chơi khác</h3>
                            <p>Giới thiệu về bản thân</p>
                            <a href="#" class="add-btn">Gửi lời mời </a>
                        </div>
                    </div>
                    <div class="slider-div" id="image2">
                        <img src="/assets/img/bg-img/buttonchess.jpg">
                        <div class="text">
                            <h3>Tên người chơi khác</h3>
                            <p>Giới thiệu về bản thân</p>
                            <a href="#" class="add-btn">Gửi lời mời </a>
                        </div>
                    </div>
                    <div class="slider-div" id="image2">
                        <img src="/assets/img/bg-img/buttonchess1.jpg">
                        <div class="text">
                            <h3>Tên người chơi khác</h3>
                            <p>Giới thiệu về bản thân</p>
                            <a href="#" class="add-btn">Gửi lời mời </a>
                        </div>
                    </div>
                    <div class="slider-div" id="image2">
                        <img src="/assets/img/bg-img/buttonchess2.jpg">
                        <div class="text">
                            <h3>Tên người chơi khác</h3>
                            <p>Giới thiệu về bản thân</p>
                            <a href="#" class="add-btn">Gửi lời mời </a>
                        </div>
                    </div>
                </main>
            </div>
            <div class="carousel-item">
                <main class="grid">
                    <div class="slider-div" id="image1">
                        <img src="/assets/img/bg-img/imagehome.jpg">
                        <div class="text">
                            <h3>Tên người chơi khác</h3>
                            <p>Giới thiệu về bản thân</p>
                            <a href="#" class="add-btn">Gửi lời mời </a>
                        </div>
                    </div>
                    <div class="slider-div" id="image2">
                        <img src="/assets/img/bg-img/test.png">
                        <div class="text">
                            <h3>Tên người chơi khác</h3>
                            <p>Giới thiệu về bản thân</p>
                            <a href="#" class="add-btn">Gửi lời mời </a>
                        </div>
                    </div>
                    <div class="slider-div" id="image2">
                        <img src="/assets/img/bg-img/backgoung.jpg">
                        <div class="text">
                            <h3>Tên người chơi khác</h3>
                            <p>Giới thiệu về bản thân</p>
                            <a href="#" class="add-btn">Gửi lời mời </a>
                        </div>
                    </div>
                    <div class="slider-div" id="image2">
                        <img src="/assets/img/bg-img/backgoung.jpg">
                        <div class="text">
                            <h3>Tên người chơi khác</h3>
                            <p>Giới thiệu về bản thân</p>
                            <a href="#" class="add-btn">Gửi lời mời </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Trước</span>
        </a>
        <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Sau</span>
        </a>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AddFriend'
}
</script>

<style scoped>
.title-add-friends{
    position: relative;
    top: 24px;
}
.layout{
    height: 663px;
    background-image: url(https://i.imgur.com/VAlghKH.jpg);
    background-size: cover;
}
.grid{
    margin-top: 5%;
    margin-bottom: 4%;
    margin-left: 12%;
    display: grid;
    grid-template-columns: repeat(4, 0.22fr);
    grid-gap: 40px;
    align-items: center;
}
.grid div.slider-div{
    display: inline-block;
    background-color: white;
    border: none;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    text-align: center;
    width: 300px;
    transition: transform .3s;
}
.grid > div.slider-div:hover{
    transform: translateY(5px);
    box-shadow: 2px 2px 26px 0px rgba(201, 114, 33, 0.3);
}
.grid > div.slider-div img{
    width: 100%;
    height: 169px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.text{
    padding: 0 20px 20px;
    
}
.text h3{
    margin-top: 10px;
    text-transform: uppercase;
}
.add-btn{
  display: inline-block;
  padding: 12px 50px;
  color: black;
  border: 2px solid orange;
  border-radius: 6px;
  margin-top: 10px;
  transition: .3s linear;
  padding: 10px;
  cursor: pointer;
}
.add-btn:hover{
  background: orange;
  color: black;
}
@media (max-width: 1550px) {
    .grid{
        grid-template-columns: repeat(3,0.3fr) ;
        position: relative;
    }
}
@media (max-width: 1200px) {
    .grid{
        grid-template-columns: repeat(2,0.3fr) ;
        margin-left: 21%;
        position: relative;
    }
}
@media (max-width: 1000px) {
    .grid{
        grid-template-columns: repeat(1,0.3fr) ;
        margin-left: 34%;
    }
    .grid > article {
        text-align: center;
    }
}
</style>