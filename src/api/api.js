import axios from "axios";
import "react-dotenv";

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND,
});

export const apiDelete = async (productId) => {
  await api
    .delete(`/admin/delete/${productId}`)
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
};

export const apiUpload = async (productId, product) => {
  await api
    .put(`/admin/upload/${productId}`, product)
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
};
export const apiCreate = async (product) => {
  await api
    .post("/admin/create", product)
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
};


export const apiAlterStatus = async (productId) => {
  await api
    .put(`/admin/alterStatus/${productId}`)
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
};
