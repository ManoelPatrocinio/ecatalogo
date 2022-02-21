import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2% 0 0 0;
  z-index: 999;

  background-color: #FCFCFC;
  border-right: 1px solid #cecece;


  .headerTiltle {
    width: 100%;
    font-size: 1.3rem;
    font-weight: 600;
    color: #ff7c34;
    text-align: center;
    padding: 1% 0;
  }

  .infoAdimContainer {
    width: 100%;
    height: 16%;
    margin: 0 0  1% 0;
  }
  .imgAdminWrapper {
    margin: 0 auto;
    border-bottom: 1px solid #cecece;

  }
  .imgAdminWrapper,
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  #adminName {
    color: #757575;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    padding: 2% 0;
  }

  .menuItemContent{
    width: 100%;
    height: 69%;
    padding: 1% 0 ;
  }
  .itensMenu,.itensMenu a{
    width: 100%;
    height: 2.813rem;
    padding: 10px 0 ;
    background-color: #ff7c34;
    
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }
`;
