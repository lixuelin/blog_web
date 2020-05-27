const axios = require("axios");
const serviceApi = require("../api/manager/index");
const Http = {};
const url = require("./../../config//service.config").api;

let instance = axios.create({
  baseURL: url,
  timeout: 5000,
  headers: {
    authorization: "aa",
  },
  withCredentials: true,
});

for (let key in serviceApi) {
  let api = serviceApi[key];
  Http[key] = async function(params, isFormData = false, config = {}) {
    let newParams = {};
    if (params && isFormData) {
      newParams = new FormData();
      for (let i in params) {
        newParams.append(i, params[i]);
      }
    } else {
      newParams = params;
    }

    let response = {};

    if (api.method === "post" || api.method === "put" || api.method === "patch") {
      try {
        response = await instance[api.method](api.url, newParams, config);
      } catch (error) {
        response = error;
      }
    } else if (api.method === "get" || api.method === "delete") {
      config.params = newParams;
      try {
        response = await instance[api.method](api.url, config);
      } catch (error) {
        response = error;
      }
    }

    return response;
  };
}

instance.interceptors.request.use(
  (config) => {
    // config.headers.authorization = getCookie("ss");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    if (error.response) {
      let data = {
        status: error.response.status,
        msg: error.response.data.message || error.response.data.msg,
        type: error.response.data.type,
      };
      return data;
    }
    return Promise.reject(error);
  }
);

export default Http;
