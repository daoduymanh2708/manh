// sync(synchronize) xử lý đồng bộ
// acsync(acsynchronize) xử lý bất đồng bộ
// acsync setTimeout, setInterval
// XHttpRequest, fetch, ...
// console.log("a");
// setTimeout(function(){
//     console.log('b');
// },500);
// setTimeout(function () {
//   console.log("c");
// }, 500);

// Promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(function abc(params){
        console.log("oke baby");
    });
    //reject("thất bại");
  },1000);
});

promise
  .then(function (data) {
    // nhận dữ kiệu khi promise trả thành công
    console.log("gọi vào .then1 với data: ", data);
    data();
  })
  .then(function (data) {
    // nhận dữ kiệu khi promise trả thành công
    console.log("gọi vào .then2 với data: ", data);
    return 2;
  })
  .then(function (data) {
    // nhận dữ kiệu khi promise trả thành công
    console.log("gọi vào .then3 với data: ", data);
    return 3;
  })
  .catch(function (data) {
    // nhận dữ liệu khi promise trả thất bại
    console.log("gọi vào .catch với data: ", data);
    return;
  })
  .finally(function (data) {
    //luôn nhận dữ liệu vào đây
    console.log("promise complted!");
  });

//promise.all
//job1
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('thành công1');
  }, 3000);
});
//job2
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //resolve('thành công');
    reject("thất bại2");
  }, 2000);
});
// chờ cho đến khi job1 và job2 thực hiện xong
let promiseAll = Promise.all(promise1,promise2);
promiseAll.then(function(data){
    console.log('promiseAll.then có data',data);
    let dataPromise1 = data[0];
    let dataPromise2 = data[1];
    console.log("dataPromise1",dataPromise1);
    console.log("dataPromise2", dataPromise2);
    return dataPromise1;
})
.then(function(data){
    console.log("promiseAll.then2 có data",data);
})
//async & await
console.log('=========');
async function asyncFn(){
    return 'hello';

}
console.log(typeof asyncFn);
