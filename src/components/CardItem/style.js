import styled from "styled-components";

export const Container = styled.div`
  width: 16rem;
  height: 19rem;
  //max-height:19rem;
  margin: 3% 1%;

  display: block;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 2px 0px 5px #e5e5e5;
  cursor: pointer;

  .imgContent {
    width: 100%;
    height: 55%;
  }
  .imgContent img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .DescriptionContent {
    width: 100%;
    height: 33%;
    max-height: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    text-align: center;
    padding: 2% 0;
  }
  .ProdTitle {
    color: #ff7c34;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    max-height: 35px;
    overflow-x: auto;
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
    height: 12%;
    background-color: #1baf67;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    padding: 2% 0;
    cursor: pointer;
  }
  .btnRequest i {
    margin-left: 3%;
  }

  @media (max-width: 480px) {
    width: 18rem;
    height: 21rem;

    .ProdTitle {
      color: #ff7c34;
      font-size: 1rem;
      font-weight: 500;
      -webkit-line-clamp: 2; //limita o numero de linhas
    }
    .ProdInStock {
      font-size: 0.9rem;
      color: #767070;
    }
    .price {
      color: #1baf67;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  @media (min-width: 480px) and (max-width: 678px) {
    width: 20rem;
       height: 23rem;

    .ProdTitle {
      color: #ff7c34;
      font-size: 1.2rem;
      font-weight: 500;
      -webkit-line-clamp: 2; //limita o numero de linhas
    }
    .ProdInStock {
      font-size: 0.9rem;
      color: #767070;
    }
    .price {
      color: #1baf67;
      font-size: 1.2rem;
      font-weight: 500;
      margin: 5% 0 0 0;
    }
  }
`;
