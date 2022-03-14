import { useState } from "react";
import { apiCreate } from "../../api/api";
import Swal from 'sweetalert2'
import * as C from "./style";
const InitialProductState = {
  category: "",
  imageUrl: "faltarisso",
  title: "",
  qtdInStock: 0,
  price: 0,
  description: "",
  status: true,
};



export const FormCadastro = () => {

  const [product, setProduct] = useState(InitialProductState);
  const setInput = (newValue) => {
    setProduct((product) => ({ ...product, ...newValue }));
  };
  const sendProduct = () => {
    apiCreate(product)
    Swal.fire({
     
        icon: 'success',
        title: 'Produdo Cadastrado com Suceso',
        showConfirmButton: true,
        
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        }
      })

  };
  return (
    <C.Container>
      <header className="headerSection">
        <h3>Cadastro de Produtos</h3>
        <div className="titleLine"></div>
      </header>

      <form
        className="form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="row">
          <div className="inputGroup" id="inputCadName">
            <label>Nome</label>
            <input
              type="text"
              placeholder="insira o nome do produto"
              onChange={(e) => setInput({ title: e.target.value })}
            />
          </div>
          <div className="inputGroup" id="inputCadDesc">
            <label>Descrição</label>
            <textarea
              placeholder="insira a descrição do seu produto"
              onChange={(e) => setInput({ description: e.target.value })}
            />
          </div>
        </div>

        <div className="row">
          <div className="inputGroup">
            <label>Categoria</label>

            <select onChange={(e) => setInput({ category: e.target.value })}>
              <option value="">Escolher</option>
              <option value="Perfumaria">Perfumaria</option>
              <option value="Banho/Corpo">Banho/Corpo</option>
              <option value="Maquiagem">Maquiagem</option>
              <option value="Rosto">Rosto</option>
              <option value="Cabelos">Cabelos</option>
            </select>
          </div>
          <div className="inputGroup">
            <label>Preço</label>
            <input
              type="text"
              placeholder="insira o preço do produto"
              onChange={(e) => setInput({ price: e.target.value })}
            />
          </div>
          <div className="inputGroup">
            <label>Qtd.Em Estoque</label>
            <input
              type="text"
              placeholder="insira o preço do produto"
              onChange={(e) => setInput({ qtdInStock: e.target.value })}
            />
          </div>

          <div className="inputGroup">
            <label>Imagem</label>
            <input type="file" />
          </div>
        </div>

        <button className="btnFormFinalizar" onClick={() => sendProduct()}>
          Finalizar
        </button>
      </form>
    </C.Container>
  );
};
