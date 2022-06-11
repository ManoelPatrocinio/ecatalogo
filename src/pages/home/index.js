// @ts-nocheck
import * as C from "./style";
import React, { useEffect, useState } from "react";
import {
  Header,
  Categorias,
  CardItem,
  Footer,
  ModalHelper,
  NotFound,
} from "../../components";
import { api } from "../../api/api";
import imgSlide1 from "../../assets/images/slide1.jpg";
import imgSlide2 from "../../assets/images/slide2.png";

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
    getAll();
  }, []);

  function filterByCategory() {
    return produts.filter(
      (item) => item.category === catSelected && item.status !== false
    );
  }
  const filterBySearch = () => {
    return produts.filter(
      (produto) =>
        produto.title.toLowerCase().includes(search.toLowerCase()) &&
        produto.status !== false
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
      <div
        id="carouselHeaderPromotion"
        className="carousel slide col-12"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselHeaderPromotion"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHeaderPromotion"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
     
        </div>
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img
              src={imgSlide1}
              className="d-block w-100 h-100 imgSlide"
              alt="imagem promocional do dia dos namorados"
            />
          </div>
          <div className="carousel-item h-100 ">
            <img
              src={imgSlide2}
              className="d-block w-100 h-100 imgSlide"
              alt="imagem promocional do dia dos namorados"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHeaderPromotion"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHeaderPromotion"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
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
