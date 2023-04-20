const record = (arg, timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Video " + arg + " has been resolved"), timer);
  });

const record1 = record(1, 1000);
const record2 = record(2, 2000);
const record3 = record(3, 500);

Promise.all([record3, record2, record1]).then((response) => console.log("response ========>", response));
