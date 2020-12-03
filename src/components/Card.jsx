import React, { useState } from "react";
import Topcard from "./Topcard";
import Bottomcard from "./Bottomcard";
import Cardbutton from "./Cardbutton";





function Card(props) {
    const [isClicked, setClick] = useState(false);

    function Open() {
        setClick(true);
    };

    function Close() {
        setClick(false);
    };

    return <div className="card" onDoubleClick={Open}>
        {isClicked && <button style={{marginButton:"5px"}} className="card-button" onClick={Close}>Close</button>}
        <Topcard 
            iconUrl={props.iconUrl}
            itemName={props.itemName}
            itemNum={props.itemNum}
        />
        <hr className="card-hr"></hr>
        {isClicked && <Bottomcard 
            inDate={props.inDate}
            outDate={props.outDate}
            expiration={props.expiration}
            mainURL={props.mainURL}
            note={props.note}
        />}
        
        {isClicked && <Cardbutton />}
    </div>
};

export default Card;