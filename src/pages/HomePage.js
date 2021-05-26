import React, { useContext } from "react";
import Board from "../components/Board";
import SupportBar from "../components/SupportBar";
import { CardContext } from "../context/cardContext";


export default function HomePage() {

    const cardsOptions = useContext(CardContext);

    return <React.Fragment>
        <SupportBar/>
        <Board cardsOriginal={cardsOptions}/>
    </React.Fragment>
}