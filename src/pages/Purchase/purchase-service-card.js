import React from "react";
import {Container, Grid ,Image } from "semantic-ui-react";
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
                        <p className="purchase-info__title">{infoOperation.name}, !Gracias por confiar en StartFly¡</p>
                        <p className="purchase-info__subtitle">Estas a punto de usar tus nuevos servicios:</p>
                        <p className="purchase-info__new-service"><i class="check icon" /> PACK DE DISEÑO WEB VALENCIA</p>
                        <hr/>
                        <p className="purchase-info__subtitle">En 2 o 3 horas te llegara un correo electrónico con un enlace a un formulario, este formulario nos servira como base para el diseño de tu web.</p>   
                    </Grid.Column>
                </Grid>
            </Container>
        </section>
        <Footer/>
        </>
    )
}