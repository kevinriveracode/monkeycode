import React from "react";
import {Container, Grid ,Image, Button } from "semantic-ui-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './purchase.scss';

export default function PurchaseServiceCard(props) {
    let infoOperation = JSON.parse(localStorage.getItem('card-operation'))

    return(
        <>
        <Header/>
        <section className="purchase-info">
            <Container>
                <Grid>
                    <Grid.Column computer={16} className="purchase-info__container-purchase">
                        <p className="purchase-info__title">{infoOperation.name}, !Algó a ido mal¡</p>
                        <p className="purchase-info__subtitle">Han habido fallos al intentar realizar tu pedido, vuelve a intentarlo mas tarde.</p>
                        <Button as="a" href="/" content="Volver al inicio" />
                    </Grid.Column>
                </Grid>
            </Container>
        </section>
        <Footer/>
        </>
    )
}