import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);

  .btnModalClose {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background-color: #ff7c34;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  width: 42rem;
  height: 25rem;
  max-width: 95%;
  max-height: 95%;

  display: flex;
  position: relative;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 2px 0px 5px #e5e5e5;

  .ContentIMG,
  .ContentDetals {
    width: 50%;
    height: 100%;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    flex-direction: column;

    .ContentIMG,
    .ContentDetals {
      width: 100%;
      height: 50%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  text-align: center;
  color: #767070;

  header {
    width: 100%;
    max-height: 30%;
  }
  header h1 {
    width: 100%;
    background-color: #fbf2c0;
    padding: 4% 0;
    font-size: 1.4rem;
    font-weight: 500;
    color: #ff7c34;
  }
  article {
    text-align: left;
    padding: 0 0 0 10%;
    max-height: 60%;

  }

  .ProdTitle {
    color: #ff7c34;
    font-size: 1rem;
    font-weight: 500;
    margin: 4% 0 0 0;
    -webkit-line-clamp: 2; //limita o numero de linhas
  }
  .ProdInStock {
    font-size: 0.8rem;
    color: #767070;
  }
  .price {
    color: #1baf67;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 5% 0 0 0;
  }

  footer p {
    padding: 4% 0;
    color: #ff7c34;
  }

`;
