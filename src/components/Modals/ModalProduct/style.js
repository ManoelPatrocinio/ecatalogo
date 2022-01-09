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
     width: 50rem;
    height: 26rem;
  max-width: 95%;
  max-height: 95%;
  margin-top: 2%;

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

    .ContentIMG {
      width: 100%;
      height: 55%;
    }
    .ContentDetals{
      width: 100%;
      height: 45%;
      border-top: 1px solid #cecece;
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
    max-height: 40%;
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
    padding: 0 0 0 5%;
    max-height: 40%;
  }
  footer {
    width: 100%;
    max-height: 20%;
  }

  .ProdTitle {
    color: #ff7c34;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    max-height: 35px;
    overflow-x: auto;
    margin: 3% 0 0 0;

  }
  .ProdTitle:-webkit-scrollbar {
    width: 2px;
  }
  .ProdInStock {
    font-size: 0.8rem;
    color: #767070;
    margin: 3% 0;
  }
  .price {
    color: #1baf67;
    font-size: 1rem;
    font-weight: 500;
  }
  .btnRequest {
    width: 100%;
    background-color: #1baf67;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    padding: 2% 0;
    cursor: pointer;
  }

  footer p {
    padding: 4% 0;
    color: #ff7c34;
  }

  @media (max-width: 480px) {
    header h1 {
      display: none;
    }

    .ProdInStock {
      font-size: 0.8rem;
      color: #767070;
      margin: 5% 0;
    }
    footer{
      height: 17%;
    max-height: 23%;
    }
    .btnRequest {
      width: 100%;
      height: 100%;
      background-color: #1baf67;
      color: #fff;
      font-size: 1.2rem;
      font-weight: 300;
      border: none;
      padding: 2% 0;
      cursor: pointer;
    }
  }
`;
