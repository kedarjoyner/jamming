import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.authorizeUser = this.authorizeUser.bind(this);
    }
    search(){
        this.props.onSearch(this.state.searchTerm);
    }
    handleTermChange(event) {
        this.setState({
            searchTerm: event.target.value
        });

        console.log(this.state.searchTerm);
    }
    authorizeUser() {
        //check if authorized first
        this.props.authorize.getAccessToken();
    }
    // handleAuthorization(event){

    // }
    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter a Song, Album, or Artist" />
                <a onClick={this.authorizeUser}>Search</a>
            </div>
        );
    }
}

export default SearchBar;