import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Video from './components/Video';
import Suggestions from './components/Suggestions';
import videos from './services/data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: videos[0].titulo,
      imageSrc: videos[0].imagem,
      releaseDate: videos[0].publicado,
      author: videos[0].publicado_por,
      comments: videos[0].comentarios,
    }
  }

  changeVideo = (video) => {
    this.setState({
      title: video.titulo,
      imageSrc: video.imagem,
      releaseDate: video.publicado,
      author: video.publicado_por,
      comments: video.comentarios,
    })
  }

  render() {
    const { imageSrc, title, releaseDate, author, comments } = this.state;
    return (
      <div>
        <Header />
        <div className="App">
          <Video
            imageSrc={ imageSrc }
            title={ title }
            releaseDate={ releaseDate }
            author={ author }
            comments={ comments }
            />
          <Suggestions changeVideo={ this.changeVideo } />
        </div>
      </div>
    );
  }
}

export default App;
