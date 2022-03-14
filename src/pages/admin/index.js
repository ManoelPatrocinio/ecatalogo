import * as C from "./styles";
import { MenuAside, FormCadastro, FormGerencia } from "../../components";
import {  useEffect, useState } from "react";
import {api} from "../../api/api"

export const Admin = () => {
  const [showmenu, setShowMenu] = useState(false);
  const [selectView, setSelectView] = useState("cadastro");
  const [produts, setProduts] = useState([]);

  const getAll = async () => {
    await api
      .get("/admin")
      .then((response) => setProduts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  };

  useEffect(() => {

    getAll()

  }, []);
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
          {selectView === "cadastro"? <FormCadastro/> : <FormGerencia products={produts}/>      }
        </main>
      </section>
    </C.Container>
  );
};
