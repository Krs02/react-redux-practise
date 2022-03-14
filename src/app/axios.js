import axios from "axios";
const BASE_URL = "https://gorest.co.in/public/v2";
const _AXIOS = (url, type, payload, query = null) => {
  const instance = {
    baseURL: BASE_URL,
    url,
    timeout: 100000,
    method: type,
    data: payload,
    params: {
      query,
    },
    headers: { "X-Custom-Header": "foobar" },
  };
  return new Promise(function (resolve, reject) {
    axios(instance)
      .then((response) => {
        resolve(response?.data);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {
        console.log("Finally");
      });
  });
};

export default _AXIOS;
