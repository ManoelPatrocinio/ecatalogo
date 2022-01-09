import * as C from "./style";
import Logo_Notfoun from "../../assets/images/not-found.svg";

export const NotFound = () => {
  return (
    <C.Container>
      <header>
        <h1> Oops.. </h1>
        <h3>Parece que não tenho em estoque este(s) produto(s)</h3>

      </header>
      <article>
        <div className="imgWrapper">
          <img src={Logo_Notfoun} alt="sem produto no estoque" />
        </div>
      </article>
    </C.Container>
  );
};
