import React from "react";
import Board from "../components/Board";
import { cardsOptions } from "../services/cards";

export default function HomePage() {
    return <React.Fragment>
        <Board cardsOriginal={cardsOptions()}/>
    </React.Fragment>
}