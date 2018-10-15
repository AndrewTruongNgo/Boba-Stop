import React from 'react';
import axios from 'axios';
import styles from './styles/List.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { stores, listClick } = this.props;
    return (
      <div>
        <div className="drink-menu">Drink Menu</div>
        <div className="store-list-container">
          {stores.map(store => <div key={store.name} className="store-list-entry" onClick={() => listClick(store)}>
            <img className="thumbnail" src={store.image}></img>

            <div className="store-name-list">{store.name}</div>
            <div className="store-location-list">{store.location}</div>
            <div className="store-price-list">{store.price}</div>
          </div>)}
        </div>
      </div>
    );
  }
}

export default List;
