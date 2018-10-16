import React from 'react';
import axios from 'axios';
import styles from './styles/List.css';
import ListEntry from './ListEntry.jsx';

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
          {stores.map(store =>
            <ListEntry key={store.name} store={store} listClick={listClick} />)}
        </div>
      </div>
    );
  }
}

export default List;
