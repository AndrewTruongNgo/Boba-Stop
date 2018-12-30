import React from 'react';
import axios from 'axios';
import styles from './styles/List.css';
import ListEntry from './ListEntry.jsx';
import MobileSubscribe from './MobileSubscribe.jsx';


const List = ({ stores, listClick }) => {

  return (
    <div>
      <MobileSubscribe />
      <div className="drink-menu">Drink Menu</div>
      <div className="store-list-container">
        {stores.map(store =>
          <ListEntry key={store.name} store={store} listClick={listClick} />)}
      </div>
    </div>
  );
}

export default List;
