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
        ], 
        playlistName: "New Music", 
        playlistTracks: []
      }
      // Bind current value of this to addTrack()
      this.addTrack = this.addTrack.bind(this);
  }
  addTrack(track){
    const playlistTracks = this.state.playlistTracks;
    if(playlistTracks.find(addedTrack => 
      addedTrack.id === track.id)) {
        return;
      } else {
        const newTrack = playlistTracks.concat(track);
        // playlistTracks.push(track);
        this.setState({
          playlistTracks: newTrack
        });
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
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />

              {/* Pass state of component to PlayList. PlayList renders another TrackList */}
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
