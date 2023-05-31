var button = document.querySelector("button");
button.onclick = function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password1 = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById('phone').value;
  var gender = document.getElementById('gender').value;
  var lever = document.getElementById('lever').value;
  var elms = document.getElementsByClassName("from-control");

  let phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  var listSpan = document.getElementsByTagName("small");
  for (let index = 0; index < listSpan.length; index++) {
    const element = listSpan[index];
    element.innerText = "";
  }
  let countError = 0;
  if (!username) {
    countError++;
    document.getElementById("username-err").innerText ="Vui lòng nhập tên đăng nhập";
  }
  for (let index = 1; index < elms.length; index++) {
    const element = elms[index];
    console.log(element.id + ": " + element.value);
  }
};
