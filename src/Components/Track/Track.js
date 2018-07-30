import React, { Component } from 'react';
import './Track.css';

// Create a method called renderAction that displays a "-" anchor tag 
// if the isRemoval property is true, and a "+" anchor tag if the isRemoval 
// property is false. 
// Set the class name to Track-action.

class Track extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

    addTrack(){
        this.props.onAdd(this.props.track);
        console.log("hey!!!");
    }
    renderAction() {
        const minus = "-";
        const plus = "+";
        const isRemove = this.props.isRemoval;
        if (isRemove) {
            return <a className="Track-action">{minus}</a>
        } else {
            return <a onClick={this.addTrack} className="Track-action">{plus}</a>
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
                {this.renderAction()}
            </div>

        );
    }
}

export default Track;