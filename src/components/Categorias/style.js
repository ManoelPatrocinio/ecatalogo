import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 2.2rem;
  display: block;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px #cecece;
  overflow-x: auto;

  @media (max-width: 480px) {
    overflow-x: auto;
  }
`;
export const UlContent = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;

  .CatItem {
    color: #ff7c34;
    padding: 4px 1%;
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    justify-content: flex-start;

    .CatItem {
      font-size: 1.1rem;
      padding: 4px 3%;
      margin: 0 2%;
    }
  }
`;
