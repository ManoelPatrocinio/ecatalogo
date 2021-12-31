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
  console.log(catSelected);
  return (
    <C.Container>
      <C.Fixed>
        <Header onClickHelper={() => sethelper(true)} />
        <Categorias setValue={setCatSelected} />
      </C.Fixed>

      <C.Main>
        <C.SectionContent>
          <C.SectionTitle>
            <div className="titleLine"></div> 
            <h1> {catSelected}</h1>
            <div className="titleLine"></div>
          </C.SectionTitle>

          <C.CardContent>
            {Produtos.filter((item) => item.category === catSelected).map(
              (item, index) => (
                <CardItem key={index} product={item} />
              )
            )}
          </C.CardContent>
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
