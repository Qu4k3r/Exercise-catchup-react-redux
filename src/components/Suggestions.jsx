import React, { Component } from 'react';
import videos from '../services/data';
import '../Suggestions.css';

class Suggestions extends Component {
  render() {
    const { changeVideo } = this.props;
    return(
      <section className="suggestions-container">
        { videos.map((video) => (
          <div className="video-thumbnail">
            <img
              onClick={ () => changeVideo(video) }
              src={ video.imagem } alt= { video.titulo }
            />
            <p>{video.titulo}</p>
          </div>
        )) }
      </section>
    );
  }
}

export default Suggestions;
