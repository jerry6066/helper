import React from "react"

function Bottomcard(props) {
    return <div>
        <div className="bottomcard-top">
            <div className="item-info">
                <p>In Date</p>
                <p>{props.inDate}</p>
            </div>
            <div className="item-info">
                <p>Out Date</p>
                <p>{props.outDate}</p>
            </div>
            <div className="item-info">
                <p>Expiration</p>
                <p>{props.expiration} days</p>
            </div>   
        </div>
        <div className="bottomcard-bottom">
            <div className="image-notes">
                <img className="main-img" src={props.mainURL}/>
            </div>
            <div className="image-notes">
                <p className="char-note">Notes:</p>
                <p className="item-note">{props.note}</p>
            </div>
        </div>
    </div>
}

export default Bottomcard;