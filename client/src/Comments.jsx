import React from 'react';
import styles from './styles/Comments.css';
import axios from 'axios';
import moment from 'moment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      comment: null,
      comments: [],
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.commentChange = this.commentChange.bind(this);
    this.commentClick = this.commentClick.bind(this);
  }

  componentDidMount() {
    const { store } = this.props;
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

  usernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  commentChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  commentClick() {
    const { username, comment } = this.state;
    const { store } = this.props;
    if (username && comment) {
      axios.post(`/stores/comment/`, {
        username,
        comment,
        storeID: store.store_id,
      })
        .then(() => {
          axios.get(`/stores/comments/${store.store_id}`)
            .then((results) => {
              this.setState({
                username: null,
                comment: null,
                comments: results.data,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Comments must include both fields');
    }
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="comments-container">
        {comments.map((commentEntry) =>
          <div key={commentEntry.name} className="comment-row">
            <div className="comment-name">{commentEntry.name}</div>
            <div className="comment-text">{commentEntry.comment}</div>
            <div className="divide">
              <div className="line"></div>
            </div>
          </div>
        )}
        <div className="comment-container">
          <input className="comment-input" placeholder="Add comment here..." onChange={this.commentChange} />
        </div>
        <div className="comment-input-row">
          <input className="username-input" placeholder="Username" onChange={this.usernameChange} />
          <div className="comment-button-container">
            <button className="comment-button" onClick={this.commentClick}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
