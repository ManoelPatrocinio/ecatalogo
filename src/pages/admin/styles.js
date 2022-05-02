import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .headerTiltle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20%;
    text-align: center;
    border-bottom: 1px solid #cecece;
  }
  .headerTiltle h1 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ff7c34;
    padding: 1% 0;
  }
  #IconMenuMobile {
    font-size: 1.6rem;
    color: #ff7c34;
    width: 1.875rem;
    height: 1.875rem;
    margin: 0 0 0 4%;
    cursor: pointer;
  }
  section {
    position: relative;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    aside {
      position: absolute;
      width: 30%;
      left: 0;
      top: 0;
      height: 100vh;
      z-index: 10;
    }
    main {
      width: 85%;
      height: 100%;
      margin: 0 auto;
    }
    main::-webkit-scrollbar{
      width: 9px;
    }
    
  }

  @media (max-width: 769px) {
    .headerTiltle{
      height: 25%;
      padding: 3% 0;
    }
    .headerTiltle h1 {
      font-size: 1.3rem;
    }
    #IconMenuMobile{
      font-size: 1.7rem;
      margin:  0 0 0 3%;
    }
    section{
      height: 75%;
    }
    main {
      width: 100% !important;
    }
    aside {
      width: 75% !important;
      
    }
  }
`;

export const SectionContent = styled.div``;
