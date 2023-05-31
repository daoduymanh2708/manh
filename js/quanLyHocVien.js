// Hiện menu
// 1. Danh Sách học viện
// 2. Tìm kiếm học viên
// 3. Thêm học viên
// 4. Sửa thông tin học viên
// 5. Xóa học viên
// 6. Nhập điểm số
// 7. Xem điểm TB
// 8. Thống kê
// 9. Top 2
// 10. Dừng chương trình

var DSHV = [
  {
    ten: "mạnh",
    tuoi: 22,
    diachi: "HN",
    Diemso: {
      toan: 9,
      van: 9,
      anh: 9,
      TB: 9,
    },
  },
  {
    ten: "mẽ",
    tuoi: 20,
    diachi: "MĐ",
    Diemso: {
      toan: 8,
      van: 8,
      anh: 8,
      TB: 8,
    },
  },
];
function HV(ten, tuoi, diachi) {
  this.ten = ten;
  this.tuoi = tuoi;
  this.diachi = diachi;
}

let menu = ` === Quản Lý Học Viên 1.0 === \n
1.Danh sách học viên\n
2.Tìm kiếm học viên\n
3.Thêm học viên\n
4.Sửa thông tin học viên\n
5.Xóa học viên\n
6.Nhập điểm số\n
7.Xem điểm TB\n
8.Thống kê\n
9.Top 2\n
10.Dừng chương trình\n
Vui lòng chọn chức năng:`;
let input;

function DanhSHV() {
  let dshv = "";
  for (var index = 0; index < DSHV.length; index++) {
    dshv += `Tên: ${DSHV[index].ten}\n
                 Tuổi: ${DSHV[index].tuoi}\n
                 Địa chỉ: ${DSHV[index].diachi}\n            
                  \n====\n`;
  }
  alert(dshv);
}

function Timkiem() {
  let kq = "";
  let ten = prompt("nhập tên học viên");
  for (let index = 0; index < DSHV.length; index++) {
    let hv = DSHV[index];
    if (hv.ten === ten) {
      kq += `Tim thấy học viên: \n
                 Tên: ${hv.ten}\n
                 Tuổi: ${hv.tuoi}\n
                 Địa chỉ: ${hv.diachi}`;
      alert(kq);
    } else {
      alert("không tìm thấy học viên");
    }
  }
}
//   let hocvienTimthay = DSHV.find(function (value, index, raw) {
//     if (value.ten === tenTK) {
//       return true;
//     }
//   });
//   return hocvienTimthay;
// }
//   kq += `Tim thay hoc vien: \n
//                                 Tên: ${hvTimThay.ten}\n
//                                 Tuổi: ${hvTimThay.tuoi}\n
//                                 Địa chỉ: ${hvTimThay.diachi}\n
//                                 `;
//   alert(kq);

