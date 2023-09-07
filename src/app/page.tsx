'use client'
import { CardProduct } from "@/components/Cardproduct";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section_title from "@/components/Section_title";
import { products } from "@/data/productstList";
import { useState } from "react";


export default function Home() {
  const [catSelected, setCatSelected] = useState("Perfumaria");

  return (
    <>
      <Header />
      <Navbar toggleCategory={setCatSelected}/>
      <main className="py-4">
        <Section_title title={catSelected}/>
        <div className="w-full flex flex-wrap  justify-around gap-4 pt-4 px-2 ">
          {products.map((product)=>(
            <CardProduct product={product} key={product.id}/>
          ))}
        </div>
      </main>
    </>
  )
}
