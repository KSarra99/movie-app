import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Search = ({handleSearch,handleRate}) => {
  const onStarClick=(nextValue, prevValue, name)=> {
    handleRate(nextValue);
  };
    return (
        <div className="searching">
          <h1> US Box Office</h1> 
          <div className="search-container">
         <input className="imp" type="text" placeholder="click here to search"onChange={(e)=>handleSearch(e.target.value)}/>  
          <StarRatingComponent className="stars" count={5} size={24} onStarClick={onStarClick} /* on icon click handler */
/>
          </div> 
        </div>
    )
}

export default Search
