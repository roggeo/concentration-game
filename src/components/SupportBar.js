import React, { useContext, useEffect, useState } from "react";
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
    const [liveTimer, setLiveTimer] = useState(0);

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
        setTimeout(() => setCardsOptions(cardsOptions), 1000);
        setTimesShowingCards(timesShowingCards-1);
    }

    useEffect(() => {
        const t = setTimeout(() => {
            setLiveTimer(liveTimer + 1);
        }, 1000);
        return () => {
            clearTimeout(t);
        }
    }, [liveTimer]);

    return <div id="ContainerSupportBar">
        <SupportChronometer liveTimer={liveTimer}/>
        <SupportInputSizeBoard onResizeBoard={onResizeBoard}/>
        <SupportNewBoard onNewBoard={onNewBoard}/>
        <SupportShowCards onShowCards={onShowCards} times={timesShowingCards}/>
    </div>
}

export default SupportBar;