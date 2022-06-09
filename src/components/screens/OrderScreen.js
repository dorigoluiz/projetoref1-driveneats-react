//STYLES
import styled from "styled-components";

//USES


//INTEGRAÇÕES
import Header from "../tables/Header";
import Footer from "../tables/Footer";
import OrderBody from "../tables/OrderBody";

function OrderScreen () {
    return (
        <Container>
            <Header />
            <OrderBody />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export default OrderScreen