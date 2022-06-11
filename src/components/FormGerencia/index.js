import { useState } from "react";
import Swal from "sweetalert2";
import { apiAlterStatus, apiUpdate } from "../../api/api";
import { NotFound } from "../NotFoundPages";
import * as C from "./style";

export const FormGerencia = ({ products }) => {
  const [productTE, setProduct] = useState({...products});
  const setInput = (newValue) => {
    setProduct((product) => ({ ...product, ...newValue }));
  };
  const handleEdit = (itemId) => {
    Swal.fire({
      icon: "question",
      title: "Deseja salvar a alteração ?",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        apiUpdate(itemId,productTE);
      }
    });
  };
  const hendleAlterStatus = (itemId) =>{
    Swal.fire({
      icon: "question",
      title: "Deseja altera exibição desse produto ?",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        apiAlterStatus(itemId)

      }
    });
  }
 
  return (
    <C.Container>
      <header className="headerSection">
        <h3>Gerenciar Produtos</h3>
        <div className="titleLine"></div>
      </header>

      <main className="inputGerenciaContainer">
        {products ? (
          products.map((item, index) => (
            <section className="formManagement" key={index}>
              <div className="row">
                <div className="imgWrapper">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="inputsGerenciaContent">
                  <div className="inputWrapper">
                    <div className="inputGroup" id="inputGroupName">
                      <label>Nome</label>
                      <input
                        type="text"
                        defaultValue={item.title}
                        onChange={(e) => setInput({ title: e.target.value })}
                      />
                    </div>
                    <div className="inputGroup" id="inputGroupDescription">
                      <label>Descrição</label>
                      <textarea
                        defaultValue={item.description}
                        onChange={(e) =>
                          setInput({ description: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="inputWrapper">
                    <div className="inputGroup" id="inputGroupPreco">
                      <label>Preço</label>
                      <input type="text" defaultValue={item.price}
                       onChange={(e) => setInput({ price: e.target.value })}
                      />
                    </div>
                    <div className="inputGroup" id="inputGroupQtdInStock">
                      <label>Qtd</label>
                      <input type="number" defaultValue={item.qtdInStock} 
                       onChange={(e) => setInput({ qtdInStock: e.target.value })}
                      />
                    </div>
                    <div className="inputGroup" id="inputGroupCategory">
                      <label>Categoria</label>

                      <select
                        onChange={(e) => setInput({ category: e.target.value })}
                        defaultValue={item.category}
                      >
                        <option value={item.category}>{item.category}</option>
                        <option value="Perfumaria">Perfumaria</option>
                        <option value="Banho/Corpo">Banho/Corpo</option>
                        <option value="Maquiagem">Maquiagem</option>
                        <option value="Rosto">Rosto</option>
                        <option value="Cabelos">Cabelos</option>
                      </select>
                    </div>
                    <div className="inputGroup" id="inputGroupImage">
                      <label htmlFor="fileImg"> Selecione a imagem  &#187;</label>

                      <input type="text" id="fileImg"  onChange={(e) => setInput({ imageUrl: e.target.value })}/>
                    </div>
                  </div>
                  <div className="inputGroup" id="btnGerenciaOptionContent">
                    <button
                      className="btnGerencia"
                      onClick={() => hendleAlterStatus(item._id)}
                    >
                      { item.status === true ? (  "Desativar") : ("Ativar")  }
                      <i className="fas fa-trash"></i>
                    </button>
                    <button
                      className="btnGerencia"
                      onClick={() => handleEdit(item._id)}
                    >
                      Editar
                      <i className="far fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))
        ) : (
          <NotFound />
        )}
      </main>
    </C.Container>
  );
};
