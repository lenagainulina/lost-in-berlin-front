import React from "react";

export default props =>{
    console.log("PROPS: %o", props);
    return (
        <figure className= "businessCard">
            <img src={props.data.imageUrl} alt="Profile picture"/>
            <figcaption>
                <h1>{props.data.name}</h1>
                <h2>{props.data.description}</h2>
            </figcaption>
        </figure>
    );
}