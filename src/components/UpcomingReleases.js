import React, {Component} from 'react';

class UpcomingReleases extends Component {
  render() {
    return(
      <button className="upcoming-releases">
        <a href={this.props.link}>View more upcoming releases >></a>
      </button>
    );
  }
}

export default UpcomingReleases
