import videos from '../services/data';

const INITIAL_STATE = {
  title: videos[0].titulo,
  imageSrc: videos[0].imagem,
  releaseDate: videos[0].publicado,
  author: videos[0].publicado_por,
  comments: videos[0].comentarios,
};

const videoReducer = (state = INITIAL_STATE, { type, video }) => {
  switch(type) {
  case 'CHANGE_VIDEO':
    return ({
      title: video.titulo,
      imageSrc: video.imagem,
      releaseDate: video.postado,
      author: video.postado_por,
      comments: video.comentarios,
    });
  default:
    return state;
  }
};

export default videoReducer;
