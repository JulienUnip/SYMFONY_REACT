import React, { Component } from 'react';
import '../styles/App.scss';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';


class MovieForm extends Component {

  submitForm(e) {
    e.preventDefault();

    const title = document.querySelector("input[name=title]").value;
    const description = document.querySelector("textarea[name=description]").value;

    if (title != "" || description != "") {
      axios.post('http://localhost:8000/movie/new?title=' + title + '&description=' + description)
        .then(function (response) {
          let res = response.data;
          console.log(res)
      })
    }
  }

  render() {
    return (
        <div className="MovieForm content">
            <Container className="mt-5">
              <h1>Add Movie</h1>

              <Form onSubmit={this.submitForm} className="p-4">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required type="text" id="title" name="title" placeholder="Movie title" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control required as="textarea" name="description" rows="3" placeholder="Movie description" />
                </Form.Group>

                <Button className="btn-green" type="submit">
                  Enregistrer
                </Button>
              </Form>
            </Container>
        </div>
    )
  }
}

export default MovieForm;