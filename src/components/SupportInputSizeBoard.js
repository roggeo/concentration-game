import React from "react";

export default function SupportInputSizeBoard() {
    return <div>
        <label>Board size: </label>
        <input type="number" maxLength={2} min={2} max={20}/>
        <label>X</label>
        <input type="number" maxLength={2} min={2} max={20}/>
        <button>Confirm size</button>
    </div>
}