function Sua() {
  let ten = prompt("nhap ten hoc vien:");
  let hvCanSua = DSHV.map(function (value) {
    if (value.ten === ten) {
      value.tuoi = prompt("nhap tuoi hoc vien:");
      value.diachi = prompt("nhap dia chi hoc vien");
    }
    return value;
  });
  DSHV = hvCanSua;
}
function Xoa() {
  let ten = prompt("nhap ten hoc vien:");
  let hvConlai = DSHV.filter(function (value, index, raw) {
    if (value.ten !== ten) {
      return true;
    }
    return false;
  });
  DSHV = hvConlai;
}
function Them() {
  let ten = prompt("nhap ten hoc vien:");
  let tuoi = prompt("nhap tuoi hoc vien:");
  let diachi = prompt("nhap dia chi hoc vien:");
  let hv = new HV(ten, tuoi, diachi);
  DSHV.push(hv);
  console.log(DSHV);
}
function nhapdiemso() {
  let ten = prompt("nhap ten hoc vien");
  let HVcanND = DSHV.find(function (hv) {
    return hv.ten === ten;
  });
  if (HVcanND) {
    let toan = prompt("nhap diem toan:");
    let van = prompt("nhap diem van:");
    let anh = prompt("nhap diem anh:");
    let TB = (toan + van + anh) / 3;
    let DS = {
      toan: toan,
      van: van,
      anh: anh,
      TB: TB,
    };
    HVcanND.Diemso = DS;
    alert("nhap diem so hoc vien" + HVcanND.ten + "thanh cong");
  } else {
    alert("không tìm thấy học viên");
  }
  console.log(DSHV);
}
function xemdiemTB() {
  let kq = "";
  let ten = prompt("nhap ten hoc vien");
  if (ten) {
    let hvcanXemdiem = DSHV.find(function (hv) {
      return hv.ten === ten;
    });
    if (hvcanXemdiem) {
      kq += `Điểm TB của học viên là:\n
              Tên: ${DSHV.ten}\n
              Điểm trung bình: ${DSHV.TB}\n
              ======`;
      alert(kq);
    } else {
      alert("không tìm thấy học viên");
    }
  }
}
function Thongke() {
  let max5 = `Danh sách học viên có điểm TB >= 5:\n`;
  let min5 = `Danh sách học viên có điểm TB <= 5:\n`;
  for (let index = 0; index < DSHV.length; index++) {
    if (DSHV[index].Diemso.TB >= 5) {
      max5 += `Hoc vien ${index + 1}: ${DSHV[index].ten} - Diem TB: ${
        DSHV[index].Diemso.TB
      }\n`;
    } else {
      min5 += `Hoc vien ${index + 1}: ${DSHV[index].ten} - Diem TB: ${
        DSHV[index].Diemso.TB
      }\n`;
    }
  }
  alert("max5 + min5");
}
function Top2() {
  DSHV.sort(function (a, b) {
    if (a.Diemso.TB > b.Diemso.TB) {
      return -1;
    } else if (a.Diemso.TB < b.Diemso.TB) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(DSHV);
  let top2 = `2 học viên có điểm tb cao nhất là:\n`;
  for (let index = 0; index < 2; index++) {
    top2 += `Học viên ${[index + 1]}: ${DSHV[i].ten} - Điểm TB: ${
      DSHV[i].Diemso.TB
    }\n`;
  }
  alert(top2);
}
do {
  do {
    input = prompt(menu);
    console.log("input: ", input);
    var hopLe;
    //cách 1: ep ve kieu so
    let inputNumber = Number(input);
    if (inputNumber <= 10 && inputNumber >= 1) {
      hopLe = true;
    } else {
      hopLe = false;
    }
    //cách 2 : sử dụng mảng
    // if (
    //   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(input.trim())
    // ) {
    //   hopLe = true;
    // } else {
    //   hopLe = false;
    // }
    console.log("hopLe: ", hopLe);
    // ko hợp lệ cho nhập lại
  } while (!hopLe);
  // b4 khi người dùng bấm chọn 3
  // thì hiện các ô nhập để người dùng nhập vào( tên tuổi địa chỉ)
  // khởi tạo đới tượng hocvien sử dụng object contructor
  // push đối tượng vừa khởi tạo vào mảng lưu trữ
  if (hopLe) {
    switch (input) {
      //Thêm hv
      case "3":
        Them();
        break;
      //hiển thị dshv
      case "1":
        DanhSHV();
        break;
      //Tìm kiếm hv
      case "2":
        Timkiem();
        break;
      //Xóa hv
      case "5":
        Xoa();
        break;
      //sửa hv
      case "4":
        Sua();
        break;
      //nhập điểm số
      case "6":
        nhapdiemso();
        break;
      //xem điểm TB
      case "7":
        xemdiemTB();
        break;
      //Thống kê
      case "8":
        Thongke();
        break;
      //Top2
      case "9":
        Top2();
        break;
      case "10":
        alert("kết thúc chương trình");
        break;
      default:
        alert("vui lòng chọn chương trình hợp lệ");
        break;
    }
  }
} while (input != "10");
