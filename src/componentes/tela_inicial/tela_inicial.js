import React, { useState } from "react";

import { Body } from "./global_style";

import { Header, Dashboard, ListaRepositorios, Formulario } from "./style";

import Button from "../Botao/Botao";

import Input from "../Input/Input";

import { Icon } from '@iconify/react';

import githubFilled from '@iconify/icons-ant-design/github-filled';

import Repositorios from "../Lista_Repos/Repositorios";

import searchOutlined from '@iconify/icons-ant-design/search-outlined';


import { busca_repositorios } from "../PesquisaRepos/BuscaRepositorios";


const estilo_icon_fundo = {

    width: "549px",
    height: "532.85px",
    color: "#ebebeb",
    position: "absolute",
    right: "0px"
}

const TelaInicial = () => {

    const [campo, setCampo] = useState("");

    const [listaRepos, setlistaRepos] = useState("");

    const [pesquisou, setPesquisou] = useState(false);

    const handleChange = e => {

        setCampo(e.target.value);
    }

    const submit = () => {

        busca_repositorios(campo,setlistaRepos,setPesquisou)
    }

    return (
        <>
            <Body />
            <Icon icon={githubFilled} style={estilo_icon_fundo} />
            <Dashboard>
                <Header>
                    <h1>Repositórios do <span>GitHub</span></h1>
                    <p>Para pesquisar um repositório digite no campo abaixo e pressione o botão</p>
                </Header>
                <Formulario>
                    <Input type="text" value={campo} onChange={handleChange} />
                    <Button onClick={submit}>
                        <Icon icon={searchOutlined} style={{ color: '#fff', width: "25px", height: "25px" }} />
                    </Button>
                </Formulario>

                <ListaRepositorios>
                    <Repositorios dados={listaRepos} pesquisou={pesquisou} />
                </ListaRepositorios>

            </Dashboard>

        </>
    )

}

export default TelaInicial;