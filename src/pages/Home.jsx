import React from "react";
import { Container, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Home() {
  const {t,i18n} = useTranslation("global")
  return (
    <>
      <Container className="pt-5">
        <Card>
          <Card.Header>
            <h1>{t("header.h1")}</h1>
          </Card.Header>
          <Card.Body>
            {t("header.p")}    
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;
