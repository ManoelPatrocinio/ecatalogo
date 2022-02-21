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
  .inputGroup input {
    width: 100%;
  }
  .titleLine {
    height: 2px;
    background-color: #ff7c34;
  }
  .headerSection h3 {
    font-size: 1.25rem;
    color: #ff7c34;
    text-align: left;
    font-weight: 500;
  }
  .headerSection h3,
  .inputGroup label {
    color: #ff7c34;
    text-align: left;
  }
  .inputsGerenciaContent {
    display: flex;
    height: 6rem;
    flex-wrap: wrap;
    padding: 2% 0 0 0;
    justify-content: center;
    align-items: center;
  }

  .inputGroup {
    height: 4rem;
  }

  #inputGroupNome {
    width: 50%;
  }
  #inputGroupPreco {
    width: 20%;
    margin: 0 0 0 3%;
  }
  #inputGroupPreco input,
  #inputGroupNome input {
    padding: 12px 1%;
    margin: 1% 0 0 0;
  }
  #btnGerenciaOptionContent {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .btnGerencia {
    width: 47%;
    text-align: center;
    color: #ff7c34;
    border: none;
    background-color: transparent;
  }
  .btnGerencia i {
    font-size: 1.7rem;
  }
  @media (max-width: 769px) {
    .headerSection {
      margin: 2% 0 0 0;
    }
  }

  @media (max-width: 630px) {
    .inputsGerenciaContent {
      height: auto !important;
      border: 1px solid #cecece;
      margin: 2% 0;
      padding: 0 2%;
    }
    .inputGroup {
      width: 100% !important;
      margin: 2% 0 0 0;
    }
    #inputGroupPreco {
      margin: 2% 0 0 0;
    }
    .inputGroup label {
      font-size: 1.2rem;
    }
    #btnGerenciaOptionContent{
      justify-content: center;
    }
    .btnGerencia {
      width: 17%;
      height: 99%;
    }
  }
`;
