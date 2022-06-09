import styled from "styled-components"
import logoSite from "../../assets/img/logo.png"

import { useNavigate } from "react-router-dom"
import { useState } from "react" 


    function Init () {
        const [user, setUser] = useState({
            name:"",
            address:""
        })

        const navigate = useNavigate();

        function coletarDados(e) {
            setUser({
                ...user,
                [e.target.name]: e.target.value,
            })
        }

        function LogIn (e) {
            e.preventDefault();
            navigate("/pedido")
        }

        return (
            <Container>
                <img src={logoSite} alt="logoSite"/>

                <form onSubmit={LogIn}>
                    <h2>Digite seu nome:</h2>
                    <input required type="text" placeholder="Nome Sobrenome" name="name" value={user.name} onChange={coletarDados}/>
                    <h2>Digite seu endereço:</h2>
                    <input required type="text" placeholder="R. Minha Rua, 9999 - Meu Bairro" name="address" value={user.address} onChange={coletarDados}/> 
                    <button type="submit">Entrar</button>
                </form>

            </Container>
        )
    }

function FirstScreen () {
    return (
        <Init />
    )
}

    const Container = styled.div`
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #CF2B2B;

        font-family: 'Roboto', sans-serif;

        img {
            width: 300px;
            margin: 50px 0;
        }

        h2 {
            margin-top: 5px;
            margin-bottom: 10px;
            font-size: 23px;
            color: white;
        }

        form {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        input {
            width: 280px;
            height: 45px;
            padding-left: 10px;
            margin-bottom: 6px;

            background-color: ${ props => props.disabled ? "#F2F2F2" : "#FFFFFF"};
            border: 2px solid #b52626;
            border-radius: 5px;

            font-weight: 400;
            font-size: 20px;
            color: #737373;
            
            outline: none;

            ::placeholder {
                font-size: 16px;
                color: #DBDBDB;
            }
        }

    button {
        width: 280px;
        height: 45px;

        margin-top: 175px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 21px;
        font-weight: 400;
        font-style: bold;
        color: #FFFFFF;

        border: 1px solid #801919;
        border-radius: 5px;

        background-color: #b52626;
        text-decoration: none;

        cursor: pointer;
    }

    a:Link {
        text-decoration: none;
        color: inherit;
    }
    `

export default FirstScreen