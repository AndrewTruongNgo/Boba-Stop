import React from 'react';
import styles from './styles/StorePage.css'

class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { store } = this.props;

    let makeStars = () => {
      let rating = this.props.store.tea_quality;
      let roundedRating = Math.floor(rating);
      let stars = [];
      for (let i = 0; i < roundedRating; i++) {
        stars.push(<i class="fas fa-star"></i>);
      }

      const remainder = rating % 1;
      if (remainder >= 0.5) {
        stars.push(<i class="fas fa-star-half"></i>)
      }
      return <span>{stars}</span>;
    }

    return (
      <div>
        <div className="store-name">{store.name}</div>
        <div className="store-header">
          <span className="store-price">{store.price}</span>
          <span className="store-location">{store.location}</span>
        </div>
        <div className="image-container">
          <img src={store.image} className="store-page-image"></img>
        </div>
        <div className="store-details">
          <span>Tea Quality</span><span>{makeStars()}</span>
        </div>
      </div>
    );
  }
}

export default StorePage;
