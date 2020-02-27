import React, { Component } from 'react';
import axios from 'axios';
// import SearchBar from './SearchBar';
import Data from './Data';
import { CardGroup } from 'react-bootstrap';
import SearchAppBar from './MaterialsSearchBar';

export class MovieSearcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            filmTitle: ""
        };
    };

    makeRequest = () => {
        axios.get(`http://www.omdbapi.com/?s=${this.state.filmTitle}&apikey=1c36091`).then(response => {
            if (response.data.Error) {
                alert("Movie Not Found");
            } else {
                console.log(response.data);
                this.setState({ data: response.data.Search });
            }
        });
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.makeRequest();
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <form name="MovieSearchBar" onSubmit={this.handleSubmit} >
                    <SearchAppBar name="filmTitle" place="Movie Search" type='search' value={this.state.filmTitle} handleChange={this.handleChange}></SearchAppBar>
                </form>
                <CardGroup>
                    {(data.length > 0) ? (data.map(film => <Data Title={film.Title} Year={film.Year} Poster={film.Poster} findMovie={() => this.props.history.push(`/filmDetail/${film.imdbID}`)}></Data>)) : console.log("No films found")}
                </CardGroup>
            </div>
        )
    }
}