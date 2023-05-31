//restful api
//API (application programming Interface )
//API trung gian cho phép 2 ứng dụng có thể giao tiếp với nhau
//cách thức làm việc của API:
//- FE gửi yêu cầu
//- BE nhận yêu cầu
//- BE lấy dl của DB và sử lý
//- BE phản hồi lại yêu cầu (response)

//Restful api là tiêu chuẩn trong việc thiết kế API cho ứng dụng web
//API được xây dựng trên 2 thành phần chính

//1. Request(yêu cầu)
// - URL: là địa chỉ duy nhất cho 1 request, thường là dẫn tới 1 hàm sử lý logic (địa chỉ nhận)
// - Method: https://viblo.asia/p/cung-tim-hieu-ve-http-request-methods-djeZ1xBoKWz
// + GET : lấy dl
// + POST : tạo mới
// + PUT : Sửa
// + DELETE : Xóa

// + OPTIONS
// + HEAD
// + TRACE
// + CONNECT
// + PATH

// - HEADER
// là nơi chưa các thông tin cần thiết của 1  request nhưng người dùng k biết về sự tồn tại của nó. Ví dụ (cookie, authorization, referer, Xsrf-token...)

// - BODY: là nơi chứa thông tin mà Client sẽ gửi

//2. Response (phản hồi)
// - STATUS CODE (mã phản hồi từ BE)
// + 1xx: Information (thông tin)
// + 2xx: Success (thành công)
// + 3xx: Redirect (Chuyển hướng)
// + 4xx: Client error (lỗi Client)
// + 5xx: Server error (Lỗi Server)

// - HEADER: là nơi chưa các thông tin cần thiết của 1  request nhưng người dùng k biết về sự tồn tại của nó. Ví dụ (cookie, authorization, referer, Xsrf-token...)

// - BODY: là nơi chứa thông tin mà BE phản hồi

let url = "https://646b70e67d3c1cae4ce3cd73.mockapi.io/api/DSHV";

function getStudent() {
  let cookie = document.cookie;
if(!cookie){
  let promise = fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  promise
    .then(async function (SuccessResp) {
      console.log("SuccessResp:", SuccessResp);
      let listStd = await SuccessResp.json();
      document.cookie = `students = ${JSON.stringify(listStd)} `;
      console.log("SuccessResp.body:", listStd);
      showStudent(listStd);
      return SuccessResp;
    })
    .catch(function (ErrorResp) {
      console.log("ErrorResp:", ErrorResp);
    });
} else {
let cookieStudent = cookie.split('=')[1];
let listStd = JSON.parse(cookieStudent);
showStudent(listStd);
}
}
getStudent();

function showStudent(arr) {
  let tbody = "";
  for (let i = 0; i < arr.length; i++) {
    const list = arr[i];
    tbody += `
         <tr>
         <td>${list.name}</td>
         <td>${list.phone}</td>
         <td>${list.address}</td>
         </tr>
         `;
  }
  var tb = document.getElementById("tb1");
  tb.innerHTML = tbody;
}
