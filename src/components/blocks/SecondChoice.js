import { useState } from "react";
import styled from "styled-components";

//USES
import bebida1 from "../../assets/img/bebida1.jpg";
import bebida2 from "../../assets/img/bebida2.jpg";
import bebida3 from "../../assets/img/bebida3.jpg";

function SecondChoice () {
    const [bebidas, setBebidas] = useState([
        {
            id: "1",
            image: `${bebida1}`,
            name: "VERDEperto",
            desc: "Suco de Limão, que parece de tamarindo mas tem gosto de groselha.",
            price: "R$ 9,99"
        },

        {
            id: "2",
            image: `${bebida2}`,
            name: "VERMELHORr",
            desc: "Suco de groselha, que parece de limão mas tem gosto de tamarindo.",
            price: "R$ 19,99"
        },

        {
            id: "3",
            image: `${bebida3}`,
            name: "VerMARROMmenos",
            desc: "Suco de tamarindo, que parece de groselha mas tem gosto de limão.",
            price: "R$ 29,99"
        },
    ]);
    
    return (
        <>
            <h1>Agora, seu gole!</h1>
            <Table>
                {bebidas.map( (setBebidas, index) =>
                    <Block key={index}>
                        <Contents>
                            <img src={bebidas[index].image} alt="Bebida"/>
                            <p className="titulo">{bebidas[index].name}</p>
                            <p className="desc">{bebidas[index].desc}</p>
                            <p className="preço">{bebidas[index].price}</p>
                        </Contents>
                    </Block>
                )}
            </Table>
        </>
    )
}

const Table = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
`

const Block = styled.div`
    width: 172px;
    height: 250px;
    padding: 15px;
    margin-right: 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;

    img {
        width: 144px;
        height: 87px;
        margin-bottom: 15px;
        object-fit: cover;
    }

    .titulo {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 700;
        color: #333333;
    }

    .desc {
        margin-bottom: 15px;
        font-size: 15px;
        font-weight: 300;
        color: #A6A6A6
    }

    .preço {
        font-size: 16px;
        font-weight: 400px;
        color: #000000;
    }
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
`

export default SecondChoice