import React from "react";
const Card =({name, age, movie, funfact, image}) =>
{
    return (
        <div className="tc grow bg-light-pink br3 pa3 ma2 dib bw2 shawdow-5 mw9">
        <img alt ='princess' src ={image} width= "200" height ="200"/>
        <div >
            <h2><strong>Name:</strong> {name}</h2>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Movie:</strong> {movie}</p>
            <p><strong>Fun Fact:</strong> {funfact}</p>
        </div>
        </div>
    )
}

export default Card;