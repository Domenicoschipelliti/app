import { Card } from "react-bootstrap";

const ArteSotto = () => {
  return (
    <Card className="text-center bg-dark">
      <Card.Header>
        <i className="bi bi-facebook text-light me-2"></i>
        <i className="bi bi-twitter-x text-light me-2"></i>
        <i className="bi bi-youtube text-light me-2"></i>
        <i className="bi bi-instagram text-light me-2"></i>
      </Card.Header>

      <Card.Body>
        <Card.Title className="text-light">Audio and Subtitles</Card.Title>
        <Card.Text className="text-light">Media Center</Card.Text>
      </Card.Body>
      <Card.Footer className="text-light">Privacy</Card.Footer>
      <Card.Footer className="text-light">Contact Us</Card.Footer>
    </Card>
  );
};

export default ArteSotto;
