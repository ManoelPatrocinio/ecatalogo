import * as C from "./style";
import  ReactDOM  from "react-dom";
import prodImg from "../../../assets/images/p1.svg";

const  portalRoot = document.getElementById('root_portal')

export const ModalProduct = ({isOpen,onClickBtnClose}) => {

  if(!isOpen){
    return null
  }
  return ReactDOM.createPortal(
    <C.Container onClick={onClickBtnClose}>
      <C.ModalContent>
        <button className="btnModalClose" onClick={onClickBtnClose}>X</button>
        <C.Content className="ContentIMG">
          <img src={prodImg} alt="perfume natura" />
        </C.Content>
        <C.Content className="ContentDetals">
          <header>
            <h1>Detalhes</h1>

            <h3 className="ProdTitle">Colonia Paz e Humor 200ml</h3>
            <small className="ProdInStock">2 em estoque</small>
          </header>
          <article>
            <h4>
              Preço: <span className="price">R$ 64.70</span>{" "}
            </h4>{" "}
            <br />
            <h4>Descrição:</h4>
            <p>
              Aqui será inserido a descrição e/ou informações adicionais do
              produto{" "}
            </p>
          </article>
          <footer>
            <p>Entre em contato, podemos negociar</p>
          </footer>
        </C.Content>
      </C.ModalContent>
    </C.Container>,
    portalRoot,
  );
};
