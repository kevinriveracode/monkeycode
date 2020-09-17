import React from "react";
import { Container, Grid, Header, Button, Image } from "semantic-ui-react";
import "./Banner.scss";

export default function Banner(props) {
  return (
    <section className="banner">
      <Container className="banner__container">
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column mobile={16}>
              <h1 className="banner__primary-title">
                DISEÑO WEB ORIGINAL RAPIDO Y SEGURO
              </h1>
              <h3 className="banner__secondary-title">
                Creamos sitios web únicos para pequeñas y medianas empresas.
              </h3>
              <div className="banner__container-buttons">
                <Button className="banner__container-buttons banner__container-buttons--button-primary">
                  Ver Planes
                </Button>
                <Button className="banner__container-buttons banner__container-buttons--button-secondary">
                  ¡Contactanos Ya!
                </Button>
              </div>
              <Image
                className="banner__optional-image"
                src="/img/banner-diseño-web.svg"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  );
}
