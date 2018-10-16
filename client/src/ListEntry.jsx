import React from 'react';
import styles from './styles/ListEntry.css';
import axios from 'axios';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      totalLikes: null,
    };
    this.likedClick = this.likedClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      totalLikes: this.props.store.likes
    });
  }

  likedClick() {
    const { liked, totalLikes } = this.state;
    const { store } = this.props;
    if (!liked) {
      axios.post('/update-likes', {
        storeID: store.store_id,
        likes: totalLikes + 1,
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
      axios.post('/update-likes', {
        storeID: store.store_id,
        likes: totalLikes - 1,
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
    const { store, listClick } = this.props;
    const { liked, totalLikes } = this.state;
    return (
      <div className="store-list-entry">
        <img className="thumbnail" src={store.image} onClick={() => listClick(store)}></img>
        <div className="store-name-list" onClick={() => listClick(store)}>{store.name}</div>
        <div className="store-price-list" onClick={() => listClick(store)}>{store.price}</div>
        <div className="store-location-list" onClick={() => listClick(store)}>{store.location}</div>
        {!liked ? (
          <div className="heart-row">
            <div onClick={this.likedClick}><i className="far fa-heart heart-list-icon-false"></i></div><div className="like-count"> {totalLikes}</div>
          </div>
        ) : (
          <div className="heart-row">
            <div onClick={this.likedClick}><i className="fas fa-heart heart-list-icon-true"></i></div><div className="like-count"> {totalLikes}</div>
          </div>
        )}
      </div>
    );
  }
}

export default ListEntry;
