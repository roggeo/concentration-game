import React, {useState} from "react";
import Board from "../components/Board";
import SupportBar from "../components/SupportBar";
import { CardContext } from "../context/cardContext";
import { getCardsMatrix } from "../services/CardTransform";

export default function HomePage() {

    const stateCards = useState(getCardsMatrix(4, 3));

    return <CardContext.Provider value={stateCards}>
        <SupportBar/>
        <Board/>
    </CardContext.Provider>
}