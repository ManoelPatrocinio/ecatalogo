import * as C from "./style";
import ReactDOM from "react-dom";
import MySelf from "../../../assets/images/mySelf.jpg";

const portalRoot = document.getElementById("root_portalHelper");

export const ModalHelper = ({ isOpenHelp, onClickBtnClose }) => {
  if (!isOpenHelp) {
    return null;
  }
  return ReactDOM.createPortal(
    <C.Container onClick={onClickBtnClose}>
      <C.ModalContent>
        <button className="btnModalClose" onClick={onClickBtnClose}>
          X
        </button>
        <C.Content>
          <header>
            <div className="WrapperImgPefil">
              {" "}
              <img src={MySelf} alt="perfumeX natura" />{" "}
            </div>
            <h1>Olá, Seja Bem vindo ao meu catálogo Digital !</h1>
            <p>
              Nesse catálogo você encontrará todos os produtos que eu possou
              para pronta entrega. Se eu não tiver o que você estar procurando
              entre em contato comigo, pelo número:
              <a  href="https://api.whatsapp.com/send?phone=+5574988193405"  target="_blank"  rel="noopener noreferrer" id="HelperNumberLink"> (74) 98839-3944</a>.
            </p>
          </header>

          <main>
            <h3>Instruções de Uso:</h3>
            
            <ul id="listInstrution">
              <li>Clique nas imagens para ver as informações dos produtos</li>
              <li>Clique no botão Solicitar, para enviar uma mensagem pelo whatsapp, com as informações do produto para a consultora.</li>
            </ul>
          </main>
        </C.Content>
        
      </C.ModalContent>
    </C.Container>,
    portalRoot
  );
};
