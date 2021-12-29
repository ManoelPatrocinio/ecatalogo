import * as C from "./style";
import  ReactDOM  from "react-dom";

const  portalRoot = document.getElementById('root_portal')

export const ModalProduct = ({isOpen,onClickBtnClose,item}) => {

  if(!isOpen){
    return null
  }
  return ReactDOM.createPortal(
    <C.Container onClick={onClickBtnClose}>
      <C.ModalContent>
        <button className="btnModalClose" onClick={onClickBtnClose}>X</button>
        <C.Content className="ContentIMG">
          <img src={item.imageUrl} alt="perfume natura" />
        </C.Content>
        <C.Content className="ContentDetals">
          <header>
            <h1>Detalhes</h1>

            <h3 className="ProdTitle">{item.title}</h3>
            <small className="ProdInStock">{item.qtdInStock} em estoque</small>
          </header>
          <article>
            <h4>
              Preço: <span className="price">R$ {item.price}</span>{" "}
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
