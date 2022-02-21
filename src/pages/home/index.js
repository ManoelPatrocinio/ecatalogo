import * as C from "./style";
import React, { useEffect, useState } from "react";
import { Header,Categorias,CardItem, Footer, ModalHelper, NotFound } from "../../components";
import { Produtos } from "../../data/productList";
import ReactGA from "react-ga";

export function Home() {
  const [helper, sethelper] = useState(false);
  const [catSelected, setCatSelected] = useState("Perfumaria");
  const [search, setSearch] = useState("");

  useEffect(() => {
    ReactGA.initialize('G-5R5R7Q7KSD');
    ReactGA.pageview('/');
  }, []);

  function filterByCategory() {
    return Produtos.filter((item) => item.category === catSelected);
  }
  const filterBySearch = () => {
    return Produtos.filter((produto) =>
      produto.title.toLowerCase().includes(search.toLowerCase())
    );
  };

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
            {!search ? <h1> {catSelected}</h1> : <h1> Resultado da Busca</h1>}

            <div className="titleLine"></div>
          </C.SectionTitle>
          {!search ? (
            <C.CardContent>
              {filterByCategory().length > 0 ? (
                filterByCategory().map((item, index) => (
                  <CardItem key={index} product={item} />
                ))
              ) : (
                <NotFound />
              )}
            </C.CardContent>
          ) : (
            <C.CardContent>
              {filterBySearch().length > 0 ? (
                filterBySearch().map((produto, index) => (
                  <CardItem key={index} product={produto} />
                ))
              ) : (
                <NotFound />
              )}
            </C.CardContent>
          )}
        </C.SectionContent>
      </C.Main>
      <Footer />
      <ModalHelper
        isOpenHelp={Boolean(helper)}
        onClickBtnClose={() => sethelper(false)}
      />

      <span
        className="link-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </span>
    </C.Container>
  );
}

