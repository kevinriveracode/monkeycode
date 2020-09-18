import React from "react";
import { Grid, Container, Image, Button } from "semantic-ui-react";
import { map } from "loadsh";
import "./Advantages.scss";

export default function Advantages(props) {
  const items = [
    {
      url: "business.svg",
      title: "Imagen profesional",
      description:
        "Tener una página web te permite hacer publicidad y promocionar tu negocio con una exposición a nivel mundial gracias al gran alcance de internet."
    },
    {
      url: "business.svg",
      title: "Disponible 24 horas",
      description:
        "Tu sitio web estará disponible para proporcionar información las 24 horas del día."
    },
    {
      url: "business.svg",
      title: "Amplía tu mercado",
      description:
        "Tener presencia en internet te ofrece la oportunidad de llegar a más clientes además de mejorar las oportunidades de negocio y la captación de clientes potenciales."
    },
    {
      url: "business.svg",
      title: "Herramienta de venta",
      description:
        "Es importante que tu negocio tenga un portal donde pueda presentar su oferta para que los potenciales clientes puedan consultar la información antes de tomar una desición."
    }
  ];
  return (
    <section className="advantages">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2 className="advantages__title">
                Contrata nuestros servicios y aumenta las conversiones
              </h2>
              <h3 className="advantages__subtitle">
                Una buena presencia online, repercutira en un aumento de la
                conversión de tus clientes, un aumento de facturación y un mayor
                público.
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="advantages__container-items">
            <Grid.Column mobile={16}>
              {map(items, (item, index) => (
                <AdvantageItem
                  key={index}
                  url={item.url}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} className="advantages__footer">
              <h5 className="advantages__title">
                Contrata hoy mismo tu página web
              </h5>
              <Button className="advantages__button">Empieza ahora</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  );
}

function AdvantageItem(props) {
  const { url, title, description } = props;

  return (
    <Grid className="advantage-item">
      <Grid.Row>
        <Grid.Column mobile={2} className="advantage-item__container-image">
          <Image src={`/img/${url}`} />
        </Grid.Column>
        <Grid.Column mobile={14} className="advantage-item__container-info">
          <h4 className="advantage-item__title">{title}</h4>
          <p className="advantage-item__description">{description}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
