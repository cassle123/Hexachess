<template>
    <div v-if="!isPopup" class="popup">
        <div class="popupinner">
            <slot/>
            <button @click="btnClosePopup" class="btnRestart">
                THOÁT
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isPopupLose'],
    data(){
        return {isPopup: this.isPopupLose}
    },
    methods: {
        btnClosePopup(){
            //this.p = true;
            window.location.href="http://localhost:8080/room";
        }
    }
}
</script>
<style scoped>
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .popupinner {
		background-image: url(https://i.imgur.com/k6Kv0bM.png);
        background-size: cover;
		padding: 32px;
        width: 35%;
        height: 51%;
        border-radius: 10px;
    }
    .btnRestart{
        position: relative;
        top: 93%;
    }
    .btnRestart, .btnRestart::after {
        width: 180px;
        height: 48px;
        font-size: 23px;
        font-family: 'Bebas Neue', cursive;
        background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
        border: 0;
        color: #fff;
        letter-spacing: 1px;
        line-height: 51px;
        box-shadow: 6px 0px 0px #00e6f6;
        outline: transparent;
        position: relative;
    }

    .btnRestart::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    
    content: 'CHƠI LẠI';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
    text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
    clip-path: var(--slice-0);
    }

    .btnRestart:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
    }

    @keyframes glitch {
    0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
    }
    10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
    }
    20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
    }
    30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
    }
    40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
    }
    50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
    }
    60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
    }
    70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
    }
    80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
    }
    90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
    }
    100% {
        clip-path: var(--slice-1);
        transform: translate(0);
    }
    }
    @media (max-width: 1000px){
        .popupinner{
            width: 100%;
            height: 46%;
            margin: 19%;
        }
    }
</style>