import React from "react";

export default props =>(
        <figure className= "businessCard">
            <img src={props.data.imageUrl} alt="Profile picture"/>
            <figcaption>
                <h3>{props.data.name}</h3>
                <h5>{props.data.description}</h5>
            </figcaption>
        </figure>
    );