import React, { Component } from 'react';
import '../styles/App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


class Movie extends Component {

    componentDidMount() {
        axios.get('http://localhost:8000/movie')
        .then(function (response) {
            // handle success
            console.log(response);
        })
    }

    render() {
        return (
            <div className="Movie">
                <Container className="mt-5">
                    <h1>Movies</h1>
                </Container>
            </div>
        )
    }
}

export default Movie;