import * as C from "./styles";
import { MenuAside, FormCadastro, FormGerencia } from "../../components";
import {  useState } from "react";
export const Admin = () => {
  const [showmenu, setShowMenu] = useState(false);
  const [selectView, setSelectView] = useState("cadastro");
  return (
    <C.Container>
      <header className="headerTiltle">
        <button
          id="IconMenuMobile"
          onClick={
            !showmenu ? () => setShowMenu(true) : () => setShowMenu(false)
          }
        >
          <i className="fas fa-bars"></i>
        </button>
        <h1> Painel Administrativo</h1>
        <div></div>
      </header>

      <section>

        {showmenu && <aside><MenuAside selectView={setSelectView} /></aside>}
        <main>
          {selectView === "cadastro"? <FormCadastro/> : <FormGerencia/>      }
        </main>
      </section>
    </C.Container>
  );
};
