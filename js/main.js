/*var numberObj = new Number(3);
var number = "abc.4";
let number2 = 1.5;
const NUMBER_CONST = 1;
let tong;
if (!isNaN(number)) {
  tong = Number(number) + number2;
}
let convert1 = number2 + "";
let convert2 = number2.toString();
let convert3 = number2.toFixed(1);
let convert4 = 1.2 - 0.5;
console.log(convert4);
if (convert4.toFixed(1) === '0.7') {
  console.log("OK");
}
let maxFloat = 1.12345678901234561111;
console.log(maxFloat);

//C toán tử
// 1.Toán tử so sánh (Comparition)<> == ===
let n1 = '4';
let n2 = 4;
let kq = n1 == n2;
console.log('kq1:' +kq);

let kq2 = n1 === n2;
console.log('kq2:' + kq2)
console.log(typeof n1);
console.log(typeof n2);
// 2.Toán tử gán (Assignment)
// 3.Toán tử số học (Arithmetic)+-*/
// 4. Toán tử logic (logical)|| &&

// BOOLEAN

/*var b = new Boolean(true);
var b2 = true;
var b3 = false;
const BOOLEAN_CONST = true
//&&
let boolean1 = 3 < 4 && 'A' && false && 'C';

let boolean2 = null || -5 || NaN || 'C'
console.log(boolean2);
console.log(typeof boolean2);

//interval
let count = 10
let intervalId = setInterval(() => {
  if(count===0){
    clearInterval(intervalId);
  }
  console.log("intreval...."+ count);
  count--;
},1000);

// Array

var arr = [1, 'a', 2, 'b', 3, 'c'];
console.log(arr.length);
console.log(Array.isArray(arr));
let toStr = arr.toString();
console.log(toStr);
let joinedStr = arr.join('+');
console.log(joinedStr);
let splArr = joinedStr.split('+2+b');
console.log(splArr);
arr[10]=4;
arr[11]='d';
console.log(arr);
console.log(arr[6]);
console.log(arr.length);

let poped = arr.pop();

console.log(arr);
console.log(poped);

let arr2 = [10,11,12];
let concated = arr.concat(arr2).concat;
let result = arr.slice(-1);
console.log(result);

// Function
var fn = function name(){}
// declaration functiom
function declaration(number){
  console.log('declaration function');
  console.log('gia tri cua number');
}
// exprestion function
var exprestion = function(number){
  console.log('exprestion function');

}*/
// callback
/*function tinhTong(a, b, tinhToan) {
  let giaTriTinhDuoc = tinh(a, b);
  console.log(giaTriTinhDuoc);
}
function tinh(a, b) {
  let tong = a + b;
  return tong;
}
tinhTong(2, 4, tinh);
let intervalId = function () {
  if (count === 0) {
    clearInterval(intervalId);
  }
  console.log;
};*/
/*console.log('Hello World!');

// A. Kiểu dữ liệu, biến số, hằng số
var random;
// Primitive data: kiểu nguyên thủy
// khi khởi tạo tạo giá trị sẽ được lưu vào vùng nhớ và không thể sửa giá trị trị tại vùng nhớ
// 1.Number
var number = 2;
var number2 = 2.5;

// 2.String
// Độ dài tối đa của chuỗi là 8
// Sử dụng escaped để trích dẫn "Đây là 1 Trích dẫn"
var str = "c";
var str2 = "đây \\ là \"một chuỗi\" 2";
var str3 = 'Giá trị của number ${number2} là: ' + number + ".... ";

var max80 = 'Contrary to popular \'belief\', Lorem Ipsum is not simply random text.'
+' It has roots in a piece of classical Latin literature from 45 BC,'
+' making it over "2000 years old". Richard McClintock';
var str4 = `Giá trị của number là: ${number2}....`; // Template string
var s = 'abc8def';

// Một số thao tác cơ bản với chuỗi
// kiểm tra dộ dài chuỗi (length)
console.log(s.length);
// chuyển thành chữ hoa, chữ thường
console.log(s.toUpperCase());
console.log(s.toLocaleLowerCase());
// cắt chuỗi
var cut = s.split('8');
console.log(cut);
// nỗi chuỗi
console.log(cut.join(''));
// tìm kiếm chỉ số của ký tự trong chuỗi
console.log(s.indexOf('d'));
// tìm chuỗi theo chỉ số
console.log(s.charAt('a'));
// loại bỏ khoảng trắng ở 2 đầu
console.log(s.trim());
// replare
console.log(s.replace('def','xyz'));

// 3.Boolean (true | false)
var t = true;
var f = false;

// 4.Null: không có gì
var n = null;

// 5.Undefined: chưa dc khởi tạo, không tồn tại
var u;

// 6.Symbol: unique = là duy nhất
var s1 = Symbol(1);
var s2 = Symbol(2);


// Complex Data: Dữ dữ liệu phức tạp
// khi khởi tạo tạo giá trị sẽ được lưu vào vùng nhớ và có thể gọi và thay đổi giá trị
// heap space

// 7.Object có thể hiểu object tương tự struct trong C
// obj: tên biến
// a,b,c,d: key,properties: thuộc tính
// 1,2,3,4: value: giá trị (có thể là số, chuỗi, object,..)
// dấu , để ngăn cách giữa giữa cắc cặp key: value
var obj = {
    key: 'value',
    a: 1,
    b: "gia tri",
    obj2: {
        c: 3,
        d: 4
    }
};

// 8.Array: mảng
var arr = [1, 'chuoi', true, [], {}];

// 9.Function
var fn  = function name(params) {
   
}

// typeof kiểm tra kiểu dữ liệu
// diểu dữ liệu của null = object
// diểu dữ liệu của array = object
console.log(typeof random);

// biến số, hằng số
// hằng số
const HANG_SO = 'đây là hằng số';
// biến số
var variable1 = 'variable1';
let variable2 = 'variable2';
// khác nhau giữa let & var
// khác 1: scope: phạm vi của biến

// var hi = 'Say Hi';
var time = 4;
if(time > 3){
    var hi = 'Say Hello';
    let hi2 = 'Say Hello 2';
    // ...
}
// console.log(hi);
// console.log(hi2);

// khác nhau 2: hoisting - sử dụng trước và khai báo sau
console.log(h1);
// console.log(h2);

var h1 = 'h1';
// let h2 = 'h2';

// code
console.log(a);
var a;
a = 1;
// biên dịch
var a;
console.log(a);
a = 1;

// B.Một số hàm build-in trong js
// console
console.log('log');
console.error('err');
console.warn('warning');
console.table([1,2])
// alert
// alert('alert');
// console.log('log after alert');
// prompt
// var inp = prompt('Nhập vào tên của bạn');
// console.log('gia tri nguoi dung nhap vao: ', inp);
// confirm
// var ok = confirm('Bạn có muốn thục hiện thao tác này không?');
// console.log(ok);
// setTimeout: thực hiện tác vụ sau 1 khoảng thời gian
// console.clear();
// var timeout = setTimeout(function() {
//     console.log('runed');
// }, 2000); // milisecond | ms ~ 1s = 1000ms
// clearTimeout(timeout);

// // setInterval: thực hiện lặp đi lặp lại một tác vụ sau 1 khoảng thời gian
// var interval = setInterval(function() {
//     console.log('runing...');
// }, 2000); // milisecond | ms ~ 1s = 1000ms
// setTimeout(function() {
//     clearInterval(interval);
// }, 10000); // milisecond | ms ~ 1s = 1000ms
// // nanosecond 1ms = 1000000ns



// C.Toán tử
// số học - Arithmetic (+ - * / % ** ++ --)
console.log(3**2);// lũy thừa
// Gán - Assignment (=, +=, -= ,..)

// So sánh - Comparision (> >= < <= == === != !==)
var a = 2;
var b = '2';
console.log(a == b); // chỉ so sánh giá trị
console.log(a === b); // so sánh giá trị và kiểu dữ liệu

// Logic - Logical (&& || !)
// console.clear();
// && sẽ trả về giá trị vế bên phải nếu bên trái đều là true
// nếu gặp giá trị tương ứng với false đầu tiên ở đâu thì sẽ trả về giá trị đó
// các giá trị tương ứng với false
// null, undefined, 0, '', false, NaN
// NaN: là một số không hợp lệ (Not a Number)

var c = '1c';
var d = Number(c)
// console.log(d);
// console.log(typeof d); // d = NaN

var and = 4<5 && d && undefined && 'C';
// console.log(and);

// ||: trả về true hoặc false hoặc trả về
//  giá trị tương ứng với true đầu tiên
var or  =  4>5 || null || true || 'b' || d;
// console.log(or);

 !: not
// console.log(!1);*/
// Đối tượng ảguments

