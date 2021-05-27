import React, { useContext } from "react";
import SupportChronometer from "./SupportChronometer";
import SupportInputSizeBoard from "./SupportInputSizeBoard";
import SupportNewBoard from "./SupportNewBoard";
import SupportShowCards from "./SupportShowCards";
import { getCardsMatrix } from "../services/CardTransform";
import { CardContext } from "../context/cardContext";
import { BOARD_SIZE_INITIAL } from "../utils/constants";


function SupportBar() {

    const [, setCardsOptions] = useContext(CardContext);

    const onResizeBoard = (h = 0, w = 0) => () => {
        setCardsOptions(getCardsMatrix(h, w));
    }

    const onNewBoard = () => {
        setCardsOptions(getCardsMatrix(BOARD_SIZE_INITIAL.width, BOARD_SIZE_INITIAL.height));
    }

    return <div>
        <SupportInputSizeBoard onResizeBoard={onResizeBoard}/>
        <SupportChronometer/>
        <SupportNewBoard onNewBoard={onNewBoard}/>
        <SupportShowCards/>
    </div>
}

export default SupportBar;