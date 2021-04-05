import React, { Component } from 'react';

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

export default Comments;
