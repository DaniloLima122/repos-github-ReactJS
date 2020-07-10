import styled from "styled-components";

const border = "none";
const marginTop = 50;


export const Formulario = styled.section`

    height: 40px;
    width: auto;
    margin-top:${marginTop + "px"};
    display:flex;
    
`

export const Input = styled.input`

    width: 382px;
    height: 40px;
    background:#FFFFFF;
    border-radius: 5px 0px 0px 5px;
    color:#8D8484;
    padding:0px 10px;
    border: ${border};

`;
export const Button = styled.button`

    padding-top:6px;
    width: 59px;
    height: 40px;
    background: #186C8F;
    border-radius: 0px 5px 5px 0px;
    border: ${border};
`;