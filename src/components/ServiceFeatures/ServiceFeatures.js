import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import { map } from "loadsh";
import "./ServiceFeatures.scss";

export default function ServiceFeatures(props) {
  const service = [
    {
      url: "responsive.svg",
      typeService: "WEB",
      nameService: "Responsive",
      backgroundColor: "#F1EADE"
    },
    {
      url: "google.svg",
      typeService: "WEB",
      nameService: "Optimizada para Google",
      backgroundColor: "#F7D9D9"
    },
    {
      url: "admin.svg",
      typeService: "WEB",
      nameService: "100% Autoadministrable",
      backgroundColor: "#EBE6FB"
    },
    {
      url: "clock.svg",
      typeService: "WEB",
      nameService: "Entrega de 4 a 7 días",
      backgroundColor: "#C9BFC8"
    }
  ];

  return (
    <section className="service-features">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2 className="service-features__title">
                ¿Que incluimos en nuestra páginas web?
              </h2>
              <h3 className="service-features__subtitle">
                Ya sea que necesitas un sitio web de WordPress, para poner tu
                negocio en línea, o una página online de ecommerce más complete,
                nuestro equipo de desarrollo web, te ayudará a hacer realidad tu
                visión.
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="service-features__features-container">
            {map(service, (item, index) => (
              <Grid.Column
                mobile={8}
                className="service-features__container-block"
              >
                <Feature
                  key={index}
                  url={item.url}
                  typeService={item.typeService}
                  nameService={item.nameService}
                  backgroundColor={item.backgroundColor}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  );
}

function Feature(props) {
  const { url, typeService, nameService, backgroundColor } = props;
  return (
    <Grid className="feature" style={{ backgroundColor }}>
      <Grid.Row>
        <Grid.Column mobile={16} className="feature__image-container">
          <div>
            <Image src={`/img/${url}`} />
          </div>
        </Grid.Column>
        <Grid.Column mobile={16}>
          <span className="feature__service">{typeService}</span>
          <h6 className="feature__name">{nameService}</h6>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
