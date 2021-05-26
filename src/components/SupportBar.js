import React, { useContext } from "react";
import SupportChronometer from "./SupportChronometer";
import SupportInputSizeBoard from "./SupportInputSizeBoard";
import SupportNewBoard from "./SupportNewBoard";
import SupportShowCards from "./SupportShowCards";
import { getCardsMatrix } from "../services/CardTransform";
import { CardContext } from "../context/cardContext";


function SupportBar() {

    const [, setCardsOptions] = useContext(CardContext);

    const onResizeBoard = (h = 0, w = 0) => () => {
        setCardsOptions(getCardsMatrix(h, w));
    }

    return <div>
        <SupportInputSizeBoard onResizeBoard={onResizeBoard}/>
        <SupportChronometer/>
        <SupportNewBoard/>
        <SupportShowCards/>
    </div>
}

export default SupportBar;