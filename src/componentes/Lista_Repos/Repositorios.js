import React from "react";

import { Repo } from "./style";

import { Icon } from '@iconify/react';

import starFilled from '@iconify/icons-ant-design/star-filled';

import gitFork from '@iconify/icons-gg/git-fork';

const Repositorios = (props) => {

    return (

        <Repo>

            <h4>{props.dados.titulo}</h4>
            <p className="user">{props.dados.user}</p>
            <p className="desc">{props.dados.descricao}</p>
            <div>
                <span>
                    <Icon icon={starFilled} style={{ color: '#8D8484' }} />
                    <label className="stars">{props.dados.stars}</label>
                    <Icon icon={gitFork} style={{ color: '#8D8484' }} />
                    <label className="forks">{props.dados.forks}</label>
                </span>
                <p className="language">{props.dados.language}</p>
            </div>

        </Repo>

    )

}


export default Repositorios;