import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class Film extends Component {
  state = {
    film: {
      Title: "",
      Poster: "",
      Year: "",
      Type: "",
      imdbID: "",
    },
  };

  sendFilm = async () => {
    try {
      const harry = await fetch(
        "http://www.omdbapi.com/?apikey=5bd93fb3&s=harry%20potter",
        {
          method: "POST",
          body: JSON.stringify(this.state.film),
        }
      );
      if (harry.ok) {
        console.log(harry);
        this.setState({ film: harry });
      } else {
        throw new Error("errore Post");
      }
    } catch (error) {
      console.log("errore", error);
    }
  };

  componentDidMount() {
    this.sendFilm();
  }
  render() {
    return (
      <Col md={8} key={this.state.film.imdbID}>
        <Card>
          <Card.Img variant="top" src={this.state.film.Poster} />
          <Card.Body>
            <Card.Title>{this.state.film.Title}</Card.Title>
            <Card.Text>{this.state.film.Type}</Card.Text>
            <Card.Text>{this.state.film.Year}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Film;
