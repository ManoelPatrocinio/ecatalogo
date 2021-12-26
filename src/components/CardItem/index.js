import * as C from "./style";
import prodImg from "../../assets/images/p1.svg"
export const CardItem = ({onClickImg}) => {
  return(
    <C.Container >
      <div className="imgContent" onClick={onClickImg} ><img src="https://cf.shopee.com.br/file/48a458b7f8f8263d028f2a661cc22f49" alt="perfume natura"/></div>
      <div className="DescriptionContent" onClick={onClickImg}>
        <h3 className="ProdTitle">Colonia Paz e Humor 200ml</h3>
        <small className="ProdInStock">2 em estoque</small>
        <h4 className="price">R$ 64.70 </h4>
      </div>
      <button className="btnRequest">Solicitar<i className="fab fa-whatsapp"></i></button>
    </C.Container>
  )
};
