//STYLES
import { useState } from "react";
import styled from "styled-components";

//USES
import prato1 from "../../assets/img/prato1.png"
import prato2 from "../../assets/img/prato2.png"
import prato3 from "../../assets/img/prato3.png"
import prato4 from "../../assets/img/prato4.png"

function FirstChoice () {
    const [pratos, setPratos] = useState([
        {
            id: "1",
            image: `${prato1}`,
            name: "Dev. Junior",
            desc: "Apenas um delicioso Hamb",
            price: "R$ 9,99"
        },

        {
            id: "2",
            image: `${prato2}`,
            name: "Dev. Pleno",
            desc: "Apenas um delicioso burg",
            price: "R$ 19,99"
        },

        {
            id: "3",
            image: `${prato3}`,
            name: "Dev. Senior",
            desc: "Um saborozíssimo Hamburger",
            price: "R$ 29,99"
        },

        {
            id: "4",
            image: `${prato4}`,
            name: "Dev. Mestre",
            desc: "A imagem fala mais que mil códigos!",
            price: "R$ 39,99"
        }
    ]);
    
    return (
        <>
            <h1>Primeiro, seu rango!</h1>
            <Table>
                {pratos.map( (setPratos, index) =>
                    <Block key={index}>
                        <Contents>
                            <img src={pratos[index].image} alt="Prato"/>
                            <p className="titulo">{pratos[index].name}</p>
                            <p className="desc">{pratos[index].desc}</p>
                            <p className="preço">{pratos[index].price}</p>
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
    height: 216px;
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

export default FirstChoice