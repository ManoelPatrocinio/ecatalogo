import styled from "styled-components";
import Header_Background from "../../assets/images/Header_background.jpg"

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-image: url(${Header_Background});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
    
   
    color: #fff;
    z-index: 0;

    &:before{
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    #headerTitle{
        width: 14rem;
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }
    @media (max-width: 680px) and (orientation: landscape) { 
        width: 100%;
        height: 4rem;
     }

` ;
export const ItemHeaderContent = styled.div`
    width: 5rem;
    text-align: center;

   
    h1{
    font-size: 1.375rem;
    font-weight:500;    
    }
    h3{
    font-size: 1.125rem;
    font-weight:400;
    }
    i{
        font-size:1.3rem;
        cursor:pointer;
    }

    .iconHelp{
        cursor: help;
    }

    
    @media(max-width:480px){
    
        i{
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
        }
       
         h1{
            font-size: 1.3rem;
            font-weight:500;
        }
        h3{
            font-size: 1rem;
            font-weight:400;
        }
    }

` ;