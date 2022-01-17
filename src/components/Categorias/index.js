import * as C from "./style";
export const Categorias = ({setValue}) => {

  return(
    <C.Container>
      <C.UlContent>
        <li onClick={()=>setValue('Perfumaria') }  className="CatItem">Perfumaria</li>
        <li onClick={()=>setValue('Banho/Corpo')} className="CatItem">Banho/Corpo</li>
        <li onClick={()=>setValue('Maquiagem')} className="CatItem">Maquiagem</li>
        <li onClick={()=>setValue('Rosto')} className="CatItem">Rosto</li>
        <li onClick={()=>setValue('Cabelos')} className="CatItem">Cabelos</li>
       </C.UlContent>
    </C.Container>
  )
};
