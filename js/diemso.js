var button1 = document.getElementById("btn1");
button1.onclick = function (event) {
  event.preventDefault();
  var search = document.querySelector("input[type=text]").value;
  var elms = document.getElementsByClassName("form-control");
  var listSpan = document.getElementsByTagName("small");
  for (let index = 0; index < listSpan.length; index++) {
    const element = listSpan[index];
    element.innerText = "";
  }
  if (!search) {
    document.getElementById("search-err").innerText =
      "Vui lòng nhập tên học viên";
  }
  for (let index = 1; index < elms.length; index++) {
    const element = elms[index];
    console.log(element.id + ": " + element.value);
  }
};
var button2 = document.getElementById("btn2");
button2.onclick = function (event) {
  event.preventDefault();
  var toan = document.getElementById("toan").value;
  var van = document.getElementById("van").value;
  var anh = document.getElementById("anh").value;
  var elm = document.getElementsByClassName("form-control");

  var listSpan = document.getElementsByTagName("small");
  for (let index = 0; index < listSpan.length; index++) {
    const element = listSpan[index];
    element.innerText = "";
  }
  let countError = 0;

  if (toan < 0 || toan > 10) {
    countError++;
    document.getElementById("toan-err").innerText =
      "Vui lòng nhập lại điểm toán";
  }
  if (van < 0 || van > 10) {
    countError++;
    document.getElementById("van-err").innerText = "Vui lòng nhập lại điểm văn";
  }
  if (anh < 0 || anh > 10) {
    countError++;
    document.getElementById("anh-err").innerText = "Vui lòng nhập lại điểm anh";
  }
  if (countError > 0) {
    return;
  }
  for (let index = 1; index < elm.length; index++) {
    const element = elm[index];
    console.log(element.id + ": " + element.value);
  }
};
