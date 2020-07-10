import styled from "styled-components";


export const Repo = styled.div`

    width: 349px;
    height: 189.46px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px #D8D8D8;
    margin: 46px 46px 0px 0;
    font-family:sans-serif;
    padding:0px 10px 0px 20px;

    h4{
        color:#186C8F;
        font-size:19px;
    }
    
    p,.language{
        color:#8D8484;
        font-size:12px;
    }

    .language{
        margin-right:10px;
    }



    p.user{
        color:#A4A4A4;
        transform: translateY(-25px);
        font-size:12px;
    }

    p.desc{
        font-size:12px;
        transform: translateY(-10px);
        margin-bottom:35px;
    }

    div{
        display:flex;
        justify-content: space-between;
        align-items:center;
    }

    span{
        display:flex;
        justify-content:center;
        align-items:center;
        
        label.stars,
        label.forks{
            margin: 6px 5px;
            color: #8D8484;
            font-size:12px;
            font-weight:bolder;
        }
    }

`;  