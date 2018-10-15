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
    return (
      <div>
        <div className="store-name">{store.name}</div>
        <div>{store.location}</div>
        <div>{store.price}</div>
        <img src={store.image}></img>
      </div>
    );
  }
}

export default StorePage;
