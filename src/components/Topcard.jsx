import React from "react";

function Topcard(props) {
    return <div className="topcard">
        <div className="top-item">
            <img className="topcard-img" src={props.iconUrl}/>
        </div>
        <div className="top-item item-name">
            <span>{props.itemName}</span> 
        </div>
        <div className="top-item item-num">
            <span>{props.itemNum}</span>
            <span className="char-left"> left</span>
        </div>
    </div>
};

export default Topcard;