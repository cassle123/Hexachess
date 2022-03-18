import test from '@/Test/test.js'

const mang = test;

class DiemTrenBanCo {
    constructor(id, left, top) {
        this.id = id;
        this.left = left;
        this.top = top;
    }
}

//Tao ma tran chua ban co
const MaTran = new Array();
MaTran[0] = new Array(new DiemTrenBanCo("", 0, 0), new DiemTrenBanCo("", 58, 0), new DiemTrenBanCo("", 114, 0), new DiemTrenBanCo("", 172, 0), new DiemTrenBanCo("", 229, 0), new DiemTrenBanCo("", 286, 0), new DiemTrenBanCo("", 342, 0), new DiemTrenBanCo("", 400, 0), new DiemTrenBanCo("", 458, 0));
MaTran[1] = new Array(new DiemTrenBanCo("", 0, 60), new DiemTrenBanCo("", 58, 60), new DiemTrenBanCo("", 114, 60), new DiemTrenBanCo("", 172, 60), new DiemTrenBanCo("", 229, 60), new DiemTrenBanCo("", 286, 60), new DiemTrenBanCo("", 342, 60), new DiemTrenBanCo("", 400, 60), new DiemTrenBanCo("", 458, 60));
MaTran[2] = new Array(new DiemTrenBanCo("", 0, 117), new DiemTrenBanCo("", 58, 117), new DiemTrenBanCo("", 114, 117), new DiemTrenBanCo("", 172, 117), new DiemTrenBanCo("", 229, 117), new DiemTrenBanCo("", 286, 117), new DiemTrenBanCo("", 342, 117), new DiemTrenBanCo("", 400, 117), new DiemTrenBanCo("", 458, 117));
MaTran[3] = new Array(new DiemTrenBanCo("", 0, 173), new DiemTrenBanCo("", 58, 173), new DiemTrenBanCo("", 114, 173), new DiemTrenBanCo("", 172, 173), new DiemTrenBanCo("", 229, 173), new DiemTrenBanCo("", 286, 173), new DiemTrenBanCo("", 342, 173), new DiemTrenBanCo("", 400, 173), new DiemTrenBanCo("", 458, 173));
MaTran[4] = new Array(new DiemTrenBanCo("", 0, 230), new DiemTrenBanCo("", 58, 230), new DiemTrenBanCo("", 114, 230), new DiemTrenBanCo("", 172, 230), new DiemTrenBanCo("", 229, 230), new DiemTrenBanCo("", 286, 230), new DiemTrenBanCo("", 342, 230), new DiemTrenBanCo("", 400, 230), new DiemTrenBanCo("", 458, 230));
MaTran[5] = new Array(new DiemTrenBanCo("", 0, 288), new DiemTrenBanCo("", 58, 288), new DiemTrenBanCo("", 114, 288), new DiemTrenBanCo("", 172, 288), new DiemTrenBanCo("", 229, 288), new DiemTrenBanCo("", 286, 288), new DiemTrenBanCo("", 342, 288), new DiemTrenBanCo("", 400, 288), new DiemTrenBanCo("", 458, 288));
MaTran[6] = new Array(new DiemTrenBanCo("", 0, 344), new DiemTrenBanCo("", 58, 344), new DiemTrenBanCo("", 114, 344), new DiemTrenBanCo("", 172, 344), new DiemTrenBanCo("", 229, 344), new DiemTrenBanCo("", 286, 344), new DiemTrenBanCo("", 342, 344), new DiemTrenBanCo("", 400, 344), new DiemTrenBanCo("", 458, 344));
MaTran[7] = new Array(new DiemTrenBanCo("", 0, 403), new DiemTrenBanCo("", 58, 403), new DiemTrenBanCo("", 114, 403), new DiemTrenBanCo("", 172, 403), new DiemTrenBanCo("", 229, 403), new DiemTrenBanCo("", 286, 403), new DiemTrenBanCo("", 342, 403), new DiemTrenBanCo("", 400, 403), new DiemTrenBanCo("", 458, 403));
MaTran[8] = new Array(new DiemTrenBanCo("", 0, 460), new DiemTrenBanCo("", 58, 460), new DiemTrenBanCo("", 114, 460), new DiemTrenBanCo("", 172, 460), new DiemTrenBanCo("", 229, 460), new DiemTrenBanCo("", 286, 460), new DiemTrenBanCo("", 342, 460), new DiemTrenBanCo("", 400, 460), new DiemTrenBanCo("", 458, 460));
MaTran[9] = new Array(new DiemTrenBanCo("", 0, 517), new DiemTrenBanCo("", 58, 517), new DiemTrenBanCo("", 114, 517), new DiemTrenBanCo("", 172, 517), new DiemTrenBanCo("", 229, 517), new DiemTrenBanCo("", 286, 517), new DiemTrenBanCo("", 342, 517), new DiemTrenBanCo("", 400, 517), new DiemTrenBanCo("", 458, 517));

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
            for (let t = 0; t < 32; t++) {
                var p = mang[t].vitri;
                if (MaTran[i][j].top == p.top && MaTran[i][j].left == p.left)
                    MaTran[i][j].id = mang[t].id;
            }
        }
    }

export default MaTran;
    
