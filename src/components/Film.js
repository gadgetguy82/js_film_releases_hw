import React, {Component} from 'react';

class Film extends Component {
  render() {
    return(
      <li className="film">
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.children}</a>
      </li>
    );
  }
}

export default Film;
