import React from "react";

import { Repo, Semdados } from "./style";

import { Icon } from '@iconify/react';

import starFilled from '@iconify/icons-ant-design/star-filled';

import gitFork from '@iconify/icons-gg/git-fork';


const Repositorios = (props) => {

    
    let mensagem = "Você ainda não fez nenhuma pesquisa";
    
    if (props.dados.length > 0) {
    console.log(props.dados.items);

        return (

            props.dados.items.map(repos => {

                return (

                    <Repo key={repos.id}>
                        <h4>{repos.name}</h4>
                        <p className="user">{repos.owner.login}</p>
                        <p className="desc" title={repos.description}>{repos.description}</p>
                        <div>
                            <span>
                                <Icon icon={starFilled} style={{ color: '#8D8484' }} />
                                <label className="stars">{repos.stars}</label>
                                <Icon icon={gitFork} style={{ color: '#8D8484' }} />
                                <label className="forks">{repos.forks_count}</label>
                            </span>
                            <p className="language">{repos.language}</p>
                        </div>

                    </Repo>
                )
            })
        )

    } else {

    return <Semdados>{mensagem}</Semdados>
    }
}


export default Repositorios;