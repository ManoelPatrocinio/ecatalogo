import styled from "styled-components";

export const Container = styled.div`
  position: relxative;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header{
    width: 100%;
    height: 30%;
    padding: 2% 0 0 0;
  }
  header,article{
    color:  #ff7c34;
    text-align: center;
  }
  article{
    width: 100%;
    height: 25rem;
  }
  h1{
    font-size: 2.25rem;
    font-weight: 600;
  }
  h3{
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1%;
  }
  .imgWrapper{
    width: 100%;
    height: 100%;
  }

 

  @media (max-width: 480px) {
    #copyright,
    #copyright a {
      font-size: 1rem;
    }
    #credits {
      font-size: 0.8rem;
    }
  }
`;
