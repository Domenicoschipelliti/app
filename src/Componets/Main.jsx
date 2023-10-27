import { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Main extends Component {
  Series = async () => {
    try {
      const risposta = await fetch(
        "http://www.omdbapi.com/?apikey=[5bd93fb3]&s=harry%20potter"
      );

      if (risposta.ok) {
        const demanda = await risposta.json();
        console.log(demanda);
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
      <Container>
        <Row></Row>
      </Container>
    );
  }
}

export default Main;
