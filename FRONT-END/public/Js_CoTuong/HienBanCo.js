$(document).ready(function () {
    HienQuanCo();
});

//den
const xe_den1 = new ConCo("xe_den1", "Den", "/coduyluan/Xe_den.png", new ViTri(0, 0));
const ma_den1 = new ConCo("ma_den1", "Den", "/coduyluan/Ma_den.png", new ViTri(58, 0));
const voi_den1 = new ConCo("voi_den1", "Den", "/coduyluan/Voi_den.png", new ViTri(114, 0));
const si_den1 = new ConCo("si_den1", "Den", "/coduyluan/Si_den.png", new ViTri(172, 0));
const tuong = new ConCo("tuong", "Den", "/coduyluan/Tuong_den.png", new ViTri(229, 0));
const si_den2 = new ConCo("si_den2", "Den", "/coduyluan/Si_den.png", new ViTri(286, 0));
const voi_den2 = new ConCo("voi_den2", "Den", "/coduyluan/Voi_den.png", new ViTri(342, 0));
const ma_den2 = new ConCo("ma_den2", "Den", "/coduyluan/Ma_den.png", new ViTri(400, 0));
const xe_den2 = new ConCo("xe_den2", "Den", "/coduyluan/Xe_den.png", new ViTri(458, 0));
const phao_den1 = new ConCo("phao_den1", "Den", "/coduyluan/Phao_den.png", new ViTri(58, 117));
const phao_den2 = new ConCo("phao_den2", "Den", "/coduyluan/Phao_den.png", new ViTri(400, 117));
const tot_den1 = new ConCo("tot_den1", "Den", "/coduyluan/Tot_den.png", new ViTri(0, 173));
const tot_den2 = new ConCo("tot_den2", "Den", "/coduyluan/Tot_den.png", new ViTri(114, 173));
const tot_den3 = new ConCo("tot_den3", "Den", "/coduyluan/Tot_den.png", new ViTri(229, 173));
const tot_den4 = new ConCo("tot_den4", "Den", "/coduyluan/Tot_den.png", new ViTri(342, 173));
const tot_den5 = new ConCo("tot_den5", "Den", "/coduyluan/Tot_den.png", new ViTri(458, 173));


//do
const tot_do1 = new ConCo("tot_do1", "Do", "/coduyluan/Tot_do.png", new ViTri(0, 344));
const tot_do2 = new ConCo("tot_do2", "Do", "/coduyluan/Tot_do.png", new ViTri(114, 344));
const tot_do3 = new ConCo("tot_do3", "Do", "/coduyluan/Tot_do.png", new ViTri(229, 344));
const tot_do4 = new ConCo("tot_do4", "Do", "/coduyluan/Tot_do.png", new ViTri(342, 344));
const tot_do5 = new ConCo("tot_do5", "Do", "/coduyluan/Tot_do.png", new ViTri(458, 344));
const phao_do1 = new ConCo("phao_do1", "Do", "/coduyluan/Phao_do.png", new ViTri(58, 403));
const phao_do2 = new ConCo("phao_do2", "Do", "/coduyluan/Phao_do.png", new ViTri(400, 403));
const xe_do1 = new ConCo("xe_do1", "Do", "/coduyluan/Xe_do.png", new ViTri(0, 517));
const ma_do1 = new ConCo("ma_do1", "Do", "/coduyluan/Ma_do.png", new ViTri(58, 517));
const voi_do1 = new ConCo("voi_do1", "Do", "/coduyluan/Voi_do.png", new ViTri(114, 517));
const si_do1 = new ConCo("si_do1", "Do", "/coduyluan/Si_do.png", new ViTri(172, 517));
const tuong_do = new ConCo("tuong_do", "Do", "/coduyluan/Tuong_do.png", new ViTri(229, 517));
const si_do2 = new ConCo("si_do2", "Do", "/coduyluan/Si_do.png", new ViTri(286, 517));
const voi_do2 = new ConCo("voi_do2", "Do", "/coduyluan/Voi_do.png", new ViTri(342, 517));
const ma_do2 = new ConCo("ma_do2", "Do", "/coduyluan/Ma_do.png", new ViTri(400, 517));
const xe_do2 = new ConCo("xe_do2", "Do", "/coduyluan/Xe_do.png", new ViTri(458, 517));

const mang = [xe_den1, ma_den1, voi_den1, si_den1, tuong, si_den2, voi_den2, ma_den2, xe_den2, phao_den1, phao_den2, tot_den1, tot_den2, tot_den3, tot_den4,
    tot_den5, tot_do1, tot_do2, tot_do3, tot_do4, tot_do5, phao_do1, phao_do2, xe_do1, ma_do1, voi_do1, si_do1, tuong_do, si_do2, voi_do2, ma_do2, xe_do2
];

function HienQuanCo() {

    alert('Xin chao');
    // for (let i = 0; i < mang.length; i++) {
    //     var p = mang[i].vitri;
    //     $(".test").append('<img src="' + mang[i].hinh + '" class="' + mang[i].id + ' ' + mang[i].loai + '"  alt="" style="position: absolute; left: ' + p.left + 'px; top: ' + p.top + 'px">');
    //     Click(mang[i].id, i);

    // }
    //TaoMaTran();
}

function TaoMaTran() {

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
            for (let t = 0; t < 32; t++) {
                var p = mang[t].vitri;
                if (MaTran[i][j].top == p.top && MaTran[i][j].left == p.left)
                    MaTran[i][j].id = mang[t].id;
            }


        }
    }
}