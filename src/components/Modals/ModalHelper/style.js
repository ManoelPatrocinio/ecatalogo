import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: block;
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

  @media (max-width: 480px) {
    overflow-y: auto;
  }
  @media (min-width: 480px) and (max-width: 678px) {
    overflow-y: auto;
  }
`;

export const ModalContent = styled.div`
  width: 80%;
  height: auto;
  margin: 7% auto;
  max-width: 95%;

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
    width: 95%;
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
    height: auto;
    padding: 2% 0 0 0;
  }

  .WrapperImgPefil {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin: 0 auto;
  }
  .WrapperImgPefil img {
    border-radius: 50%;
  }

  header h1 {
    width: 100%;
 
    margin: 2% 0 5% 0;
    font-size: 1.4rem;
    font-weight: 500;
    color: #ff7c34;
  }
  header p {
    width: 76%;
    margin: 0 auto;
    line-height: 1.6rem;
  }
  #HelperNumberLink {
    color: #1baf67;
  }

  main {
    margin: 2% 0 0 0;
    padding: 2rem 4.875rem;
    text-align: left;
  }

  main h3 {
    font-size: 1.2rem;
    color: #ff7c34;
    margin-bottom: 1%;
  }
  #listInstrution {
    padding: 0 0 0 2%;
  }
  #listInstrution li {
    list-style: disc;
    padding: 0.7%;
  }

  @media (max-width: 480px) {
    header h1 {
     
      font-size: 1rem;
      margin:2% 0 5% 0;
      
    }
    header p {
      width: 90%;
      
    }
 

    main {
      padding: 5% 10%;
    }

    main h3 {
      font-size: 1rem;
       margin-bottom: 10%;
    }
    #listInstrution {
      padding: 0 0 0 2%;
      line-height: 1.6rem;
    }
  
  }
`;
