import * as C from "./style"
import mySelf from "../../assets/images/mySelf.jpg"
import {Link} from "react-router-dom"
export const MenuAside = ({selectView})=>{
    return(
        <C.Container  >
            <div className="infoAdimContainer">
                <div className="imgAdminWrapper">
                    <img src={mySelf} alt="admin imagem"/>
                </div>
                <h3 id="adminName">Jú</h3>
            </div>
            <ul className="menuItemContent">
                <li className="itensMenu" onClick={()=>selectView('gerencia')}>Gerenciar</li>
                <li className="itensMenu"  onClick={()=>selectView('cadastro')}>Cadastrar</li>
                <li className="itensMenu"><Link to="/">Acesso ao site</Link> </li>
            </ul>
        </C.Container>
    )
}