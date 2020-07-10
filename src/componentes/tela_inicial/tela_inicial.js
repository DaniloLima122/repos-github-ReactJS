import React from "react";

import { Body } from "./global_style";

import { Header, Dashboard, ListaRepositorios } from "./style";

import { Icon } from '@iconify/react';

import githubFilled from '@iconify/icons-ant-design/github-filled';

import Form from "../Form/Form";

import Repositorios from "../Lista_Repos/Repositorios";

const estilo_icon_fundo = {

    width: "549px",
    height: "532.85px",
    color: "#ebebeb",
    position: "absolute",
    background: "linear-gradient(180deg, #ECECEC 0%, rgba(227, 227, 227, 0) 100%);",
    right: "0px"
}



const TelaInicial = () => {

    const data = {

        titulo: "dashboard-flexbox",
        user: "DaniloLima122",
        descricao: "Dashboard construído com HTML e  CSS Flexbox Layout",
        stars: 543,
        forks: 125,
        language: "CSS"
    };

    return (
        <>
            <Body />
            <Icon icon={githubFilled} style={estilo_icon_fundo} />
            <Dashboard>
                <Header>
                    <h1>Repositórios do <span>GitHub</span></h1>
                    <p>Para pesquisar um repositório digite no campo abaixo e pressione o botão</p>
                </Header>
                <Form />

                <ListaRepositorios>
                    <Repositorios dados={data} />
                    <Repositorios dados={data} />
                </ListaRepositorios>
                

           </Dashboard> 
                

        </>
    )

}


export default TelaInicial;