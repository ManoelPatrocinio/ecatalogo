import styled from "styled-components";

export const Container = styled.div`
    display:block;
    width:100%;
    height:100%;

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
  background-color: #F5F5F5;
  padding:5px;
`;

export const SectionContent = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items: center;
   width:80%;
   height:100%;
   background-color: #FFF;
   padding:2% 0%;
   @media(max-width: 480px){
      width: 97%;
   }
   
`;
export const SectionTitle = styled.h1`
   font-size: 1.3rem;
   color: #ff7c34;
   font-weight: 500;
   `;
   
   export const CardContent= styled.div`
   display:flex;
   flex-wrap: wrap;
   width:100%;
   height:auto;
   justify-content:space-around;
   
   .show{
     display: block !important;
   }
  
   
`;
   