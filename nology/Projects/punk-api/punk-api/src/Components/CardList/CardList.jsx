import React from 'react'
import CardList from "./CardList.scss"

const BeerCards = (props) => {
    const { name, beerArr } = props;

   const CardListJSX = beerArr.map((beers, index) => (
    <img 
    className='Card-List__img'
    src={beers.image_url}
    alt={beers.name}
    />
      ));
    return (
      <>
        <div className='Card-List'>{CardListJSX}</div>
        <h3>{name}</h3>
      </>
  );
};

export default CardList