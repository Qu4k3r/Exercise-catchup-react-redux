import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Video.css';
import Comments from './Comments';

class Video extends Component {
  render() {
    const { imageSrc, title } = this.props;
    return(
      <div>
        <div className="video">
          <img src={ imageSrc } alt={ title }/>
        </div>
        <Comments />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageSrc: state.videoReducer.imageSrc,
  title: state.videoReducer.title,
});

export default connect(mapStateToProps)(Video);
