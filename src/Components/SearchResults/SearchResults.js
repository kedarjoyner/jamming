import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList.js';
import './SearchResults.css';

// Renders TrackList component

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                {/* Add a TrackList component */}
                <TrackList />
            </div>
        );
    }
}

export default SearchResults;