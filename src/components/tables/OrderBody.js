//STYLES
import styled from "styled-components";

//USES


//INTEGRAÇÕES
import FirstChoice from "../blocks/FirstChoice";
import SecondChoice from "../blocks/SecondChoice";
import ThirdChoice from "../blocks/ThirdChoice";


function OrderBody () {
    return (
        <Container>
            <FirstChoice />
            <SecondChoice />
            <ThirdChoice />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100%;

    box-sizing: border-box;
    margin-top: 85px;
    margin-bottom: 110px;

    padding: 10px 25px;
    padding-left: 25px;

    background-color: #E5E5E5;

    h1 {
        padding-top: 20px;
        padding-bottom: 15px;

        font-family: 'Righteous', cursive;
        font-size: 26px;
        color: #333333;
    }
`

export default OrderBody