import React, { useState } from "react";
import PropTypes from "prop-types";


function SupportInputSizeBoard({
    onResizeBoard
}) {

    const [boardWidth, setBoardWidth] = useState(4);
    const [boardHeight, setBoardHeight] = useState(3);

    const handleBoardWidth = (e) => {
        setBoardWidth(e.target.value);
    }

    const handleBoardHeight = (e) => {
        setBoardHeight(e.target.value);
    }

    return <div>
        <label>Board size: </label>
        <input 
            type="number"
            maxLength={2}
            min={2}
            max={20}
            value={boardWidth}
            onChange={handleBoardWidth}
        />
            <label>X</label>
        <input 
            type="number"
            maxLength={2}
            min={2}
            max={20}
            value={boardHeight}
            onChange={handleBoardHeight}
        />
        <button onClick={onResizeBoard(boardWidth, boardHeight)}>Confirm size</button>
    </div>
}

SupportInputSizeBoard.propTypes = {
    onResizeBoard: PropTypes.func
}

export default SupportInputSizeBoard;