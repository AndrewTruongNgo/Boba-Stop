import React from 'react';
import styles from './styles/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { homeClick } = this.props;
    return (
      <div>
        <div className="home-title">
          BOBA STOP
        </div>
        <div className="button-container">
          <button onClick={homeClick} className="home-button">Drink Up</button>
        </div>
      </div>
    );
  }
}

export default Home;
