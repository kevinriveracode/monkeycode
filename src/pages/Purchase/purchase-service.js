import React from "react";
import {Container, Grid } from "semantic-ui-react";
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
                    <Grid.Column computer={16} className="purchase-info__container-purchase">
                        <p className="purchase-info__title">!Gracias por confiar en StartFly¡</p>
                        <p className="purchase-info__subtitle">Estas a punto de usar tus nuevos servicios:</p>
                        <p className="purchase-info__new-service"><i class="check icon" />Nuevo servicio contratado con StartFly</p>
                        <hr/>
                    <p className="purchase-info__subtitle">Para poder confirmar su pedido deberá subir su justificante de pago a la cuenta de correo electrónico startfly.group@gmail.com en un plazo máximo de <b>24h</b></p>
                        <div className="purchase-info__card-transfer">
                            <ul>
                                <li><b>- Banco nº de cuenta:</b> Caixabank - ES23 2100 6577 8002 0013 8748</li>
                                <li><b>- IBAN:</b> ES23 2100 6577 8002 0013 8748</li>
                                <li><b>- Concepto:</b> ( Nombre del pack ) - ( Su nombre )</li>
                                <li><b>- Importe:</b> ( Importe del precio del pack )</li>
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