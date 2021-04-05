import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  render() {
    const { releaseDate, author, comments } = this.props;
    return(
      <div>
        <p>{ releaseDate }</p>
        <p>{ author }</p>
        { comments.map(({ nome, conteudo }) => (
          <p>
            { nome }: { conteudo }
          </p>
        )) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  releaseDate: state.videoReducer.releaseDate,
  author: state.videoReducer.author,
  comments: state.videoReducer.comments,
});

export default connect(mapStateToProps)(Comments);
