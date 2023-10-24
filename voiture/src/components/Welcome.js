import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container fluid="md mt-4">
      <Row>
        <Col>
          <p>Lorem ipsum</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p>Lorem ipsum</p>
        </Col>
        <Col>
          <p>Lorem ipsum</p>
        </Col>
        <Col>
          <p>Lorem ipsum</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example of the text c'est partiiii
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example of the text c'est partiiii
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
