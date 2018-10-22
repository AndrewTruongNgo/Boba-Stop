import React from 'react';
import styles from './styles/StorePage.css';
import axios from 'axios';
import Comments from './Comments.jsx';

class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: null,
      totalLikes: null,
      comments: [],
    };
    this.likedClick = this.likedClick.bind(this);
  }

  componentDidMount() {
    const { store } = this.props;
    axios.get(`/stores/${store.store_id}`)
      .then((results) => {
        this.setState({
          totalLikes: results.data[0].likes,
          liked: results.data[0].liked,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`/stores/comments/${store.store_id}`)
      .then((results) => {
        this.setState({
          comments: results.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  likedClick() {
    const { liked, totalLikes } = this.state;
    const { store } = this.props;
    if (!liked) {
      axios.put('/update-likes', {
        storeID: store.store_id,
        likes: totalLikes + 1,
        liked: !liked,
      })
        .then(() => {
          this.setState({
            totalLikes: totalLikes + 1,
            liked: !liked,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios.put('/update-likes', {
        storeID: store.store_id,
        likes: totalLikes - 1,
        liked: !liked,
      })
        .then(() => {
          this.setState({
            totalLikes: totalLikes - 1,
            liked: !liked,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }


  render() {
    const { liked, totalLikes, comments } = this.state;
    const { store } = this.props;

    const makeStars = (rating) => {
      const roundedRating = Math.floor(rating);
      const starsRating = [];
      for (let i = 0; i < roundedRating; i++) {
        starsRating.push(<i key={i} className="fas fa-star stars"></i>);
      }
      const remainderRating = rating % 1;
      if (remainderRating >= 0.5) {
        starsRating.push(<i className="fas fa-star-half stars"></i>)
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
        {!liked ? (
            <div className="heart-row-main">
              <div onClick={this.likedClick}><i className="far fa-heart heart-list-icon-main-false"></i></div><div className="like-count-main"> {totalLikes}</div>
            </div>
        ) : (
          <div className="heart-row-main">
            <div onClick={this.likedClick}><i className="fas fa-heart heart-list-icon-main-true"></i></div><div className="like-count-main"> {totalLikes}</div>
          </div>
        )}
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
          <div className="top-seller-row">
            <div className="rate-description">Top Seller</div><div className="rate-description">{store.top_seller}</div>
          </div>
        </div>
        <Comments store={store}/>
      </div>
    );
  }
}

export default StorePage;
