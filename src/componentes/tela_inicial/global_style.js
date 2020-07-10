import { createGlobalStyle } from "styled-components";


export const Body = createGlobalStyle`

    *{
        outline:none;
        box-sizing:border-box;
    }

    body{
        background-color: #F2F2F2;
        margin:0;
        padding:0;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
     background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
