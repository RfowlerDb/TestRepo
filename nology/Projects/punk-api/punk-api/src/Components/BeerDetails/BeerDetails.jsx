import React from 'react';
import "./BeerDetails.scss";

const BeerDetails = (props) => {
    const {title, beersArr} = props;
    console.log(title);
    console.log(beersArr);

   

    const cardListJSX = beersArr.map((beer, idx, shortenedText) => 
    (
        <div className="beer-details" >
          <h2 className="beer-name">{beer.name}</h2>
          <p className="beer-tagline">"{beer.tagline}"</p>
          <div className="beer-imgbox">
            <img
                className="beer-details__img"
                src={beer.image_url}
                alt={beer.name}
                key={title+(idx+1)}
            />
          </div>
          <div className="beer-stats">
            <div className="stat-item">ABV: {beer.abv}</div>
            <div className="stat-item">First Brewed In: {beer.first_brewed}</div>
            <div className="stat-item">PH: {beer.ph}</div>
          </div>
          <p className="beer-desc">{beer.description}</p>
          {/* <p className="beer-desc">{shortenedText}</p> */}
        </div>
    ));
    console.log(cardListJSX);
  return (
    <>
        <div className="beer-details">{cardListJSX}</div>
    </>
  );
  console.log ({cardListJSX});
};


export default BeerDetails