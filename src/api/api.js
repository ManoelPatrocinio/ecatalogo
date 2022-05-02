import axios from "axios";
import "react-dotenv";
import Swal from "sweetalert2";

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND,
});

export const apiDelete = async (productId) => {
  await api
    .delete(`/admin/delete/${productId}`)
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Produto Deletado",
        showConfirmButton: true,
      })
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Opss Erro ao Deletado Produto ",
        showConfirmButton: true,
      })
      console.error("ops! ocorreu um errom extentiono: " + err);
    });
};

export const apiUpdate = async (productId,product) => {
 
  await api
    .put(`/admin/update/${productId}`, product)
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Produto Atualizado",
        showConfirmButton: true,
      })
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Opss Erro ao Atualizado Produto ",
        showConfirmButton: true,
      })
      console.error("ops! ocorreu um erro: " + err);
    });
};
export const apiCreate = async (product) => {
  await api
    .post("/admin/create", product)
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Produto Adicionado",
        showConfirmButton: true,
      })
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Opss Erro ao Adicionar Produto ",
        showConfirmButton: true,
      })
      console.error("ops! ocorreu um erro: " + err);
    });
};


export const apiAlterStatus = async (productId) => {
  await api
    .put(`/admin/alterStatus/${productId}`)
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Produto Desativado",
        showConfirmButton: true,
      })
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Opss Erro ao Desativar Produto ",
        showConfirmButton: true,
      })
      console.error("ops! ocorreu um erro: " + err);
    });
};
