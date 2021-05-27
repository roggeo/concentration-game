import PropTypes from "prop-types";
import React from "react";

function SupportShowCards({
    onShowCards,
    times
}) {
    return <div><button onClick={onShowCards} disabled={times==0 ? true : false}>Show Cards ({times})</button></div>
}

SupportShowCards.propTypes = {
    onShowCards: PropTypes.func,
    times: PropTypes.number
} 

export default SupportShowCards;