import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Home from './Home.jsx';
import StorePage from './StorePage.jsx';
import ListEntry from './ListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      home: true,
      list: false,
      storePage: false,
      store: null,
    };
    this.homeClick = this.homeClick.bind(this);
    this.listClick = this.listClick.bind(this);
  }

  componentDidMount() {
    axios.get('/store-list')
      .then((res) => {
        this.setState({
          stores: res.data,
        });
      });
  }

  homeClick() {
    this.setState({
      home: false,
      list: true,
    });
  }

  listClick(store) {
    this.setState({
      list: false,
      store,
      storePage: true,
    });
  }

  render() {
    const { stores, home, list, storePage, store } = this.state;
    return (
      <div>
        {home
          && <Home homeClick={this.homeClick} />
        }
        {list
          && <List stores={stores} listClick={this.listClick} />
        }
        {storePage
          && <StorePage store={store} />
        }
      </div>
    );
  }
}

export default App;
