import React from "react"
import {
  Container,
  Grid,
  Input,
  Checkbox,
  Button,
  TextArea,
} from "semantic-ui-react"
import "./FormContact.scss"

export default function FormContact(props) {
  return (
    <section className="form-contact">
      <Container className="form-contact__container">
        <Grid>
          <Grid.Row className="form-contact__container-title">
            <Grid.Column>
              <h4 className="form-contact__title">¿TIENES DUDAS?</h4>
              <h6 className="form-contact__subtitle">
                Contacta con nosotros como prefieras
              </h6>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16}>
              <p className="form-contact__phone-message">
                Déjanos tú telefono y te llamamos:
              </p>
            </Grid.Column>
            <Grid.Column className="form-contact__container-input" mobile={8}>
              <Input placeholder="Nombre" />
            </Grid.Column>
            <Grid.Column className="form-contact__container-input" mobile={8}>
              <Input placeholder="Teléfono" />
            </Grid.Column>
            <Grid.Column mobile={16} className="form-contact__verify-legal">
              <Checkbox label="He leído y acepto la politica de privacidad" />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              className="form-contact__contact-button-container"
            >
              <Button content="TE LLAMAMOS" />
            </Grid.Column>
            <Grid.Column mobile={16}>
              <p className="form-contact__email-message">
                También puedes enviarnos un correo o monkeycode@gmail.com, o
                utilizar este formulario de contacto. Estamos a tu disposición
                para cualquier pregunta o duda que puedas tener.
              </p>
            </Grid.Column>
            <Grid.Column mobile={8} className="form-contact__container-input">
              <Input placeholder="Nombre" />
            </Grid.Column>
            <Grid.Column mobile={8} className="form-contact__container-input">
              <Input placeholder="Correo" />
            </Grid.Column>
            <Grid.Column mobile={16} className="form-contact__message">
              <TextArea placeholder="Lo que quieras contarnos..." />
            </Grid.Column>
            <Grid.Column mobile={16} className="form-contact__verify-legal">
              <Checkbox label="He leído y acepto la politica de privacidad" />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              className="form-contact__contact-button-container"
            >
              <Button content="ENVIANOS TU CONSULTA" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}
