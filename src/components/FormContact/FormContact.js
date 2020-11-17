import React, { useState } from "react"
import {
  Container,
  Grid,
  Input,
  Checkbox,
  Button,
  TextArea,
} from "semantic-ui-react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "./FormContact.scss"

export default function FormContact(props) {
  const { title, subtitle, call, email } = props

  const [name, setName] = useState("")
  const [emailUser, setEmailUser] = useState("")
  const [message, sendMessage] = useState("")
  const [messageEmail, setMessageEmail] = useState(false)
  const [messagePhone, setMessagePhone] = useState(false)
  const [nameNumber, setNameNumber] = useState("")
  const [number, setNumber] = useState("")

  async function sendMessageWeb() {
    setMessageEmail(true)
    let messageToSend = {
      name: name,
      email: emailUser,
      message: message,
    }
    await axios.post(
      "https://monkeycodebackend.herokuapp.com/saveMessage",
      messageToSend
    )
    setMessageEmail(false)
    notify()
    setName("")
    setEmailUser("")
    sendMessage("")
  }

  async function sendMessagePhone() {
    setMessagePhone(true)
    let messageToSend = {
      name: nameNumber,
      phone: number,
    }
    await axios.post(
      "https://monkeycodebackend.herokuapp.com/savePhone",
      messageToSend
    )
    setMessagePhone(false)
    setNameNumber("")
    setNumber("")
  }

  const notify = () =>
    toast.info("Tu mensaje se a enviado!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })

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
              <Input
                placeholder="Nombre"
                value={nameNumber}
                onChange={ev => setNameNumber(ev.target.value)}
              />
            </Grid.Column>
            <Grid.Column className="form-contact__container-input" mobile={8}>
              <Input
                placeholder="Teléfono"
                value={number}
                onChange={ev => setNumber(ev.target.value)}
                type="number"
              />
            </Grid.Column>
            <Grid.Column mobile={16} className="form-contact__verify-legal">
              <Checkbox label={call.privacity} />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              className="form-contact__contact-button-container"
            >
              <Button
                content={call.button.name}
                loading={messagePhone}
                onClick={sendMessagePhone}
              />
            </Grid.Column>
            <Grid.Column mobile={16}>
              <p className="form-contact__email-message">{email.title}</p>
            </Grid.Column>
            <Grid.Column mobile={8} className="form-contact__container-input">
              <Input
                value={name}
                onChange={ev => setName(ev.target.value)}
                placeholder="Nombre"
              />
            </Grid.Column>
            <Grid.Column mobile={8} className="form-contact__container-input">
              <Input
                value={emailUser}
                onChange={ev => setEmailUser(ev.target.value)}
                eholder="Correo"
                type="email"
              />
            </Grid.Column>
            <Grid.Column mobile={16} className="form-contact__message">
              <TextArea
                value={message}
                placeholder="Lo que quieras contarnos..."
                onChange={ev => sendMessage(ev.target.value)}
              />
            </Grid.Column>
            <Grid.Column mobile={16} className="form-contact__verify-legal">
              <Checkbox label={`He leído y acepto la politica de privacidad`} />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              className="form-contact__contact-button-container"
            >
              <Button
                onClick={sendMessageWeb}
                content={email.button.name}
                loading={messageEmail}
              />
              <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}
