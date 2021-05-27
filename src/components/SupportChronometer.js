import PropTypes from "prop-types";
import React from "react";
import secondsToString from "../utils/secondsToString";

function SupportChronometer({
    liveTimer
}) {
    return <div className="container-chronometer">
        <span>{secondsToString(liveTimer)}</span>
    </div>
}

SupportChronometer.propTypes = {
    liveTimer: PropTypes.number
}

export default  SupportChronometer;