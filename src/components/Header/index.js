import React, { useState } from "react";
import * as C from "./style";

export const Header = ({ onClickHelper, setValue, value }) => {
  const [classShow, setClassShow] = useState("");

  const checkSeachClick = () => {
    if (classShow) {
      setClassShow("");
    } else {
      setClassShow("showFormSearch");
    }
  };

  return (
    <C.Container className="header">
      <C.ItemHeaderContent onClick={onClickHelper}>
        <i className="fas fa-question iconHelp"></i>
      </C.ItemHeaderContent>
      <C.ItemHeaderContent id="headerTitle">
        <h1>Catálogo Digital Da Jú</h1> <h3>Revendedora Natura</h3>
      </C.ItemHeaderContent>
      <C.ItemHeaderContent>
        <i className="fas fa-search" onClick={() => checkSeachClick()}></i>
        <div className={`formSearch ${classShow}`}>
          <input
            type="search"
            className="inputSeach"
            placeholder="O que está buscando ?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </C.ItemHeaderContent>
    </C.Container>
  );
};
