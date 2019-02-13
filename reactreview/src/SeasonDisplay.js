import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
    summer: {
        text: "Hit the beach!",
        iconName: "sun icon"
    },
    winter: {
        text: "Chilly...",
        iconName: "snowflake icon"
    }
};

const getSeason = (lat, mon) => {
    if (mon >= 3 && mon <= 8) {
        return (lat > 0) ? "summer" : "winter";
    } else {
        return (lat < 0) ? "summer" : "winter";
    }
};

const SeasonDisplay = (props) => {
    // console.log("latitude:", props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left huge`}></i>
            <h1>
                {text}
            </h1>
            <i className={`${iconName} icon-right huge`}></i>
        </div>
    );
};

export default SeasonDisplay;

