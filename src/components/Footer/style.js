import styled from "styled-components";

export const Container = styled.div`
  position: relxative;
  width: 100%;
  height: 6rem;

  text-align: center;
  p,
  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: #ff7c34;
  }

  @media (max-width: 480px) {
  }
`;

export const IconContent = styled.div`
  position: relative;
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1% 0 0 0;
  .linkContactFooter {
    margin: 0 1%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 60%;

    padding: 3% 0 3% 0;
    .linkContactFooter {
      width: 35px;
    height: 35px;
      margin: 0 1%;
    }
  }
`;
