function syncFunction() {
  const country = fetch("./stats_country.json").then((data) => data.json());
  console.log("country", country);
}

async function asyncFunction() {
  const country = await fetch("./stats_country.json").then((data) => data.json());
  console.log("country", country);
}

syncFunction(); // will log "country Promise {<pending>}" because fetch response takes time to fullfill and console.log executes before fetch completion
asyncFunction(); // will log "country {Alex: 'Canada', Maria: 'USA'}"
// async keyword before function allows to use "await" keyword before callback (fetch request) what stops execution of the following code (console.log) before full fullfillment of fetch request

// ----------------------------------------------

// Example of usage async function on a previous examples with video recording:

const video01 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Video 1 has been recorded"), 1000);
  });

const video02 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Video 2 has been recorded"), 1500);
  });

const video03 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Video 3 has been recorded"), 600);
  });

async function asyncVideo() {
  const response1 = await video01();
  const response2 = await video02();
  const response3 = await video03();

  console.log("async response ---->", response1, response2, response3); // log:
  // async response ----> Video 1 has been recorded Video 2 has been recorded Video 3 has been recorded
}

asyncVideo();

// without "async" and "await":

function syncVideo() {
  const response1 = video01();
  const response2 = video02();
  const response3 = video03();

  console.log("sync response ---->", response1, response2, response3); // log:
  // sync response ----> Promise {<pending>} Promise {<pending>} Promise {<pending>}
}

syncVideo();

// additional wds lesson about async:
// https://www.youtube.com/watch?v=V_Kr9OSfDeU
