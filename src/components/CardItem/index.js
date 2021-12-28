import * as C from "./style";
export const CardItem = ({ onClickImg,product }) => {

  function whatsappLinkGenerator ( productTitle, productPrice){
    const message =  `http://api.whatsapp.com/send?l=pt_BR&phone=+5574988193405&text=Olá jú ! Eu Tenho interesse no produto ${productTitle}, de preço: ${productPrice}. Ainda estar disponível ?`;
    window.location.href = message
    
  }


  return (
    <C.Container>
      <div className="imgContent" onClick={onClickImg}>
        <img
          src={product.imageUrl}
          alt="perfume natura"
        />
      </div>
      <div className="DescriptionContent" onClick={onClickImg}>
        <h3 className="ProdTitle">{product.title}</h3>
        <small className="ProdInStock">{product.qtdInStock} em estoque</small>
        <h4 className="price">R$ {product.price} </h4>
      </div>
      <button className="btnRequest" onClick={()=>whatsappLinkGenerator(product.title, product.price)}>
        Solicitar<i className="fab fa-whatsapp"></i>
      </button>
    </C.Container>
  );
};
