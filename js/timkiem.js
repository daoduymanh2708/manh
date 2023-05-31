var button = document.querySelector("button");
button.onclick = function (event) {
  event.preventDefault();
  var search = document.querySelector("input[type=text]").value;
  var elms = document.getElementsByClassName("form-control");
  var listSpan = document.getElementsByTagName("small");
  for (let index = 0; index < listSpan.length; index++) {
    const element = listSpan[index];
    element.innerText = "";
  }
  for (let index = 1; index < elms.length; index++) {
    const element = elms[index];
    console.log(element.id + ": " + element.value);
  }
  let url = "https://646b70e67d3c1cae4ce3cd73.mockapi.io/api/DSHV";
  function getStudent() {
    let promise = fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json " },
    });
    promise
      .then(async function (SuccessResp) {
        console.log("SuccessResp:", SuccessResp);
        let listStd = await SuccessResp.json();
        console.log("SuccessResp.body:", listStd);
        Timkiem(listStd);
        return SuccessResp;
      })
      .catch(function (ErrorResp) {
        console.log("ErrorResp:", ErrorResp);
      });
  }
  getStudent();
  function Timkiem(arr) {
    let kq = "";
    let TimThay = false;
    for (let i = 0; i < arr.length; i++) {
      let hv = arr[i];
      if (!search) {
        document.getElementById("search-err").innerText =
          "Vui lòng nhập tên học viên";
      } else if (hv.name.includes(search.trim())) {
        kq += `
                     <tr>
                     <td>${hv.name}</td>
                     <td>${hv.phone}</td>
                     <td>${hv.address}</td>
                     </tr>
                     `;

        document.getElementById("search-err").innerText = "Tìm thấy học viên!";
        document.getElementById("search-err").classList.add("text-success");
        TimThay = true;
        break;
      }
    }
    if (!TimThay) {
      document.getElementById("search-err").innerText =
        "Không tìm thấy học viên";
      document.getElementById("search-err").classList.add("text-danger");
    }
    var Timthay = document.getElementById("tbody");
    Timthay.innerHTML = kq;
  }
};
