import mang from '@/Test/test.js'
import MaTran from '@/Test/MaTranBanCo.js'

class ViTri
{
    constructor(left, top)
    {
        this.top = top;
        this.left = left;
    }
}

function TinhNuocDi(ten, loai, x, y) {

    var NuocDiHienTai = new Array();
    var v1 = -1, v2 = -1, v3 = -1, v4 = -1;

    // co do
    if (loai == "Do" && (ten == "tot_do1" || ten == "tot_do2"
        || ten == "tot_do3" || ten == "tot_do4" || ten == "tot_do5")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y][x - 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (x != 8) {
                if (MaTran[y][x + 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x].id == mang[a].id) {
                    v4 = a;
                }
            }
        }
        if (y != 0) {
            if (v1 != -1) {
                if ((mang[v1].loai != "Do")) {
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1)
                    );
                }
            } else {
                NuocDiHienTai.push(
                    new ViTri(x, y - 1)
                );
            }
        }

        if (y <= 4) {
            if (v2 != -1) {
                if ((mang[v2].loai != "Do")) {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y)
                    );
                }
            } else {
                if (x != 0) {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y)
                    );
                }

            }
            if (v3 != -1) {
                if ((mang[v3].loai != "Do")) {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y)
                    );
                }
            } else {
                if (x != 8) {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y)
                    );
                }

            }
        }
        return NuocDiHienTai;

    }

    if (loai == "Do" && (ten == "xe_do1" || ten == "xe_do2")) {
        var z = y - 1;
        if (y != 0) {
            while (v1 == -1) {
                if (z == -1) {
                    v1 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[z][x].id == mang[m].id) {
                            v1 = m;
                            m = mang.length;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= y; a++) {
                if (MaTran[y - a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y - a)
                    );
                } else {
                    if (v1 != -2) {
                        if (mang[v1].loai != "Do") {
                            NuocDiHienTai.push(
                                new ViTri(x, y - a)
                            );
                        }
                    }

                    a = y;
                }
            }
        }
        var d = y + 1;
        if (y != 9) {
            while (v2 == -1) {
                if (d == 10) {
                    v2 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[d][x].id == mang[m].id) {
                            v2 = m;
                            m = mang.length;
                        }
                    }
                }
                d++;
            }
            for (let a = 1; a <= 9 - y; a++) {
                if (MaTran[y + a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y + a)
                    );
                } else {
                    if (v2 != -2) {
                        if (mang[v2].loai != "Do") {
                            NuocDiHienTai.push(
                                new ViTri(x, y + a)
                            );
                        }
                    }
                    a = 9 - y;
                }
            }
        }

        var q = x + 1;
        if (x != 8) {
            while (v3 == -1) {
                if (q == 9) {
                    v3 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[y][q].id == mang[m].id) {
                            v3 = m;
                            m = mang.length;
                        }
                    }
                }
                q++;
            }
            for (let a = 1; a <= 8 - x; a++) {
                if (MaTran[y][x + a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x + a, y)
                    );
                } else {
                    if (v3 != -2) {
                        if (mang[v3].loai != "Do") {
                            NuocDiHienTai.push(
                                new ViTri(x + a, y)
                            );
                        }
                    }
                    a = 8 - x;
                }
            }
        }

        q = x - 1;
        if (x != 0) {
            while (v4 == -1) {
                if (q == -1) {
                    v4 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[y][q].id == mang[m].id) {
                            v4 = m;
                            m = mang.length;
                        }
                    }
                }
                q--;
            }
            for (let a = 1; a <= x; a++) {
                if (MaTran[y][x - a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x - a, y)
                    );
                } else {
                    if (v4 != -2) {
                        if (mang[v4].loai != "Do") {
                            NuocDiHienTai.push(
                                new ViTri(x - a, y)
                            );
                        }
                    }
                    a = x;
                }
            }
        }

        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "ma_do1" || ten == "ma_do2")) {
        for (let a = 0; a < mang.length; a++) {
            //di len
            if (y > 1) {
                if (MaTran[y - 1][x].id == "") {
                    if (x != 0) {
                        if (MaTran[y - 2][x - 1].id == mang[a].id && mang[a].loai != loai || MaTran[y - 2][x - 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 1, y - 2));
                        }
                    }
                    if (x != 8) {
                        if (MaTran[y - 2][x + 1].id == mang[a].id && mang[a].loai != loai || MaTran[y - 2][x + 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 1, y - 2));
                        }
                    }
                }
            }
            //di xuong
            if (y < 8) {
                if (MaTran[y + 1][x].id == "") {
                    if (x != 0) {
                        if (MaTran[y + 2][x - 1].id == mang[a].id && mang[a].loai != loai || MaTran[y + 2][x - 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 1, y + 2));
                        }
                    }
                    if (x != 8) {
                        if (MaTran[y + 2][x + 1].id == mang[a].id && mang[a].loai != loai || MaTran[y + 2][x + 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 1, y + 2));
                        }
                    }
                }
            }
            //di trai
            if (x > 1) {
                if (MaTran[y][x - 1].id == "") {
                    if (y != 0) {
                        if (MaTran[y - 1][x - 2].id == mang[a].id && mang[a].loai != loai || MaTran[y - 1][x - 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 2, y - 1));
                        }
                    }
                    if (y != 9) {
                        if (MaTran[y + 1][x - 2].id == mang[a].id && mang[a].loai != loai || MaTran[y + 1][x - 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 2, y + 1));
                        }
                    }
                }
            }
            //di phai
            if (x < 8) {
                if (MaTran[y][x + 1].id == "") {
                    if (y != 0) {
                        if (MaTran[y - 1][x + 2].id == mang[a].id && mang[a].loai != loai || MaTran[y - 1][x + 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 2, y - 1));
                        }
                    }
                    if (y != 9) {
                        if (MaTran[y + 1][x + 2].id == mang[a].id && mang[a].loai != loai || MaTran[y + 1][x + 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 2, y + 1));
                        }
                    }
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "phao_do1" || ten == "phao_do2")) {
        var anquan1 = -1, anquan2 = -1, anquan3 = -1, anquan4 = -1;
        z = y - 1;
        if (y != 0) {
            while (z > 0) {
                if (MaTran[z][x].id != "") {
                    z--;
                    while (v1 == -1) {
                        if (z <= -1) {
                            v1 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[z][x].id == mang[n].id) {
                                    v1 = n;
                                    n = mang.length;
                                    anquan1 = z;
                                }
                            }
                            z--;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= y; a++) {
                if (MaTran[y - a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y - a)
                    );
                } else {
                    if (v1 >= 0) {
                        if (mang[v1].loai != loai) {
                            NuocDiHienTai.push(
                                new ViTri(x, anquan1)
                            );
                        }
                    }
                    a = y;
                }
            }
        }
        d = y + 1;
        if (y != 9) {
            while (d < 9) {
                if (MaTran[d][x].id != "") {
                    d++;
                    while (v2 == -1) {
                        if (d >= 10) {
                            v2 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[d][x].id == mang[n].id) {
                                    v2 = n;
                                    n = mang.length;
                                    anquan2 = d;
                                }
                            }
                            d++;
                        }
                    }
                }
                d++;
            }
            for (let a = 1; a <= 9 - y; a++) {
                if (MaTran[y + a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y + a)
                    );
                } else {
                    if (v2 >= 0) {
                        if (mang[v2].loai != loai) {
                            NuocDiHienTai.push(
                                new ViTri(x, anquan2)
                            );
                        }
                    }
                    a = 9 - y;
                }
            }
        }

        q = x + 1;
        if (x != 8) {
            while (q < 7) {
                if (MaTran[y][q].id != "") {
                    q++;
                    while (v3 == -1) {
                        /*alert(q);*/
                        if (q >= 9) {
                            v3 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[y][q].id == mang[n].id) {
                                    v3 = n;
                                    n = mang.length;
                                    anquan3 = q;
                                    /*alert(q +" "+v3);*/
                                }
                            }
                            q++;
                        }
                    }
                }
                q++;
            }
            for (let a = 1; a <= 8 - x; a++) {
                if (MaTran[y][x + a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x + a, y)
                    );
                } else {
                    if (v3 >= 0) {
                        if (mang[v3].loai != loai) {
                            NuocDiHienTai.push(
                                new ViTri(anquan3, y)
                            );
                        }
                    }
                    a = 8 - x;
                }
            }
        }

        z = x - 1;
        if (x != 0) {
            while (z > 0) {
                if (MaTran[y][z].id != "") {
                    z--;
                    while (v4 == -1) {
                        if (z <= -1) {
                            v4 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[y][z].id == mang[n].id) {
                                    v4 = n;
                                    n = mang.length;
                                    anquan4 = z;
                                }
                            }
                            z--;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= x; a++) {
                if (MaTran[y][x - a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x - a, y)
                    );
                } else {
                    if (v4 >= 0) {
                        if (mang[v4].loai != loai) {
                            NuocDiHienTai.push(
                                new ViTri(anquan4, y)
                            );
                        }
                    }
                    a = x;
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "tuong_do")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y][x - 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (x != 8) {
                if (MaTran[y][x + 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x].id == mang[a].id) {
                    v4 = a;
                }
            }
        }

        if (y != 7) {//không nằm tại khung trên cùng
            if (x == 4) {
                if (v1 != -1) {//Phía trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }

                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }

                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
            if (x == 3) {
                if (v1 != -1) {//Phía trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }



                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
            if (x == 5) {
                if (v1 != -1) {//Phía trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }

                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }



                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
        }
        else {//Nằm dòng trên cùng
            if (x == 4) {


                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }

                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
            if (x == 3) {



                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
            if (x == 5) {//Phía phải 


                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }


                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
        }

        //if (y != 7) {
        //    NuocDiHienTai.push(
        //        new ViTri(x, y - 1),
        //    );
        //}
        //if (y <= 9) {
        //    if (x == 5) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 1, y),
        //            new ViTri(x, y + 1),
        //        );
        //    }
        //    else if (x == 3) {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y),
        //            new ViTri(x, y + 1),
        //        );
        //    }
        //    else {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y),
        //            new ViTri(x - 1, y),
        //            new ViTri(x, y + 1),
        //        );
        //    }
        //}
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "si_do1" || ten == "si_do2")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x - 1].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y - 1][x + 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x - 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x + 1].id == mang[a].id) {
                    v4 = a;
                }
            }
        }
        if (y != 7) {//Không nằm tại dòng trên cùng
            if (x == 3) {
                if (v2 != -1) {//Góc phải trên có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y - 1),
                    );
                }
                //if (v4 != -1) {//Góc phải trên có cờ
                //    if (mang[v4].loai != "Do")
                //        NuocDiHienTai.push(
                //            new ViTri(x + 1, y + 1),
                //        );
                //}
                //else {
                //    NuocDiHienTai.push(
                //        new ViTri(x + 1, y + 1),
                //    );
                //}
            }
            if (x == 4) {
                if (v1 != -1) {//Góc phải trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y - 1),
                    );
                }
                if (v2 != -1) {//Góc phải trên có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y - 1),
                    );
                }
                if (v3 != -1) {//Góc phải trên có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y + 1),
                    );
                }
                if (v4 != -1) {//Góc phải trên có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y + 1),
                    );
                }
            }
            if (x == 5) {
                if (v1 != -1) {//Góc phải trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y - 1),
                    );
                }

            }
        }
        else {
            if (x == 3) {
                if (v4 != -1) {//Góc phải trên có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y + 1),
                    );
                }
            }
            if (x == 5) {
                if (v3 != -1) {//Góc phải trên có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y + 1),
                    );
                }

            }
        }

        //if (y == 7) {
        //    if (x == 5) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 1, y + 1),

        //        );
        //    }
        //    if (x == 3) {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y + 1),

        //        );
        //    }
        //}
        //if (y <= 9 && y != 7) {
        //    if (x == 5) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 1, y - 1),

        //        );
        //    }

        //    if (x == 3) {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y - 1),

        //        );
        //    }
        //    else {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y + 1),
        //            new ViTri(x - 1, y - 1),
        //            new ViTri(x - 1, y + 1),
        //            new ViTri(x + 1, y - 1),
        //        );
        //    }
        //}
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "voi_do1" || ten == "voi_do2")) {
        for (let a = 0; a < mang.length; a++) {
            if (x != 0) {
                if (MaTran[y - 2][x - 2].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (y != 0 && x != 8) {
                if (MaTran[y - 2][x + 2].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (y != 9 && x != 0) {
                if (MaTran[y + 2][x - 2].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9 && x != 8) {
                if (MaTran[y + 2][x + 2].id == mang[a].id) {
                    v4 = a;
                }
            }
        }


        if (y != 5) {//Không nằm trên dòng trên cùng            
            if (x == 0) {//Nằm trên cột trái            
                if (v2 != -1) {//Có cờ
                    if (mang[v2].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }

                if (v4 != -1) {//Có cờ
                    if (mang[v4].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
            }
            if (x > 0 && x < 8) {
                if (v1 != -1) {//Có cờ
                    if (mang[v1].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }
                if (v2 != -1) {//Có cờ
                    if (mang[v2].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }
                if (v3 != -1) {//Có cờ
                    if (mang[v3].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }
                if (v4 != -1) {//Có cờ
                    if (mang[v4].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
            }
            if (x == 8) {
                if (v1 != -1) {//Có cờ
                    if (mang[v1].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }

                if (v3 != -1) {//Có cờ
                    if (mang[v3].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }

            }
        }
        else {//Nằm dòng trên cùng
            if (v3 != -1) {//Có cờ
                if (mang[v3].loai != "Do") {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x - 2, y + 2)
                );
            }
            if (v4 != -1) {//Có cờ
                if (mang[v4].loai != "Do") {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 2, y + 2)
                );
            }
        }
        //if (y != 7 && y != 5) {
        //    NuocDiHienTai.push(
        //        new ViTri(x - 2, y - 2),
        //        new ViTri(x + 2, y - 2),
        //    );
        //}
        //if (y == 5) {
        //    NuocDiHienTai.push(
        //        new ViTri(x + 2, y + 2),
        //        new ViTri(x - 2, y + 2),
        //    );
        //}
        //if (y <= 9) {
        //    if (x == 0) {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 2, y - 2),
        //            new ViTri(x + 2, y + 2),
        //        );
        //    }
        //    if (x < 8 && y != 5) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 2, y - 2),
        //            new ViTri(x + 2, y + 2),
        //            new ViTri(x - 2, y + 2),
        //            new ViTri(x + 2, y - 2),

        //        );
        //    }
        //    if (x == 8) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 2, y - 2),
        //            new ViTri(x - 2, y + 2),
        //        );
        //    }

        //}
        return NuocDiHienTai;
    }

    //co den

    if (loai == "Den" && (ten == "tot_den1" || ten == "tot_den2"
        || ten == "tot_den3" || ten == "tot_den4" || ten == "tot_den5")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y][x - 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (x != 8) {
                if (MaTran[y][x + 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x].id == mang[a].id) {
                    v4 = a;
                }
            }
        }
        if (y != 9) {
            if (v4 != -1) {
                if ((mang[v4].loai != "Den")) {
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1)
                    );
                }
            } else {
                NuocDiHienTai.push(
                    new ViTri(x, y + 1)
                );
            }
        }

        if (y >= 5) {
            if (v2 != -1) {
                if ((mang[v2].loai != "Den")) {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y)
                    );
                }
            } else {
                if (x != 0) {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y)
                    );
                }

            }
            if (v3 != -1) {
                if ((mang[v3].loai != "Den")) {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y)
                    );
                }
            } else {
                if (x != 8) {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y)
                    );
                }

            }
        }

        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "tuong")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y][x - 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (x != 8) {
                if (MaTran[y][x + 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x].id == mang[a].id) {
                    v4 = a;
                }
            }
        }

        if (y != 2) {//không nằm tại khung trên cùng
            if (x == 4) {
                if (v4 != -1) {//Phía trên có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }

                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }

                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
            if (x == 3) {
                if (v4 != -1) {//Phía trên có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }



                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
            if (x == 5) {
                if (v4 != -1) {//Phía trên có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }

                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }



                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
        }
        else {//Nằm dòng trên cùng
            if (x == 4) {


                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }

                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
            if (x == 3) {



                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
            if (x == 5) {//Phía phải 


                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }


                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "si_den1" || ten == "si_den2")) {
        v1 = -1, v2 = -1, v3 = -1, v4 = -1;
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x - 1].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (y != 0) {
                if (MaTran[y - 1][x + 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x - 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x + 1].id == mang[a].id) {
                    v4 = a;
                }
            }
        }
        if (y != 2) {//Không nằm tại dòng trên cùng
            if (x == 3) {
                if (v4 != -1) {//Góc phải trên có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y + 1),
                    );
                }

            }
            if (x == 4) {
                if (v1 != -1) {//Góc phải trên có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y - 1),
                    );
                }
                if (v2 != -1) {//Góc phải trên có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y - 1),
                    );
                }
                if (v3 != -1) {//Góc phải trên có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y + 1),
                    );
                }
                if (v4 != -1) {//Góc phải trên có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y + 1),
                    );
                }
            }
            if (x == 5) {
                if (v3 != -1) {//Góc phải trên có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y + 1),
                    );
                }

            }
        }
        else {
            if (x == 3) {
                if (v2 != -1) {//Góc phải trên có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y - 1),
                    );
                }
            }
            if (x == 5) {
                if (v1 != -1) {//Góc phải trên có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y - 1),
                    );
                }

            }
        }

        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "voi_den1" || ten == "voi_den2")) {
        v1 = -1, v2 = -1, v3 = -1, v4 = -1;
        for (let a = 0; a < mang.length; a++) {
            if (y != 0 && x != 0) {
                if (MaTran[y - 2][x - 2].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (y != 0 && x != 8) {
                if (MaTran[y - 2][x + 2].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (y != 9 && x != 0) {
                if (MaTran[y + 2][x - 2].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9 && x != 8) {
                if (MaTran[y + 2][x + 2].id == mang[a].id) {
                    v4 = a;
                }
            }
        }


        if (y != 4) {//Không nằm trên dòng trên cùng            
            if (x == 0) {//Nằm trên cột trái            
                if (v2 != -1) {//Có cờ
                    if (mang[v2].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }

                if (v4 != -1) {//Có cờ
                    if (mang[v4].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
            }
            if (x > 0 && x < 8) {
                if (v3 != -1) {//Có cờ
                    if (mang[v3].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }
                if (v4 != -1) {//Có cờ
                    if (mang[v4].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
                if (v1 != -1) {//Có cờ
                    if (mang[v1].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }
                if (v2 != -1) {//Có cờ
                    if (mang[v2].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }
            }
            if (x == 8) {
                if (v1 != -1) {//Có cờ
                    if (mang[v1].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }

                if (v3 != -1) {//Có cờ
                    if (mang[v3].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }

            }
        }
        else {//Nằm dòng trên cùng
            if (v1 != -1) {//Có cờ
                if (mang[v1].loai != "Den") {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x - 2, y - 2)
                );
            }
            if (v2 != -1) {//Có cờ
                if (mang[v2].loai != "Den") {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 2, y - 2)
                );
            }
        }

        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "ma_den1" || ten == "ma_den2")) {
        for (let a = 0; a < mang.length; a++) {
            //di len
            if (y > 1) {
                if (MaTran[y - 1][x].id == "") {
                    if (x != 0) {
                        if (MaTran[y - 2][x - 1].id == mang[a].id && mang[a].loai != loai || MaTran[y - 2][x - 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 1, y - 2));
                        }
                    }
                    if (x != 8) {
                        if (MaTran[y - 2][x + 1].id == mang[a].id && mang[a].loai != loai || MaTran[y - 2][x + 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 1, y - 2));
                        }
                    }
                }
            }
            //di xuong
            if (y < 8) {
                if (MaTran[y + 1][x].id == "") {
                    if (x != 0) {
                        if (MaTran[y + 2][x - 1].id == mang[a].id && mang[a].loai != loai || MaTran[y + 2][x - 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 1, y + 2));
                        }
                    }
                    if (x != 8) {
                        if (MaTran[y + 2][x + 1].id == mang[a].id && mang[a].loai != loai || MaTran[y + 2][x + 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 1, y + 2));
                        }
                    }
                }
            }
            //di trai
            if (x > 1) {
                if (MaTran[y][x - 1].id == "") {
                    if (y != 0) {
                        if (MaTran[y - 1][x - 2].id == mang[a].id && mang[a].loai != loai || MaTran[y - 1][x - 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 2, y - 1));
                        }
                    }
                    if (y != 9) {
                        if (MaTran[y + 1][x - 2].id == mang[a].id && mang[a].loai != loai || MaTran[y + 1][x - 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 2, y + 1));
                        }
                    }
                }
            }
            //di phai
            if (x < 8) {
                if (MaTran[y][x + 1].id == "") {
                    if (y != 0) {
                        if (MaTran[y - 1][x + 2].id == mang[a].id && mang[a].loai != loai || MaTran[y - 1][x + 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 2, y - 1));
                        }
                    }
                    if (y != 9) {
                        if (MaTran[y + 1][x + 2].id == mang[a].id && mang[a].loai != loai || MaTran[y + 1][x + 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 2, y + 1));
                        }
                    }
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "phao_den1" || ten == "phao_den2")) {
        anquan1 = -1, anquan2 = -1, anquan3 = -1, anquan4 = -1;
        z = y - 1;
        if (y != 0) {
            while (z > 0) {
                if (MaTran[z][x].id != "") {
                    z--;
                    while (v1 == -1) {
                        if (z <= -1) {
                            v1 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[z][x].id == mang[n].id) {
                                    v1 = n;
                                    n = mang.length;
                                    anquan1 = z;
                                }
                            }
                            z--;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= y; a++) {
                if (MaTran[y - a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y - a)
                    );
                } else {
                    if (v1 >= 0) {
                        if (mang[v1].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x, anquan1)
                            );
                        }
                    }
                    a = y;
                }
            }
        }
        d = y + 1;
        if (y != 9) {
            while (d < 9) {
                if (MaTran[d][x].id != "") {
                    d++;
                    while (v2 == -1) {
                        if (d >= 10) {
                            v2 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[d][x].id == mang[n].id) {
                                    v2 = n;
                                    n = mang.length;
                                    anquan2 = d;
                                }
                            }
                            d++;
                        }
                    }
                }
                d++;
            }
            for (let a = 1; a <= 9 - y; a++) {
                if (MaTran[y + a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y + a)
                    );
                } else {
                    if (v2 >= 0) {
                        if (mang[v2].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x, anquan2)
                            );
                        }
                    }
                    a = 9 - y;
                }
            }
        }

        q = x + 1;
        if (x != 8) {
            while (q < 7) {
                if (MaTran[y][q].id != "") {
                    q++;
                    while (v3 == -1) {
                        /*alert(q);*/
                        if (q >= 9) {
                            v3 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[y][q].id == mang[n].id) {
                                    v3 = n;
                                    n = mang.length;
                                    anquan3 = q;
                                    /*alert(q +" "+v3);*/
                                }
                            }
                            q++;
                        }
                    }
                }
                q++;
            }
            for (let a = 1; a <= 8 - x; a++) {
                if (MaTran[y][x + a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x + a, y)
                    );
                } else {
                    if (v3 >= 0) {
                        if (mang[v3].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(anquan3, y)
                            );
                        }
                    }
                    a = 8 - x;
                }
            }
        }

        z = x - 1;
        if (x != 0) {
            while (z > 0) {
                if (MaTran[y][z].id != "") {
                    z--;
                    while (v4 == -1) {
                        if (z <= -1) {
                            v4 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[y][z].id == mang[n].id) {
                                    v4 = n;
                                    n = mang.length;
                                    anquan4 = z;
                                }
                            }
                            z--;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= x; a++) {
                if (MaTran[y][x - a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x - a, y)
                    );
                } else {
                    if (v4 >= 0) {
                        if (mang[v4].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(anquan4, y)
                            );
                        }
                    }
                    a = x;
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "xe_den1" || ten == "xe_den2")) {
        //đi lên
        z = y - 1;
        if (y != 0) {
            while (v1 == -1) {
                if (z == -1) {
                    v1 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[z][x].id == mang[m].id) {
                            v1 = m;
                            m = mang.length;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= y; a++) {
                if (MaTran[y - a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y - a)
                    );
                } else {
                    if (v1 != -2) {
                        if (mang[v1].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x, y - a)
                            );
                        }
                    }

                    a = y;
                }
            }
        }
        //đi xuống
        d = y + 1;
        if (y != 9) {
            while (v2 == -1) {
                if (d == 10) {
                    v2 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[d][x].id == mang[m].id) {
                            v2 = m;
                            m = mang.length;
                        }
                    }
                }
                d++;
            }
            for (let a = 1; a <= 9 - y; a++) {
                if (MaTran[y + a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y + a)
                    );
                } else {
                    if (v2 != -2) {
                        if (mang[v2].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x, y + a)
                            );
                        }
                    }
                    a = 9 - y;
                }
            }
        }
        //đi phải
        q = x + 1;
        if (x != 8) {
            while (v3 == -1) {
                if (q == 9) {
                    v3 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[y][q].id == mang[m].id) {
                            v3 = m;
                            m = mang.length;
                        }
                    }
                }
                q++;
            }
            for (let a = 1; a <= 8 - x; a++) {
                if (MaTran[y][x + a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x + a, y)
                    );
                } else {
                    if (v3 != -2) {
                        if (mang[v3].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x + a, y)
                            );
                        }
                    }
                    a = 8 - x;
                }
            }
        }
        //đi trái
        q = x - 1;
        if (x != 0) {
            while (v4 == -1) {
                if (q == -1) {
                    v4 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[y][q].id == mang[m].id) {
                            v4 = m;
                            m = mang.length;
                        }
                    }
                }
                q--;
            }
            for (let a = 1; a <= x; a++) {
                if (MaTran[y][x - a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x - a, y)
                    );
                } else {
                    if (v4 != -2) {
                        if (mang[v4].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x - a, y)
                            );
                        }
                    }
                    a = x;
                }
            }
        }
        return NuocDiHienTai;
    }
}

export default TinhNuocDi;