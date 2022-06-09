//STYLES
import styled from "styled-components";
import logoSite from "../../assets/img/logo.png";

//USES


//INTEGRAÇÕES


function Header () {
    return (
        <Container>
            <img src={logoSite} alt="logoSite"/>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 85px;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #CF2B2B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
        height: 85px;
        padding: 10px;
    }
`

export default Header