import React, { Component } from 'react';
import '../Video.css';
import Comments from './Comments';

class Video extends Component {
  render() {
    const { imageSrc, title, releaseDate, author, comments } = this.props;
    return(
      <div>
        <div className="video">
          <img src={ imageSrc } alt={ title }/>
        </div>
        <Comments
          releaseDate={ releaseDate }
          author={ author }
          comments={ comments }
        />
      </div>
    );
  }
}

export default Video;
