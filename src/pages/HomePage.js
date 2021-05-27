import React, {useState} from "react";
import Board from "../components/Board";
import SupportBar from "../components/SupportBar";
import { CardContext } from "../context/cardContext";
import { getCardsMatrix } from "../services/CardTransform";
import { BOARD_SIZE_INITIAL } from "../utils/constants";

export default function HomePage() {

    const stateCards = useState(getCardsMatrix(BOARD_SIZE_INITIAL.width, BOARD_SIZE_INITIAL.height));

    return <CardContext.Provider value={stateCards}>
        <SupportBar/>
        <Board/>
    </CardContext.Provider>
}