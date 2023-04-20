// https://www.youtube.com/watch?v=DHvZLI7Db8E&list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm

const video1 = new Promise((resolve, reject) => {
  resolve("Video 1 has been recorded");
});

const video2 = new Promise((resolve, reject) => {
  resolve("Video 2 has been recorded");
});

const video3 = new Promise((resolve, reject) => {
  resolve("Video 3 has been recorded");
});

Promise.all([video1, video2, video3]).then((message) => {
  console.log("Display all messages ---> ", message);
}); // Promise.all allows to wait until promises are fullfilled;
// it takes an array of promises to look at as an argument
// then and catch can be used for all of them at once

Promise.race([video1, video2, video3]).then((message) => {
  console.log("Display all messages ---> ", message);
}); // Promise.race acts the same way as Promise.all but return only the first fullfilled promise.
