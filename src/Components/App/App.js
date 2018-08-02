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
            id: 1235,
            uri: 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'
          },
          {
            name: "Daisy", 
            artist: "Goodbye June", 
            album: "Magic Valley", 
            id: 3447,
            uri: 'spotify:track:7rqhFgbbKwnb9MLmUQDhG6'
          },
          {
            name: "Wild Animal", 
            artist: "Rival Sons", 
            album: "Head Down", 
            id: 8475,
            uri: 'spotify:track:8rqhFgbbKwnb9MLmUQDhG6'
          }
        ], 
        playlistName: "New Music", 
        playlistTracks: [
          {
            name: "Daisy", 
            artist: "Goodbye June", 
            album: "Magic Valley", 
            id: 3447,
            uri: 'spotify:track:7rqhFgbbKwnb9MLmUQDhG6'
          },
          {
            name: "Wild Animal", 
            artist: "Rival Sons", 
            album: "Head Down", 
            id: 8475,
            uri: 'spotify:track:8rqhFgbbKwnb9MLmUQDhG6'
          }
        ]
      }
      // Bind current value of this to addTrack()
      this.addTrack = this.addTrack.bind(this);
      
      // Bind current value of this to removeTrack();
      this.removeTrack = this.removeTrack.bind(this);

      // Bind current value of this to updatePlaylistName();
      this.updatePlaylistName = this.updatePlaylistName.bind(this);

      // Bind current value of this to savePlaylist()
      this.savePlaylist = this.savePlaylist.bind(this);

      this.search = this.search.bind(this);
  }
  addTrack(track){
    const playlistTracks = this.state.playlistTracks;
    if(playlistTracks.find(addedTrack => 
      addedTrack.id === track.id)) {
        return;
      } else {
        // Cannot push into a state array in React
        // because you don't want to modify the original array
        // Concat does not modify the original array
        // Reference: https://blog.logrocket.com/immutability-in-react-ebe55253a1cc
        const newTrack = playlistTracks.concat(track);
        this.setState({
          playlistTracks: newTrack
        });
      }
  }
  removeTrack(track) {
    const playlistTracks = this.state.playlistTracks;
    const filteredTracks = playlistTracks.filter(filter => {
      // With filter(), if return equals false the element is filtered out
      return filter.id !== track.id;
    });
    this.setState({
      playlistTracks: filteredTracks
    });
  }
  updatePlaylistName(name){
    this.setState({
      playlistName: name
    });
  }
  savePlaylist(){
    // Adds uri value from playlist tracks to the trackURIs array
    const trackURIs = [];
    const playlistTracks = this.state.playlistTracks;
    playlistTracks.map(track => {
      return trackURIs.push(track.uri);
    });
    console.log(trackURIs);
  }
  search(term){
    console.log(term);
  }
  render() {
    return (
      <div className="App-wrap">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              {/* Pass state of component to SearchResults. SearchResults renders TrackList */}
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onSearch={this.search} />

              {/* Pass state of component to PlayList. PlayList renders another TrackList */}
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
