import { useEffect, useState } from "react";

function BoroughCard({borough = "Queens", bgColor = "White"}){
    return (
            <div style={{backgroundColor : bgColor}}>
                <h1>Hello from {borough}!</h1>
            </div>
    )
}

export default BoroughCard