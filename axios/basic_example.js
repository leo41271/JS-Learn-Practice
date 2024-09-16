const axios = require("axios");
// import { key } from "../private/key";
const key   = require('../private/key')
const api_key = key
const api_url = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0014-001"; //海嘯資訊資料
axios
  .get(api_url + "?Authorization=" + api_key + "&limit=5&offset=2&format=JSON")
  .then(function (response) {
    console.log(response); // handle success
  })
  .catch(function (error) {
    console.log(error); // handle error
  })
  .finally(function () {}); // always executed

axios
  .get(api_url, {
    params: {
      Authorization: api_key,
      limit: 5,
      offset: 2,
      format: JSON,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {})
  .finally(function () {});

async function getUser() {
  //async/await 是 ECMAScript 2017 的一部分，不支援於Internet Explorer和舊版瀏覽器
  try {
    const response = await axios.get(
      api_url + "?Authorization=" + api_key + "&limit=5&offset=2&format=JSON"
    );
    console.log("7777777777", response);
  } catch (error) {
    console.error(error);
  }
}
getUser();
