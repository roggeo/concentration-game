import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Card from "./Card";


function configureSelectedCard(cardsPlaying, id) {
    const filterCards = [];

    cardsPlaying.forEach((cards) => {
        const filterCard = [];
        cards.forEach((card) => {
            const c = {...card};
            if (c.id == id) {
                c.selected = true;
            }
            filterCard.push(c);
        });
        filterCards.push(filterCard);
    });

    return filterCards;
}

function configureCardsMatched(cardsPlaying, ids = []) {
    const filterCards = [];

    cardsPlaying.forEach((cards) => {
        const filterCard = [];
        cards.forEach((card) => {
            const c = {...card};
            if (ids.includes(c.id)) {
                c.selected = false;
                c.done = true;
            }
            filterCard.push(c);
        });
        filterCards.push(filterCard);
    });

    return filterCards;
}

function restoreCards(cardsPlaying, ids = []) {
    const filterCards = [];

    cardsPlaying.forEach((cards) => {
        const filterCard = [];
        cards.forEach((card) => {
            const c = {...card};
            if (ids.includes(c.id)) {
                c.selected = false;
            }
            filterCard.push(c);
        });
        filterCards.push(filterCard);
    });

    return filterCards;
}


function Board({
    cardsOriginal
}) {

    const [cardSelected, setCardSelected] = useState(null);
    const [cardsPlaying, setCardsPlaying] = useState([]);

    useEffect(() => {
        setCardsPlaying(cardsOriginal);
    }, []);


    const resetCardsNoMatched = (cards) => {
        if (cards.length == 0) {
            return null;
        }
        setTimeout(() => setCardsPlaying(restoreCards(cardsPlaying, cards)), 700);
    }

    const setCardsMatching = (cards) => {
        setCardsPlaying(configureCardsMatched(cardsPlaying, cards));
    }

    const onClinkCard = (cardBoard) => (e) => {
        e.preventDefault();
        
        setCardsPlaying(configureSelectedCard(cardsPlaying, cardBoard.id));

        if (cardSelected === null) {
            setCardSelected(cardBoard);
        } else {
            if (cardSelected.image == cardBoard.image) {
                setCardsMatching([cardBoard.id, cardSelected.id]);
            } else {
                resetCardsNoMatched([cardBoard.id, cardSelected.id]);
            }

            setCardSelected(null);
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

Board.propTypes = {
    cardsOriginal: PropTypes.array
}

export default Board;