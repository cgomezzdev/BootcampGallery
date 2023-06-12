import React from "react";
import { Container, Card } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container className="pt-5">
        <Card>
          <Card.Header>
            <h1>Welcome to the Home Page</h1>
          </Card.Header>
          <Card.Body>
            This is a page for my exercicis in a bootcamp for React
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;
