import React, { Component } from 'react';
import axios from 'axios';
import { Card, Accordion, Image } from 'react-bootstrap';

export class FileCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            filmTitle: "",
            imdbID: ""
        };
    };

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=1c36091`).then(response => {
            if (response.data.Error) {
                alert("Movie Not Found");
            } else {
                this.setState({ data: response.data });
            }
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <img src={data.Poster} alt="Movie Poster" id="MoviePoster" />
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Year of Release
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{data.Year}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Plot
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>{data.Plot}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}