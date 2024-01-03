"use client"
import { CardProduct } from "@/components/Cardproduct";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section_title from "@/components/Section_title";
import { products } from "@/data/productstList";
import { ProductType } from "@/types/product";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [catSelected, setCatSelected] = useState("Perfumaria");
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]
  );

  const filterProductByCategory = useCallback((categorySelected: string) => {
    const result = products.filter((product) => product.category === categorySelected);
    setFilteredProducts(result);
    setCatSelected(categorySelected);
    return result
  }, []);

  useEffect(() => {
    filterProductByCategory("Perfumaria");
  }, [filterProductByCategory]);


  return (
    <>
      <Header />
      <Navbar toggleCategory={filterProductByCategory} />
      <main className="py-4 z-0">
        <Section_title title={catSelected} />
        <div className="w-full flex flex-wrap  justify-around gap-4 pt-4 px-2 ">
          {filteredProducts.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
