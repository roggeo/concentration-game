import React, { useContext, useState } from "react";
import SupportChronometer from "./SupportChronometer";
import SupportInputSizeBoard from "./SupportInputSizeBoard";
import SupportNewBoard from "./SupportNewBoard";
import SupportShowCards from "./SupportShowCards";
import { getCardsMatrix } from "../services/CardTransform";
import { CardContext } from "../context/cardContext";
import { BOARD_SIZE_INITIAL } from "../utils/constants";
import { configureSelectionAllCards } from "../services/BoardConfigures";


function SupportBar() {

    const [cardsOptions, setCardsOptions] = useContext(CardContext);
    const [timesShowingCards, setTimesShowingCards] = useState(3);

    const onResizeBoard = (h = 0, w = 0) => () => {
        setCardsOptions(getCardsMatrix(h, w));
    }

    const onNewBoard = () => {
        setCardsOptions(getCardsMatrix(BOARD_SIZE_INITIAL.width, BOARD_SIZE_INITIAL.height));
    }

    const onShowCards = () => {
        if (timesShowingCards == 0) {
            return;
        }
        const cards = configureSelectionAllCards(cardsOptions, true);
        setCardsOptions(cards);
        setTimeout(() => setCardsOptions(cardsOptions), 5000);
        setTimesShowingCards(timesShowingCards-1);
    }

    return <div>
        <SupportInputSizeBoard onResizeBoard={onResizeBoard}/>
        <SupportChronometer/>
        <SupportNewBoard onNewBoard={onNewBoard}/>
        <SupportShowCards onShowCards={onShowCards} times={timesShowingCards}/>
    </div>
}

export default SupportBar;