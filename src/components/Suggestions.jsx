import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeVideo } from '../actions';
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

const mapDispatchToProps = (dispatch) => ({
  changeVideo: (video) => dispatch(changeVideo(video)),
});

export default connect(null, mapDispatchToProps)(Suggestions);
