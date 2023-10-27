import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Film from "./Film";

class Ricerca extends Component {
  state = {
    film: [],
  };

  componentDidMount = async () => {
    try {
      const risposta = await fetch(
        "http://www.omdbapi.com/?apikey=5bd93fb3&s=harry%20potter"
      );

      if (risposta.ok) {
        const demanda = await risposta.json();
        console.log(demanda);
        this.setState({ film: demanda });
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
          {
            <Film></Film>
            /* {this.state.film.map((films) => {
            return this.setState(
              <Col>
                <img src={films.Poster} alt="" />
                <h2>{films.Title}</h2>
                <p>{films.Year}</p>
                <p>{films.Type}</p>
              </Col>
            );
          })} */
          }
        </Row>
      </Container>
    );
  }
}

export default Ricerca;
