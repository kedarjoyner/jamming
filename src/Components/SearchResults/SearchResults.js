import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList.js';
import './SearchResults.css';

// Renders TrackList component

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                {/* Pass state of searchResults property to TrackList */}
                <TrackList tracks={this.props.searchResults} />
            </div>
        );
    }
}

export default SearchResults;