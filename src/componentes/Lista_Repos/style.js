import styled, { keyframes } from "styled-components";


const animacaoRepo = keyframes`
  0% {
    opacity:0;
    transform: translateY(10px);
  }
  100% {
    opacity:1;
    transform: translateY(0);
  }
`;


export const Semdados = styled.h3`
    
    color: #aaa;
    text-align:center;
    font-family: sans-serif;
    margin: 15% 25%;
    
    
`

export const Repo = styled.div`

    width: 349px;
    height: 189.46px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px #D8D8D8;
    margin: 46px 46px 0px 0;
    font-family:sans-serif;
    padding:0px 10px 0px 20px;
    transition:.2s;
    opacity:0;
    animation ${animacaoRepo} .5s ease-in forwards;

    :hover{

        background: #f7f7f7;
    }


    p,h4,.language{
        cursor: context-menu;
    }

    h4{
        color:#186C8F;
        font-size:19px;
        max-width: 90%;
        word-wrap: break-word;
    }

  
    p,.language{
        color:#8D8484;
        font-size:12px;
    }

    .language{
        margin-right:10px;
    }



    p.user{
        color:#A4A4A4;
        transform: translateY(-25px);
        font-size:12px;
    }

    p.desc{
        font-size:12px;
        max-height:55px;
        overflow:hidden;
        padding: 0 7px 0 0;
        transform: translateY(-10px);
        margin-bottom:35px;
        text-align:left;
    }

    div{
        display:flex;
        justify-content: space-between;
        align-items:center;
        position:absolute;
        bottom:5px;
        width:92%;
    }

    span{
        display:flex;
        justify-content:center;
        align-items:center;
        
        label.stars,
        label.forks{
            margin: 6px 5px;
            color: #8D8484;
            font-size:12px;
            font-weight:bolder;
        }
    }

`