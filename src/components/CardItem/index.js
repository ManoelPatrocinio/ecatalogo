import * as C from "./style";
import React, { useState } from "react";
import { ModalProduct } from "../Modals/ModalProduct";
import ReactGA from 'react-ga';


export const CardItem = ({ product }) => {
  const [productState, setProductState] = useState(null);
  const MyPhone = process.env.REACT_APP_MY_NUMBER;

  function whatsappLinkGenerator(productTitle, productPrice) {
    const message = `http://api.whatsapp.com/send?l=pt_BR&phone=+${MyPhone}&text=Olá jú ! Eu Tenho interesse no produto ${productTitle}, de preço: ${productPrice}. Ainda estar disponível ?`;
    window.location.href = message;
    ReactGA.event({
      category: 'Button',
      action: `click on solicitar button from Product: ${product.title}`
    })
  }


  return (
    <C.Container>
      <div className="imgContent" onClick={() => setProductState(product._id)}>
        <img src={product.imageUrl} alt="perfume natura" />
      </div>
      <div className="DescriptionContent">
        <h3 className="ProdTitle">{product.title}</h3>
        <small className="ProdInStock">{product.qtdInStock} em estoque</small>
        <h4 className="price">R$ {product.price} </h4>
      </div>
      <button
        className="btnRequest"
        onClick={() => whatsappLinkGenerator(product.title, product.price)}
      >
        Solicitar<i className="fab fa-whatsapp"></i>
      </button>
      <ModalProduct
        isOpen={Boolean(productState)}
        onClickBtnClose={() => setProductState(null)}
        item={product}
      />
    </C.Container>
  );
};
