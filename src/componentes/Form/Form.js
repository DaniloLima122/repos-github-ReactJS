import React from "react";

import { Icon } from '@iconify/react';

import searchOutlined from '@iconify/icons-ant-design/search-outlined';

import {Formulario,Input,Button} from "./style";

const Form = () =>{

    return(

        <Formulario>
            <Input type="text"/>
            <Button>
                <Icon icon={searchOutlined} style={{color: '#fff',width:"25px", height:"25px"}} />
            </Button>
        </Formulario>

    )

}

export default Form;