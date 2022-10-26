import React, { useState } from 'react'
import BeerDetails from './Components/BeerDetails/BeerDetails'
import CardList from './Components/CardList/CardList'
import SearchBar from './Components/SearchBar/SearchBar'
import beers from "./data/beers"

const beersArr= beers.filter(beer => beer.image_url).slice(0, 9);

// Filter beers using search
const filterBeers = (beersArr, query) => {
  if (!query) {
      return beersArr;
  }

  return beersArr.filter((beer) => {
      const beerName = beer.name.toLowerCase();
      return beerName.includes(query);
  });
};

   
const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const filteredBeers = filterBeers(beers, query);

  return (
    <div>
      <div className='SearchBar'>
        <SearchBar Title="Search" />
      </div>
      <ul>
                {filteredBeers.map(beer => (
                    <li key={beer.image_url}>{beer.name}</li>
                ))}
            </ul>
      <div className="all-beers">
        <BeerDetails title="Explore" beersArr={beersArr.slice(0,beersArr.length)}/>
      </div>
    </div>
  )
}
    

export default App