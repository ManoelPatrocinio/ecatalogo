import ReactDOM from "react-dom";
import * as C from "./style";

const  portalRoot = document.getElementById('root_portal')

export const ModalProduct = ({isOpen,onClickBtnClose,item}) => {
  
  const MyPhone = process.env.REACT_APP_MY_NUMBER;
  if(!isOpen){
    return null
  }
  function whatsappLinkGenerator ( productTitle, productPrice){
    const message =  `http://api.whatsapp.com/send?l=pt_BR&phone=+${MyPhone}&text=Olá jú ! Eu Tenho interesse no produto ${productTitle}, de preço: ${productPrice}. Ainda estar disponível ?`;

    window.location.href = message;
    
  }
  console.log('JKJKJ')
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
            <h4 className="fs-6 mb-0">
              Preço: <span className="price">R$ {item.price}</span>{" "}
            </h4>{" "}
            <br />
            <h4 className="fs-6">Descrição:</h4>
            {item.description ? (<p>{item.description}</p>) : <p></p>}  
           
          </article>
          <footer>
            <button className="btnRequest" onClick={()=>whatsappLinkGenerator(item.title, item.price)}>Entrar em contato <i className="fab fa-whatsapp"></i></button>
          </footer>
        </C.Content>
      </C.ModalContent>
    </C.Container>,
    portalRoot,
  );
};
