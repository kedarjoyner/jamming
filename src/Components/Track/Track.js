import React, { Component } from 'react';
import './Track.css';

// Create a method called renderAction that displays a "-" anchor tag 
// if the isRemoval property is true, and a "+" anchor tag if the isRemoval 
// property is false. 
// Set the class name to Track-action.

class Track extends Component {

    renderAction() {
        const minus = "-";
        const plus = "+";
        if (this.props.isRemoval === true) {
            return minus;
        } else {
            return plus;
        }
    }
    render() {
        return(
            <div className="Track">
                <div className="Track-information">
        {/* Property pulling from .map() function in ../TrackList/TrackList.js */}
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <a className="Track-action">{this.renderAction()}</a>
            </div>

        );
    }
}

export default Track;