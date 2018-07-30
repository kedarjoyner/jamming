import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList.js';
import './SearchResults.css';

// Renders TrackList component

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                {
                    /* Pass state of searchResults property to TrackList
                     * Property gets moved through .map() function in ../Tracklist/Tracklist.js 
                     * and rendered by ../Track/Track.js
                    */
                }               
                 <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
            </div>
        );
    }
}

export default SearchResults;