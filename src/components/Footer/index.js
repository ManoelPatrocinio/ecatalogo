import * as C from "./style";
import Logo_instagram from "../../assets/images/logos_instragram.svg"
import Logo_facebook from "../../assets/images/logos_facebook.svg"
import Logo_whatsapp from "../../assets/images/logos_whatsapp.svg"
export const Footer = () => {
  return(
    <C.Container >
      <C.IconContent>

        <a   href="https://api.whatsapp.com/send?phone=+5574988193405" rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_whatsapp} alt="link whatsapp"></img></a>
        <a   href="https://api.whatsapp.com/send?phone=+5574988193405" rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_instagram} alt="link intragram" ></img></a>
        <a   href="https://api.whatsapp.com/send?phone=+5574988193405" rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_facebook} alt="link facebook"></img></a>
      </C.IconContent>
      <p>Copyroght 	&copy; <a href="https://www.instagram.com/patrocinioiii/"  target="_blank"  rel="noopener noreferrer">Manoel Patrocinio</a></p>
    </C.Container>
  )
};
