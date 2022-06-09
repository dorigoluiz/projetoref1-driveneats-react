//STYLES
import { useState } from "react";
import styled from "styled-components";

//USES
import doce1 from "../../assets/img/doce1.jpg"
import doce2 from "../../assets/img/doce2.jpg"

function ThirdChoice () {
    const [doces, setDoces] = useState([
        {
            id: "1",
            image: `${doce1}`,
            name: "Que me imbrulhé",
            desc: "Um delicioso Crème brûlée especial.",
            price: "R$ 15,99"
        },

        {
            id: "2",
            image: `${doce2}`,
            name: "Polengrito",
            desc: "Doce especial vindo direto da transilvânia.",
            price: "R$ 19,99"
        },
    ]);
    
    return (
        <>
            <h1>Por fim, seu docin! (Rimou)</h1>
            <Table>
                {doces.map( (setDoces, index) =>
                    <Block key={index}>
                        <Contents>
                            <img src={doces[index].image} alt="Doce"/>
                            <p className="titulo">{doces[index].name}</p>
                            <p className="desc">{doces[index].desc}</p>
                            <p className="preço">{doces[index].price}</p>
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

export default ThirdChoice