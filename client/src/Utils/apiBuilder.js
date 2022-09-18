import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.38:4000",
  timeout: 1000,
});

const operatorLogin = async (loginData) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .post("/api/operator/login", loginData)
      .then((res) => {
        // console.log("api response", res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

const fetchAllProducts = async (token) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get("/api/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("api response", res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

export { operatorLogin, fetchAllProducts };