function printLog() {
  function doneNotif() {
    console.log("done");
  }
  var log = "";
  console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    console.log("i: ", i);
    if (i >= 4) {
      return;
    }
    log += arguments[i] + "";
  }
  console.log(log.trim());
  doneNotif();
}
var resultprint = printLog(1, 2, 3, 4, 5, 6);
console.log(resultprint);
console.log(1, 2, 3, 4, 5, 6);
// ọbject(struct)
var obj = {
  width: "100",
  age: 1,
  obj2: {
    key2: "value2",
    obj3: {
      key3: "value3",
    },
  },
  "full-name1": "Nguyen Van A",
  "full-name2": "Nguyen Van B",
};
console.log(obj["full-name1"], obj["full-name2"]);
console.log(obj);
//lấy key lớp ngoài
let keyArr = Object.keys(obj);
console.log(keyArr);
// xóa theo key
delete obj["full-name1"];
console.log(obj);
obj["full-name1"];

//some
console.clear();
let someArr = [1,3,5,7];
let resultSomeArr= someArr.some(function(a,b,c){
  console.log(a);//giá trị
  console.log(b);// chỉ số
  console.log(c);//gti mảng ban đầu
  console.log('======');
  if(a <0){
    return true;
  }
  return false ;
});
console.log('resultSomeArr',resultSomeArr);
// every
let resultEvery = someArr.every(function(a,b,c){
  if(a <= 7 ){
  return true;
}
return false;
});
console.log('resultEvery',resultEvery);
// find
let resultFind = someArr.find(function(a,b,c){
  if(a <= 7 ){
  return true;
}
return false;
});
console.log('resultFind',resultFind);
// includes
console.log(someArr.includes(1,2));
console.log('day la string'.includes);
//math
console.log(Math.PI);
console.log(Math.round(1.5));// trên 1.5 làm tròn lên & ngược lại
console.log(Math.floor(1.9));// làm tròn xuống
console.log(Math.ceil(1.1));//làm tròn lên
console.log(Math.abs(-1));// trị tuyệt đối
console.log(Math.min(6,8,3,4)); // chỉ thao tác với số
console.log(Math.max(2,5,1,9));
console.log(Math.random());// giá trị trr ra bất kỳ giữa 0 & 1

// Đệ quy
function dequy(inpNum){
  if (inpNum <=0){
    return;
  }
  dequy(--inpNum);
  console.log('inpNum',inpNum);
}
dequy(10)// bắt buộc có điểm dừng

// Regex: Regular Expression
// Regex là các mẫu thay vì các chuỗi cụ thể đc sử dụng
var strRe = 'day la string';

