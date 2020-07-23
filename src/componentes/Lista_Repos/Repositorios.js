import React, { Fragment } from "react";

import { Repo, Semdados, DetalhesResult } from "./style";

import { Icon } from '@iconify/react';

import starFilled from '@iconify/icons-ant-design/star-filled';

import gitFork from '@iconify/icons-gg/git-fork';


const Repositorios = (props) => {


    let result = props.dados.items || "";

    let msg = "";

    if (result.length > 0) {

        msg = `Foram encontrados ${result.length} repositórios`;
        return (

            <Fragment>
                <DetalhesResult>{msg}</DetalhesResult>

                {result.map(repos => {

                    return (

                        <Repo key={repos.id}>

                            <h4>{repos.name}</h4>
                            <p className="user">{repos.owner.login}</p>
                            <p className="desc" title={repos.description || "Repositório sem descrição"}>{repos.description || "Repositório sem descrição"}</p>
                            <div>
                                <span>
                                    <Icon icon={starFilled} style={{ color: '#8D8484' }} />
                                    <label className="stars">{repos.stargazers_count}</label>
                                    <Icon icon={gitFork} style={{ color: '#8D8484' }} />
                                    <label className="forks">{repos.forks_count}</label>
                                </span>
                                <p className="language">{repos.language || "None"}</p>
                            </div>

                        </Repo>
                    )
                })}
            </Fragment>
        )

    } else {

        if (props.pesquisou) {



            msg = "Não foi encontrado nenhum repositório";
            return <DetalhesResult>{msg}</DetalhesResult>;


        } else {
            return <Semdados>Você ainda não fez nenhuma pesquisa</Semdados>
        }
    }
}


export default Repositorios;