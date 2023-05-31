var button = document.querySelector("button");
button.onclick = function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var telephone = document.getElementById("telephone").value;
  var add = document.getElementById("add").value;
  var elms = document.getElementsByClassName("form-control");

  let phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  var listSpan = document.getElementsByTagName("small");
  for (let index = 0; index < listSpan.length; index++) {
    const element = listSpan[index];
    element.innerText = "";
  }
  let countError = 0;
  if (!username) {
    countError++;
    document.getElementById("username-err").innerText =
      "Vui lòng nhập tên học viên";
  }
  if (!telephone) {
    countError++;
    document.getElementById("telephone-err").innerText = "Vui lòng nhập sđt";
  } else if (!phoneRegex.test(telephone)) {
    countError++;
    document.getElementById("telephone-err").innerText =
      "sđt không đúng định dạng";
  }
  if (!add) {
    countError++;
    document.getElementById("add-err").innerText = "Vui lòng nhập địa chỉ";
  }
  if (countError > 0) {
    return;
  }
  for (let index = 1; index < elms.length; index++) {
    const element = elms[index];
    console.log(element.id + ": " + element.value);
  }
  //1. tổng hợp dữ liệu trên form dạng object
  //2.gọi api với method post để gửi json đi
  //3. thông báo thành công hoặc thất bại
  let url = "https://646b70e67d3c1cae4ce3cd73.mockapi.io/api/DSHV";
  function postStudent() {
    let promise = fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: username,
        phone: telephone,
        address: add,
      }),
    });

    promise
      .then(function (response) {
        if(response.status === 201){
        document.getElementById("form-err").innerText =
          "Thêm học viên thành công!";
          document.getElementById('form-err').classList.add('text-success');
          resetForm();
        } else {
          document.getElementById("form-err").innerText =
            "Thêm học viên thất bại!";
          document.getElementById("form-err").classList.add("text-danger");
        }
 
        return response.json();
      })
      .catch((error) => console.error("Error:", error));
  }
  postStudent();
  function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("add").value = "";
  }
};
