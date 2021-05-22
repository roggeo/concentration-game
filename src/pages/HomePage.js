import React from "react";
import Board from "../components/Board";
import SupportBar from "../components/SupportBar";
import { cardsOptions } from "../services/cards";

export default function HomePage() {
    return <React.Fragment>
        <SupportBar/>
        <Board cardsOriginal={cardsOptions()}/>
    </React.Fragment>
}