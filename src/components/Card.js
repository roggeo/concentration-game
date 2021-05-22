import React from "react";
import PropTypes from "prop-types";
import cardImageInitial from "./../assets/imgs/card_empty.png";
import cardImageDone from "./../assets/imgs/card_done.png";

function Card({
    id,
    done,
    image,
    selected,
    onClinkCard,
}) {

    const cardBoard = {
        id, selected, image
    }

    const getCardImage = () => {
        if (done === true) {
            return <img src={cardImageDone} alt="card done"/>;
        }
        return <img src={selected === false ? cardImageInitial : image} alt="card initial"/>;
    }

    return <div className="card" onClick={onClinkCard(cardBoard)}>{getCardImage()}</div>;
}

Card.propTypes = {
    id: PropTypes.number,
    done: PropTypes.bool,
    image: PropTypes.string,
    selected: PropTypes.bool,
    onClinkCard: PropTypes.func
}
  
export default Card;