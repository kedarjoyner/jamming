import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchResults: [
          {
            name: "Highway Tune", 
            artist: "Greta Van Fleet", 
            album: "Black Smoke Rising", 
            id: 1235
          }
        ], 
        playlistName: "New Music", 
        playlistTracks: [
          {
            name: "Highway Tune", 
            artist: "Greta Van Fleet", 
            album: "Black Smoke Rising", 
            id: 1235
          }, 
          {
            name: "Daisy", 
            artist: "Goodbye June", 
            album: "Magic Valley", 
            id: 3447
          },
          {
            name: "Wild Animal", 
            artist: "Rival Sons", 
            album: "Head Down", 
            id: 8475
          }
        ]
      }
  }
  render() {
    return (
      <div className="App-wrap">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              {/* Pass state of component to SearchResults. SearchResults renders TrackList */}
              <SearchResults searchResults={this.state.searchResults} />

              {/* Pass state of component to PlayList. PlayList renders another TrackList */}
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
