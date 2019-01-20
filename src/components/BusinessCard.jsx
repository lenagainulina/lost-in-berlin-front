import React from "react";

const select = (superOnSelected, superOnDeselected, bid) =>(
    ev =>{
        const srcEl = ev.currentTarget;
        ev.stopPropagation();

        if(srcEl.classList.contains("selected")){
            srcEl.innerHTML="&#9825;";
            srcEl.classList.remove("selected");
            superOnDeselected(bid);
        } else {
            srcEl.innerHTML="&#128150;";
            srcEl.classList.add("selected");
            superOnSelected(bid);
        }
    }
);


export default props =>(
    <div className="businessCard">
        <img src={props.data.imageUrl} alt="Profile picture"/>
        <div className="businessProfile">
            <h3>{props.data.name}</h3>
            <h5>{props.data.description}</h5>
        </div>
        <div className="heart" onClick={select(props.onSelected, props.onDeselected, props.data.id)}>&#9825;</div>
    </div>
);
