import React from 'react'
// import { useHistory } from 'react-router-dom';

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search beer list</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search beer list"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;