import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class Ricerca extends Component {
  state = {
    Search: [],
  };

  Movies = () => {
    fetch("http://www.omdbapi.com/?apikey=5bd93fb3&s=harry%20potter")
      .then((data) => {
        if (data.ok) {
          console.log("dati", data);
          return data.json();
        } else {
          console.log("errore grave nella get");
        }
      })
      .then((datazione) => {
        console.log("dati eccoli", datazione);
        this.setState((dato) => ({
          Search: [
            ...dato.Search,
            ...datazione.Search.map((film) => ({
              Title: film.Title,
              Year: film.Year,
              imdbID: film.imdbID,
              Type: film.Type,
              Poster: film.Poster,
            })),
          ],
        }));
      })
      .catch((err) => {
        throw new Error("errore in console", err);
      });
  };

  componentDidMount() {
    this.Movies();
  }
  render() {
    <h3 className="text-light ms-4">Anime</h3>;

    return (
      <Container>
        <Row>
          {this.state.Search.map((ricerca) => {
            return (
              <Col md={8} key={ricerca.imdbID}>
                <Card>
                  <Card.Img variant="top" src={ricerca.Poster} />
                  <Card.Body>
                    <Card.Title>{ricerca.Title}</Card.Title>
                    <Card.Text>{ricerca.Type}</Card.Text>
                    <Card.Text>{ricerca.Year}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Ricerca;
