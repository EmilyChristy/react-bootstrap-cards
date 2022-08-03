import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "holderjs";
import "./App.css";

function App() {
  return (
    <>
      <Container className="App-header">
        <h1>React Bootstrap Card Examples</h1>
        <p>A selection of Bootstrap React card designs</p>
      </Container>
      <Container>
        <h2>Simple card examples</h2>
        <Row xs={1} md={4} className="g-4">
          <Col>
            {/* Example 1 */}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Basic card</Card.Title>
                <Card.Text>
                  Some main content text can go here, a product description for
                  example
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* Example 2 */}
            <Card bg="info" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Styled card &amp; footer</Card.Title>
                <Card.Text>Some main content text can go here.</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            {/* Example 3 */}
            <Card bg="primary" text="light">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Full width card</Card.Title>
                <Card.Text>
                  This card doesn't have a width specified. By default a
                  Bootstrap React card is full width, and will expand to fit the
                  width of it's enclosing container.
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* Example 4 */}
            <Card bg="warning" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Header>This is a header</Card.Header>
              <Card.Body>
                <Card.Title>Card with header</Card.Title>
                <Card.Text>Some main content text can go here</Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2>More examples</h2>
        <Row>
          <Col>
            {/* Example 4 */}
            <Card className=".p-3 .mt-2">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* Example 5 */}
            <Card bg="primary" text="light">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Full width card</Card.Title>
                <Card.Text>
                  This card doesn't have a width specified. By default a
                  Bootstrap React card is full width, and will expand to fit the
                  width of it's enclosing container.
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
