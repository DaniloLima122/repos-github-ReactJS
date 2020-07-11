import React from "react";

import { Repo, Semdados } from "./style";

import { Icon } from '@iconify/react';

import starFilled from '@iconify/icons-ant-design/star-filled';

import gitFork from '@iconify/icons-gg/git-fork';


const Repositorios = (props) => {


    let result = props.dados.items || "";

    if (result.length > 0) {

        return (

            result.map(repos => {

                return (

                    <Repo key={repos.id}>
                        <h4>{repos.name}</h4>
                        <p className="user">{repos.owner.login}</p>
                        <p className="desc" title={repos.description || "Sem descrição"}>{repos.description}</p>
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
            })
        )

    } else {

        if (props.pesquisou)

            return <Semdados>Nenhum resultado encontrado</Semdados>
            
        else
            return <Semdados>Você ainda não fez nenhuma pesquisa</Semdados>
    }
}


export default Repositorios;