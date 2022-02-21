import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  .link-top {
    position: fixed;
    right: 3rem;
    bottom: 2rem;
    width: 3rem;
    height: 3rem;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff7c34;
    font-size: 2rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      font-size: 2.5rem;
      text-shadow: 1px 1px 1px #cecece;
    }
  }

  @media (max-width: 480px) {
    .link-top {
      width: 2.5rem;
      height: 2.5rem;
      background-color:#ff7c34d9;
      color: #fff;
      border-radius: 50%;
      right: 2% !important;
      bottom: 1.5rem !important;
      font-size: 1.5rem;
      &:hover {
        font-size: 1.7rem;
        text-shadow: 1px 1px 1px #cecece;
      }
    }
  }
`;

export const Fixed = styled.div`
  position: sticky;
  width: 100%;
  height: 8.2rem;
  top: 0%;
`;
export const Main = styled.main`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 5px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  background-color: #fff;
  padding: 2% 0%;
  @media (max-width: 480px) {
    width: 97%;
  }
`;
export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  max-height: 1.875rem;

  h1 {
    font-size: 1.3rem;
    color: #ff7c34;
    font-weight: 500;
    margin: 0 2%;
  }

  .titleLine {
    width: 12.188rem;
    max-width: 30%;
    height: 2px;
    background-color: #ff7c34;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  justify-content: space-around;
`;
