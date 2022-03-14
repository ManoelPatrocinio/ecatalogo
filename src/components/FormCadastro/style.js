import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 2% 1%;

  .headerSection,
  .headerSection h3,
  .titleLine,
  .form,
  .inputGroup label,
  .inputGroup input,
  .inputGroup textarea,
  .inputGroup select{
    width: 100%;
  }
  .titleLine {
    height: 2px;
    background-color: #ff7c34;
  }
  .headerSection h3 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .headerSection h3,
  .inputGroup label {
    color: #ff7c34;
    text-align: left;
  }
  .form {
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    padding: 2% 0 0 0;
  }
  .row{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .row input,
  .row textarea,
  .row select{
    padding: 2% 1%;
  }
  .inputGroup {
    max-width: 50%;
    width: 24%;

    min-width: 20%;
    height: 4rem;
    margin: 0 0 2% 0;
  }

  #inputCadName,
  #inputCadDesc{
    width: 47%;
  }
 

  .btnFormFinalizar {
    width: 13.313rem;
    height: 2.5rem;
    text-align: center;
    background-color: #ff7c34;
    color: #fff;
    border: none;
  }
  @media (max-width: 574px) {
    .form,.row {
      flex-direction: column;
      padding: 2%;
    }
    .inputGroup {
      max-width: 100%;
      width: 100% !important;
      margin: 0 0 4% 0;
    }
    #inputGroupPreco,
    #inputGroupFile {
      width: 100%;
      margin: 0 0 4% 0;

    }
    .inputGroup input {
      padding: 4% 1%;
    }
    .inputGroup label {
      font-size: 1.2rem;
    }
  }
`;
