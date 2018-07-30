import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

// Renders TrackList component

class Playlist extends Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                {
                    /* Pass state of playlistTracks property to TrackList
                     * Property gets moved through .map() function in ../Tracklist/Tracklist.js 
                     * and rendered by ../Track/Track.js
                    */
                }
                <TrackList tracks={this.props.playlistTracks} isRemoval={true}/>
                <a className="Playlist-save">Save to Spotify</a>
            </div>

        );
    }
}

export default Playlist;