import * as C from "./style";
import React, { useEffect, useState } from "react";
import { Header,Categorias,CardItem, Footer, ModalHelper, NotFound } from "../../components";
import { api } from "../../api/api";

export function Home() {
  const [helper, sethelper] = useState(false);
  const [catSelected, setCatSelected] = useState("Perfumaria");
  const [search, setSearch] = useState("");
  const [produts, setProduts] = useState([]);
  const getAll = async () => {
    await api
      .get("/")
      .then((response) => setProduts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  };

  useEffect(() => {
    getAll()

  }, []);

  function filterByCategory() {
    return produts.filter((item) => item.category === catSelected && item.status !== false);
  }
  const filterBySearch = () => {
    return produts.filter((produto) =>
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
                
                  <C.ScreenLoading>
                    <div className="loading"></div>
                    <p>loading...</p>
                  </C.ScreenLoading>
                
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

