import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "./icons/img1.jpg";

function CardComponent() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Hello</Card.Title>
        <Card.Text>
          Lorem
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
