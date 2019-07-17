import React, { Component } from 'react';
import '../styles/App.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';


class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        let self = this;
        axios.get('http://localhost:8000/movie')
        .then(function (response) {
            let res = response.data;
            console.log(res)
            self.setState({
                movies: res
            })
        })
    }

    render() {
        console.log(this.state.movies)

        const items = this.state.movies.map((item, key) =>
        <Col lg="4" className="mt-5">
            <Card key={item.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://specials-images.forbesimg.com/imageserve/5d2509b44c687b00085c325f/960x0.jpg?fit=scale" />
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button className="btn-green">Voir</Button>
                </Card.Body>
            </Card>
        </Col>
            
        );
        return (
            <div className="Movie content">
                <Container className="mt-5">
                    <h1>Movies</h1>
                    <Row className="mt-4">
                        {items}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Movie;