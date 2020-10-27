import React from "react";
import {Container, Grid ,Image } from "semantic-ui-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './purchase.scss';

export default function PurchaseService(props) {
    return(
        <>
        <Header/>
        <section className="purchase-info">
            <Container>
                <Grid>
                    <Grid.Column computer={16}>
                        <p className="purchase-info__title">Kevin, !Gracias por confiar en StartFly¡</p>
                        <p className="purchase-info__subtitle">Estas a punto de usar tus nuevos servicios:</p>
                        <p className="purchase-info__new-service"><i class="check icon" /> PACK DE DISEÑO WEB VALENCIA</p>
                        <hr/>
                        <p className="purchase-info__subtitle">Para poder confirmar su pedido con <b>ID. 123456789</b>, debera subir su justificante de pago a la cuenta de correo electronico startfly.group@gmail.com en un plazo maximo de <b>24h</b></p>
                        <div className="purchase-info__card-transfer">
                            <ul>
                                <li><b>- Banco u nº de cuenta:</b> Caixabank - xxxx xxxx xxxx xxxx</li>
                                <li><b>- IBAN:</b> ES35 xxxx xxxx xxxx xxxx</li>
                                <li><b>- Concepto:</b> ID PEDIDO / Pedido 123456789</li>
                                <li><b>- Importe:</b> 500 €</li>
                            </ul>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        </section>
        <Footer/>
        </>
    )
}