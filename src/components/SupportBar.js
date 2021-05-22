import React from "react";
import SupportChronometer from "./SupportChronometer";
import SupportInputSizeBoard from "./SupportInputSizeBoard";
import SupportNewBoard from "./SupportNewBoard";
import SupportShowCards from "./SupportShowCards";

export default function SupportBar() {
    return <div>
        <SupportInputSizeBoard/>
        <SupportChronometer/>
        <SupportNewBoard/>
        <SupportShowCards/>
    </div>
}