import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 2% 0 0 2%;
  .inputGerenciaContainer {
    width: 100%;
    height: 85vh;
    overflow-y: auto;
  }
  .headerSection,
  .headerSection h3,
  .titleLine,
  .form,
  .inputsGerenciaContent,
  .inputGroup label,
  .inputGroup input,
  .inputGroup textarea {
    width: 100%;
  }
  .titleLine {
    height: 2px;
    background-color: var(--Orange);
  }
  .headerSection h3 {
    font-size: 1.25rem;
    color: #ff7c34;
    text-align: left;
    font-weight: 500;
  }
  .headerSection h3,
  .inputGroup label {
    color: var(--fontColorOrange);
    text-align: left;
  }
  .formManagement{
    display: block;
    height: auto;
    flex-wrap: wrap;
    margin: 2% 0;
    justify-content: center;
    align-items: center;
    border: solid 1px var(--Gray)
  }
  .imgWrapper{
    width: 25%;
    height: 100%;
  }
  
  .inputsGerenciaContent {
    width: 75%;
    height: 100%;
  }
  .inputWrapper{
    display: flex;
    justify-content: space-between;
    padding: 2% ;
  }

  .inputGroup {
    height: 4rem;
  }

  #inputGroupName {
    width: 50%;
  }
  #inputGroupDescription{
    width: 36%;
  }
  #inputGroupQtdInStock,
  #inputGroupPreco,
  #inputGroupCategory {
    width: 6.688rem;
  }
  #inputGroupImage{
    width:16.938rem;
  }
  /* #inputGroupImage input[type='file'] {
  display: none
  } */
  #inputGroupPreco input,
  #inputGroupName input,
  #inputGroupQtdInStock input,
  #inputGroupImage input,
  #inputGroupCategory select,
  #inputGroupDescription textarea {
    padding: 12px 1%;
    
  }
  #btnGerenciaOptionContent {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer ;
  }
  .btnGerencia {
    width: 11rem;
    margin: 0 1% 0 0;
    height: 2rem;
    text-align: center;
    background-color: var(--Orange);
    color:#fff;
    border: none;
    font-size: 1rem;
  }
  .btnGerencia i {
    font-size: 1.2rem;
    margin: 0 0 0 5px;
  }
  @media (max-width: 769px) {
    .headerSection {
      margin: 2% 0 0 0;
    }
  }

  @media (max-width: 630px) {
    .row{
      flex-direction: column;
    }
    .imgWrapper,
    .inputsGerenciaContent,
    .inputWrapper{
      width: 100% !important;
    }

    .imgWrapper{
      height: 30%;
    }
    .inputsGerenciaContent {
      height: 70% !important;
      border: 1px solid var(--Gray);
      margin: 2% 0;
      padding: 0 2%;
    }
    .inputWrapper{
      padding: 0;
      flex-wrap: wrap;
    }
    .inputGroup {
      width: 100% !important;
      margin: 0 0 2% 0;
    }
  
    .inputGroup label {
      font-size: 1.2rem;
    }
    #inputGroupDescription{
      margin:  0 0 5% 0;
    }
    #btnGerenciaOptionContent{
      justify-content: center;
    }
    .btnGerencia {
      width: 49%;
    height: 70%;
    }
  }
`;
