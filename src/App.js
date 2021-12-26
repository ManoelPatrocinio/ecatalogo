import * as C from './App.style';
import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Categorias } from "./components/Categorias";
import { CardItem } from "./components/CardItem";
import { Footer } from "./components/Footer";
import {ModalProduct} from "./components/Modals/ModalProduct"
import { ModalHelper } from './components/Modals/ModalHelper';

function App() {


  const [productId, setProductId] = useState(null); 
  const [helper, sethelper] = useState(false); 

  
  return (
    <C.Container>
      <C.Fixed>
        <Header onClickHelper={()=>sethelper(true)}/>
        <Categorias/>
      </C.Fixed>

      <C.Main>
        <C.SectionContent>
          <C.SectionTitle>Perfumaria</C.SectionTitle>

          <C.CardContent >

            <CardItem onClickImg={()=> setProductId(1)}/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
          </C.CardContent>
        </C.SectionContent>
          
      </C.Main>
      <Footer/>
      <ModalProduct isOpen={Boolean(productId)} onClickBtnClose={()=>setProductId(null)}/>
      <ModalHelper isOpenHelp={Boolean(helper)} onClickBtnClose={()=>sethelper(false)}/>
    </C.Container>
  );
}

export default App;
