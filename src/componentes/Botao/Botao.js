import React from "react";

import {Button as Botao}  from "./style";

const Button = ({onClick,children}) => (

    <Botao onClick={onClick}>{children}</Botao>
)


export default Button;