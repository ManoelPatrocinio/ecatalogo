import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://cdn.stocksnap.io/img-thumbs/960w/fence-vine_TK9GYE7LLO.jpg");
  background-repeat: no-repeat;
  background-position: 100% 96%;
  background-size: cover;

  color: #fff;
  z-index: 0;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  #headerTitle {
    width: 14rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    text-shadow: 0px 0px 1px #f5f5f5;
  }
  @media (max-width: 680px) and (orientation: landscape) {
    width: 100%;
    height: 4rem;
  }
`;
export const ItemHeaderContent = styled.div`
  width: 5rem;
  text-align: center;

  h1 {
    font-size: 1.375rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1.125rem;
    font-weight: 400;
  }
  i {
    font-size: 1.3rem;
    cursor: pointer;
  }

  .iconHelp {
    cursor: help;
  }
  .showFormSearch {
    visibility: visible !important;
    width: 14rem !important;
  }
  .formSearch {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 4rem;
    bottom: 2rem;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    width: 0;
    height: 2rem;
    visibility: hidden;
    transition: ease-in 0.5s;
  }

  .formSearch input,
  .formSearch button {
    background-color: #fff;
    border: none;
    margin: 0 0 0 0;
  }
  .formSearch input {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border-bottom: 2px solid #ff7c34;
    padding: 2%;
    transition: all 0.4s linear;
  }
  .formSearch input:focus {
    border-radius: 25px 2px 2px 25px;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%);
    outline: none;
    border-bottom: 2px solid #ff7c34;
  }
  .formSearch button {
    background-color: transparent;
    height: 100%;
    width: 15%;
    margin: 0.2rem;
    border: none;
  }
  .formSearch button i {
    color: #ffff;
  }

  @media (max-width: 480px) {
    i {
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
    }

    h1 {
      font-size: 1.3rem;
      font-weight: 500;
    }
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }

    .showFormSearch {
      visibility: visible !important;
      width: 16rem !important;
      bottom: 1.6rem;

      height: 3rem;
     
    }
    .formSearch input{
      border-radius: 25px !important;
    }
  }
`;
