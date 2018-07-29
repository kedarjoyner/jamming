import React, { Component } from 'react';
import Track from '../Track/Track.js';
import './TrackList.css';

// Renders Track component

class TrackList extends Component {
    render() {
        return(
            <div className="TrackList">
                {/* Add a map method that renders a set of Track components */}
                <Track/>                
            </div>
        );
    }
}

export default TrackList;