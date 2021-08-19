
import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class App extends React.Component {
  constructor() {
    super();
 
    this.state = {
      Rating: 1 
    };
  }
 
  onStarClick(nextValue, prevValue,name) {
    this.setState({Rating: nextValue});
  }
 
  render() {
    const { Rating } = this.state;
    
    return (                
      <div>
        <h2>Rating from state: {Rating}</h2>
        <StarRatingComponent 
          starCount={5} 
          value={Rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
