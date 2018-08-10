import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

// Renders TrackList component

class Playlist extends Component {
    constructor(props){
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e){
        this.props.onNameChange(e.target.value);
    }
    // onSave(){
    //     this.props.onSave()
    // }
    render() {
        return (
            <div className="Playlist">
                <input id="Playlist-name" onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
                {
                    /* Pass state of playlistTracks property to TrackList
                     * Property gets moved through .map() function in ../Tracklist/Tracklist.js 
                     * and rendered by ../Track/Track.js
                    */
                }
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <a onClick={this.props.onSave} className="Playlist-save">Save to Spotify</a>
            </div>

        );
    }
}

export default Playlist;