import * as C from "./style";
export const Categorias = () => {
  return(
    <C.Container>
      <C.UlContent>
        <li className="CatItem">Perfumaria</li>
        <li className="CatItem">Banho/Corpo</li>
        <li className="CatItem">Maquiagem</li>
        <li className="CatItem">Rosto</li>
        <li className="CatItem">Cabelos</li>
       </C.UlContent>
    </C.Container>
  )
};
