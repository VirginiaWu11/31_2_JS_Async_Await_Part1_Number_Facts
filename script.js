//Use promises to work with APIs

BASE_URL = "http://numbersapi.com/";
BASE_JSON = "?json";

//1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

async function getFavNumberFact(num) {
  let res = await axios.get(`${BASE_URL}${num}${BASE_JSON}`);
  console.log(res.data.text);
}

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

const fourNumArray = [3, 5, 7, 9];
// const fourNumPromises = [];

// for (let i = 0; i < fourNumArray.length; i++) {
//   fourNumPromises.push(axios.get(`${BASE_URL}${fourNumArray[i]}${BASE_JSON}`));
// }
// async function parallelAsync() {
//   try {
//     let numbers = await Promise.all(fourNumPromises);
//     numbers.forEach((val) => $("body").append(`<p>${val.data.text}</p>`));
//   } catch (e) {
//     console.log(e);
//   }
// }

async function parallelAsync() {
  let { data } = await axios.get(`${BASE_URL}${fourNumArray}${BASE_JSON}`);
  console.log(data);
}
async function parallelAsync() {
  let dataArr = await Promise.all(
    Array.from({ length: 4 }, (val, i) =>
      axios.get(`${BASE_URL}${fourNumArray[i]}${BASE_JSON}`)
    )
  );
  console.log(dataArr);
  dataArr.forEach((res) => {
    $("body").append(`<p>${res.data.text}</p>`);
  });
}
parallelAsync();

// //3 Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let favoriteNumber = "11";

const fourFactPromises = [];

for (let i = 0; i < fourNumArray.length; i++) {
  fourFactPromises.push(axios.get(`${BASE_URL}${favoriteNumber}${BASE_JSON}`));
}

async function parallelFavAsync() {
  try {
    let numbers = await Promise.all(fourFactPromises);
    numbers.forEach((val) => $("body").append(`<p>${val.data.text}</p>`));
  } catch (e) {
    console.log(e);
  }
}
parallelFavAsync();
