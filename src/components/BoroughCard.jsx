import { useEffect, useState } from "react";

const emojiMap = {
    "Manhattan": "🍔",
    "Queens": "🍉",
    "Brooklyn": "🥑",
    "Bronx": "🍝",
    "Staten Island": "🛥️"
}

function BoroughCard({borough = "Queens", bgColor = "White"}){
    borough = capitalize(borough);
    const emoji = emojiMap[borough] || "🗽";
    return (
            <div style={{backgroundColor : bgColor}}>
                <h1>Hello from {emoji}{borough}!</h1>
            </div>
    )
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default BoroughCard