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

    let makeStars = (rating) => {
      const roundedRating = Math.floor(rating);
      const starsRating = [];
      for (let i = 0; i < roundedRating; i++) {
        starsRating.push(<i class="fas fa-star stars"></i>);
      }

      const remainderRating = rating % 1;
      if (remainderRating >= 0.5) {
        starsRating.push(<i class="fas fa-star-half stars"></i>)
      }
      return <span>{starsRating}</span>;
    };

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
          <div className="tea-quality-row">
            <div className="rate-description">Tea Quality</div><div className="stars-row">{makeStars(store.tea_quality)}</div>
          </div>
          <div className="boba-quality-row">
            <div className="rate-description">Boba Quality</div><div className="stars-row">{makeStars(store.boba_quality)}</div>
          </div>
          <div className="sweetness-row">
            <div className="rate-description">Sweetness</div><div className="rate-description">{store.sweetness}</div>
          </div>
          <div className="ice-row">
            <div className="rate-description">Ice Level</div><div className="rate-description">{store.ice}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StorePage;
