import PropTypes from "prop-types";
import React from "react";

function SupportNewBoard({
    onNewBoard
}) {
    return <div><button onClick={onNewBoard}>New Board</button></div>
}

SupportNewBoard.propTypes = {
    onNewBoard: PropTypes.func
}

export default SupportNewBoard;