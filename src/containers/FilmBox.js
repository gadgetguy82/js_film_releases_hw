import React, {Component} from 'react';
import FilmList from '../components/FilmList'
import UpcomingReleases from '../components/UpcomingReleases'
import '../css/style.css';

class FilmBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Dora and the Lost City of Gold",
          url: "https://www.imdb.com/title/tt7547410/?ref_=rlm"
        },
        {
          id: 2,
          name: "Downton Abbey",
          url: "https://www.imdb.com/title/tt6398184/?ref_=rlm"
        },
        {
          id: 3,
          name: "Rambo: Last Blood",
          url: "https://www.imdb.com/title/tt1206885/?ref_=rlm"
        },
        {
          id: 4,
          name: "Zombieland: Double Tap",
          url: "https://www.imdb.com/title/tt1560220/?ref_=rlm"
        },
        {
          id: 5,
          name: "The Addams Family",
          url: "https://www.imdb.com/title/tt1620981/?ref_=rlm"
        }
      ],
      upcomingReleasesLink: "https://www.imdb.com/calendar/?region=gb"
    }
  }

  render() {
    return(
      <div className="film-box">
        <h1>Upcoming Film Releases for UK</h1>
        <hr/>
        <FilmList data={this.state.data}/>
        <hr/>
        <UpcomingReleases link={this.state.upcomingReleasesLink}/>
      </div>
    );
  }
}

export default FilmBox;
