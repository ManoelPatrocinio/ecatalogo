import * as C from "./style";
import Logo_instagram from "../../assets/images/logos_instragram.svg"
import Logo_facebook from "../../assets/images/logos_facebook.svg"
import Logo_whatsapp from "../../assets/images/logos_whatsapp.svg"

const MyPhone = process.env.REACT_APP_MY_NUMBER;
const linkWhatsapp = "https://api.whatsapp.com/send?phone=+" + MyPhone;

export const Footer = () => {
  return(
    <C.Container >
      <C.IconContent>

        <a   href={linkWhatsapp} rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_whatsapp} alt="link whatsapp"></img></a>
        <a   href={linkWhatsapp} rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_instagram} alt="link intragram" ></img></a>
        <a   href={linkWhatsapp} rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_facebook} alt="link facebook"></img></a>
      </C.IconContent>
      <p id="copyright">Copyright 	&copy; <a href="https://www.instagram.com/patrocinioiii/"  rel="noopener noreferrer">Manoel Patrocinio, 2022</a></p>
      <p id="credits"> Créditos pelas imagens: <a href="https://www.natura.com.br/"  alt="site natura">Natura </a> 
      |  <a href="https://stocksnap.io/author/kellyishmael"  > Kelly Ishmael </a>  | <a href="https://stocksnap.io"  > StockSnap </a></p>
    </C.Container>
  )
};
