//STYLES
import styled from "styled-components";

//USES
import { useState } from "react";


//INTEGRAÇÕES

function Footer () {
    const [complete, setComplete] = useState(false);

    return (
        <Container complete={complete}>
            <button type="submit">{complete ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}</button>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 110px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    left: 0;

    background-color: #FFFFFF;
    box-shadow: 0px 1px 4px 4px rgba(0, 0, 0, 0.25);

    button {
        width: 364px;
        height: 61px;
        padding: 5px 75px;

        background-color: ${ props => props.complete ? "#32B72F" : "#CBCBCB"};
        border-radius: 50px;

        font-size: 20px;
        text-align: center;
        color: #FFFFFF;

        border: none;
    }
`

export default Footer