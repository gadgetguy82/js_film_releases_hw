import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {
  render() {
    const filmNodes = this.props.data.map(({id, name, url}) => {
      return(<Film key={id} url={url}>{name}</Film>)
    })

    return(
      <ul className="film-list">
        {filmNodes}
      </ul>
    );
  }
}

export default FilmList;
