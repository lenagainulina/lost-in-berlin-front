import React from "react";
/*
export default props =>(
        <figure className= "businessCard">
            <img src={props.data.imageUrl} alt="Profile picture"/>
            <figcaption>
                <h4>{props.data.name}</h4>
                <h5>{props.data.description}</h5>
            </figcaption>
        </figure>
    );
    */

const select = ev =>{
    const srcEl = ev.currentTarget;
    ev.stopPropagation();

    if(srcEl.classList.contains("selected")){
        srcEl.innerHTML="&#9825;";
        srcEl.classList.remove("selected")
    } else {
        srcEl.innerHTML="&#128150;";
        srcEl.classList.add("selected")
    }
};


export default props =>(
    <div className="businessCard">
        <img src={props.data.imageUrl} alt="Profile picture"/>
        <div className="businessProfile">
            <h3>{props.data.name}</h3>
            <h5>{props.data.description}</h5>
        </div>
        <div className="heart" onClick={select}>&#9825;</div>
    </div>
);
