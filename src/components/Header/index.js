import * as C from "./style";
export const Header = ({onClickHelper}) => {
  return(
    <C.Container className="header">
      <C.ItemHeaderContent onClick={onClickHelper}><i className="fas fa-question iconHelp"></i></C.ItemHeaderContent>
      <C.ItemHeaderContent id="headerTitle"><h1>Catálogo Digital Da Jú</h1> <h3>Revendedora Natura</h3></C.ItemHeaderContent>
      <C.ItemHeaderContent><i className="fas fa-search"></i></C.ItemHeaderContent>
    </C.Container>
  )
};
