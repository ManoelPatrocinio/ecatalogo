import {apiAlterStatus } from "../../api/api";
import { NotFound } from "../NotFoundPages";
import * as C from "./style";

export const FormGerencia = ({ products }) => {
 
  return (
    <C.Container>
      <header className="headerSection">
        <h3>Gerenciar Produtos</h3>
        <div className="titleLine"></div>
      </header>

      <main className="inputGerenciaContainer">
        {products ? (
          products.map((item, index) => (
            <div className="inputsGerenciaContent" key={index}>
              <div className="inputGroup" id="inputGroupNome">
                <label>Nome</label>
                <input type="text" value={item.title} readOnly={true} />
              </div>
              <div className="inputGroup" id="inputGroupPreco">
                <label>Preço</label>
                <input type="text" value={item.price} readOnly={true} />
              </div>

              <div className="inputGroup" id="btnGerenciaOptionContent">
                <button className="btnGerencia">
                  <i className="far fa-edit"></i> Editar
                </button>
                <button
                  className="btnGerencia"
                  onClick={()=> apiAlterStatus(item._id)}
                >
                  <i className="fas fa-trash"></i>Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </main>
    </C.Container>
  );
};
