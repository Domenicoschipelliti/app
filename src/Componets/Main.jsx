import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class Ricerca extends Component {
  state = {
    Search: [],
  };

  componentDidMount = async () => {
    try {
      const risposta = await fetch(
        "http://www.omdbapi.com/?apikey=5bd93fb3&s=harry%20potter"
      );

      if (risposta.ok) {
        const demanda = await risposta.json();
        console.log(demanda);
        this.setState({ Search: demanda });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log("errore identficato", error);
    }
  };

  render() {
    <h3 className="text-light ms-4">Anime</h3>;
    return (
      <Container style={{ margin: 220 }}>
        <Row>
          <Col md={8} key={this.state.Search.imdbID}>
            <Card>
              <Card.Img variant="top" src={this.state.Search.Poster} />
              <Card.Body>
                <Card.Title>{this.state.Search.Title}</Card.Title>
                <Card.Text>{this.state.Search.Type}</Card.Text>
                <Card.Text>{this.state.Search.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Ricerca;
