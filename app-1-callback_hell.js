// // https://www.youtube.com/watch?v=DHvZLI7Db8E&list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm

// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
// As a result the code is read from bottom to top and it is hard to understand. Example:

video();

function video() {
  let messages = [];
  video1();
  function video1() {
    video2();
    messages.push("Video 1 has been recorded");
    function video2() {
      video3();
      messages.push("Video 2 has been recorded");
      function video3() {
        messages.push("Video 3 has been recorded");
      }
    }
  }
  console.log("messages ---->", messages);
}

// to prevent callback hell you can use promises and async functions
