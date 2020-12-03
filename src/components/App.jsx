import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import items from "../getItems";



function App() {
    return <div>
        <Header />
        {items.map((item) => {
            return (
                <Card 
                    key={item.id}
                    iconUrl={item.iconUrl}
                    itemName={item.itemName}
                    itemNum={item.itemNum}
                    inDate={item.inDate}
                    outDate={item.outDate}
                    expiration={item.expiration}
                    mainURL={item.mainURL}
                    note={item.note}
                />
            )
        })}
        <Footer />
    </div>
}

export default App;