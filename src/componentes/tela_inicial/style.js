import styled from "styled-components";


const border = "none";
const marginTop = 50;


export const Formulario = styled.section`

    height: 40px;
    width: auto;
    margin-top:${marginTop + "px"};
    display:flex;

    input{
        width: 382px;
        height: 40px;
        background:#FFFFFF;
        border-radius: 5px 0px 0px 5px;
        color:#8D8484;
        padding:0px 10px;
        border: ${border};
        transition:.5s;
        box-shadow: 0 0 2px #aaa;

        :focus{
            box-shadow: 0 0 2px #2196f3;
        }   
    } 

    button{
        padding-top:6px;
        width: 59px;
        height: 40px;
        background: #186C8F;
        border-radius: 0px 5px 5px 0px;
        border: none;
        transition:.5s;
        cursor: pointer;
        outline:none;
        

        :hover{
            background:#165b78;
        }
    }

`;


export const ListaRepositorios = styled.div`

    display: flex;
    flex-wrap:wrap;
`;


export const Dashboard = styled.div`

    width:800px;
    margin: 50px 143px;
    position:absolute;
    z-index:100;
`;


export const Header = styled.header`

h1,p{
    
    color:#8D8484;
    font-family: sans-serif;
    font-weight: 400;

}

h1{
    font-size: 48px;
    line-height: 56px;
    width: 347px;
    height: 112px;

    span{

        color:#186C8F;
    }
}

p{
    line-height: 21px;
    
}

`;

