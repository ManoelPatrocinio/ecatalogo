import * as C from "./App.style";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Categorias } from "./components/Categorias";
import { CardItem } from "./components/CardItem";
import { Footer } from "./components/Footer";
import { ModalHelper } from "./components/Modals/ModalHelper";
import { Produtos } from "./data/productList";

function App() {
  const [helper, sethelper] = useState(false);
  const [catSelected, setCatSelected] = useState("Perfumaria");
  const [search, setSearch] = useState("");

  return (
    <C.Container>
      <C.Fixed>
        <Header
          onClickHelper={() => sethelper(true)}
          setValue={setSearch}
          value={search}
        />
        <Categorias setValue={setCatSelected} />
      </C.Fixed>

      <C.Main>
        <C.SectionContent>
          <C.SectionTitle>
            <div className="titleLine"></div>
            <h1> {catSelected}</h1>
            <div className="titleLine"></div>
          </C.SectionTitle>
          {!search ? (
            <C.CardContent>
              {Produtos.filter((item) => item.category === catSelected).map(
                (item, index) => (
                  <CardItem key={index} product={item} />
                )
               )}
            </C.CardContent>
          ) : (
            <C.CardContent>
              {Produtos.filter((produto) =>
                produto.title.toLowerCase().includes(search.toLowerCase())
              ).map((produto, index) => (
                <CardItem key={index} product={produto} />
              ))}
            </C.CardContent>
          )}
        </C.SectionContent>
      </C.Main>
      <Footer />
      <ModalHelper
        isOpenHelp={Boolean(helper)}
        onClickBtnClose={() => sethelper(false)}
      />
    </C.Container>
  );
}

export default App;
