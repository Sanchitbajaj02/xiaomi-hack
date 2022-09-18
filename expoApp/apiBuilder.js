import axios from "axios";

const instance = axios.create({
  baseURL: "https://xiaomi-hack.herokuapp.com/",
});

const operatorLogin = async (loginData) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .post("/api/operator/login", loginData)
      .then((res) => {
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
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};
const createOrder = async (token, data) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .post("/api/order/createOrder", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};
const fetchAllOrder = async (token) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get("/api/order", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};
export { operatorLogin, fetchAllProducts, createOrder, fetchAllOrder };
