import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

// Renders TrackList component

class Playlist extends Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                {/* Add a TrackList component */}
                <TrackList/>
                <a className="Playlist-save">Save to Spotify</a>
            </div>

        );
    }
}

export default Playlist;