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
  const { title, subtitle, call, email } = props
  return (
    <section className="form-contact">
      <Container className="form-contact__container">
        <Grid>
          <Grid.Row className="form-contact__container-title">
            <Grid.Column>
              <h4 className="form-contact__title">{title}</h4>
              <h6 className="form-contact__subtitle">{subtitle}</h6>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16}>
              <p className="form-contact__phone-message">{call.title}</p>
            </Grid.Column>
            <Grid.Column className="form-contact__container-input" mobile={8}>
              <Input placeholder="Nombre" />
            </Grid.Column>
            <Grid.Column className="form-contact__container-input" mobile={8}>
              <Input placeholder="Teléfono" />
            </Grid.Column>
            <Grid.Column mobile={16} className="form-contact__verify-legal">
              <Checkbox label={call.privacity} />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              className="form-contact__contact-button-container"
            >
              <Button content={call.button.name} />
            </Grid.Column>
            <Grid.Column mobile={16}>
              <p className="form-contact__email-message">{email.title}</p>
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
              <Checkbox label={email.privacity} />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              className="form-contact__contact-button-container"
            >
              <Button content={email.button.name} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}
