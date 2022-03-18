import mang from '@/Test/test.js'
import MaTran from '@/Test/MaTranBanCo.js'



function ClickDiChuyen(x, y, mq, DoDai) {
    $('.dropimage' + mq + '').click(function () {

        // if (LoaiChange.loai == "Do") {
        //     LoaiChange.loai = "Den";
        // } else LoaiChange.loai = "Do";
        // //alert(LoaiChange.id);
        // if (LoaiChange.id == LoaiChange.red) {
        //     LoaiChange.id = LoaiChange.black;
        // } else LoaiChange.id == LoaiChange.red;
        //var ten = $(".dropimage").;
        /* console.log(ten);*/ 
        //split chia cai chuoi thanh cac phan bang dau cach
        let left = $('.dropimage' + mq + '').css("left").slice(0, 3);
        let top = $('.dropimage' + mq + '').css("top").slice(0, 3);

        //Lấy thông tin của top có phải là số hay không
        let t = top.slice(0, 1);
        let o = top.slice(1, 2);
        let p = top.slice(2, 3);

        let topOff;
        if (o >= '0' && o <= '9') {
            topOff = t + o;
            if (p >= '0' && p <= '9')
                topOff = topOff + p;
            else
                topOff = topOff;
        }
        else
            topOff = t;

        //Lấy thông tin của left có phải là số hay không
        let l = left.slice(0, 1);
        let e = left.slice(1, 2);
        let ft = left.slice(2, 3);

        let leftOff;
        if (e >= '0' && e <= '9') {
            leftOff = l + e;
            if (ft >= '0' && ft <= '9')
                leftOff = leftOff + ft;
            else
                leftOff = leftOff;
        }
        else
            leftOff = l;
        //alert(topOff);

        //var quanco;
        //Xóa con cờ ở điểm cũ
        let Xold, Yold;
        for (let i = 0; i <= 9; i++) {
            for (let j = 0; j <= 8; j++) {
                if (MaTran[i][j].id == ConCoHienTai) {
                    MaTran[i][j].id = "";
                    Yold = i;
                    Xold = j;

                }
            }
        }

        //MaTran[y][x].id = ConCoHienTai;


        //hubcontext.server.sendmove(group, ConCoHienTai, leftOff, topOff)
        
        // xoa thi them 1 tham so la class cua quan co bi xoa

        $('.' + ConCoHienTai + '').css({ "top": topOff + 'px', "position": 'absolute' });
        $('.' + ConCoHienTai + '').css({ "left": leftOff + 'px', "position": 'absolute' });

        //Xóa nút di chuyển khi con cờ đã ở tại vị trí nút
        for (let stt = 0; stt < DoDai; stt++) {
            $('.dropimage' + stt + '').remove();
        }

        //Ăn cờ [Chưa test được cờ cùng loại có ăn hay chưa, lỗi chỗ con tướng, khi trùng vị trí đó thì con tướng luôn con tướng nằm trên]
        if (MaTran[y][x].id != "") {
            for (let i = 0; i < mang.length; i++) {
                if (MaTran[y][x].id == mang[i].id) {
                    if (LoaiConCo != mang[i].loai) {
                        if (mang[i].id == "tuong") {
                            showPopup();
                            GameOver();
                        } else {
                            if (mang[i].id == "tuong_do") {
                                alert("Quân đỏ thua ");
                                showPopup();
                                GameOver();
                            }
                            else {
                                $('.' + mang[i].id + '').remove();
                                MaTran[y][x].id = ConCoHienTai;
                                //hubcontext.server.sendmoveMaTran(group, ConCoHienTai, y, x, Yold, Xold, LoaiChange.loai, mang[i].id)
                            }
                        }
                    }
                }
            }
        } else {
            MaTran[y][x].id = ConCoHienTai;
            //hubcontext.server.sendmoveMaTran(group, ConCoHienTai, y, x, Yold, Xold, LoaiChange.loai, 0);
            //LayDuLieuMaTran();
        }
    });
}

export default ClickDiChuyen;