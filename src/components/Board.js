import React, { useContext, useState } from "react";
import { CardContext } from "../context/cardContext";
import {
    restoreCards,
    configureSelectedCard,
    configureCardsMatched
} from "./../services/BoardConfigures";
import Card from "./Card";


function Board() {

    const [cardSelected, setCardSelected] = useState(null);
    const [cardsPlaying, setCardsPlaying] = useContext(CardContext);

    const resetCardsNoMatched = (cards) => {
        if (cards.length == 0) {
            return null;
        }
        setTimeout(() => setCardsPlaying(restoreCards(cardsPlaying, cards)), 700);
    }

    const setCardsMatching = (cards) => {
        setCardsPlaying(configureCardsMatched(cardsPlaying, cards));
    }

    const prepareCardOverSelection = (cardBoard) => {
        if (cardSelected.id === cardBoard.id) {
            return;
        }
        if (cardSelected.image == cardBoard.image) {
            setCardsMatching([cardBoard.id, cardSelected.id]);
        } else {
            resetCardsNoMatched([cardBoard.id, cardSelected.id]);
        }
        setCardSelected(null);
    }

    const onClinkCard = (cardBoard) => (e) => {
        e.preventDefault();
        
        setCardsPlaying(configureSelectedCard(cardsPlaying, cardBoard.id));

        if (cardSelected === null) {
            setCardSelected(cardBoard);
        } else {
            prepareCardOverSelection(cardBoard);
        }
    }

    const renderCardsCol = (card, index) => {
        return <Card key={index} {...card} id={card.id} onClinkCard={onClinkCard}/>
    }

    const renderCardsRow = (cardsRow, index) => {
        return <div className="cards-row" key={index}>{cardsRow.map(renderCardsCol)}</div>
    }

    return <div id="ContainerBoard">
        {cardsPlaying.map(renderCardsRow)}
    </div>
}

export default Board;