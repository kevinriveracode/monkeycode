import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Helmet} from 'react-helmet'
import { Container } from 'semantic-ui-react';
import './main.scss';

export default function Conditions(props) {
    return(
        <>
        <Helmet>
        <html lang="es" />
        <title>Politíca de privacidad | Startfly</title>
        <meta name="robots" content="no-index"/>
        <meta property="og:site_name" content="Startfly"></meta>
        <meta property="og:locale" content="es_ES"></meta>
        
      </Helmet>
            <Header/>
            <section className="privacidad">
                <Container>
                    <p>
                        Datos legales Startfly, S.L., sociedad mercantil de nacionalidad española y duración indefinida, domiciliada en Valencia, legalmente constituida mediante escritura otorgada el día 22 de diciembre de 2016, y que consta debidamente inscrita en el Registro Mercantil de Valencia, CIF: 23324123F. Contacto: startfly.group@gmail.es
                    </p>
                    <p>
                        Si desea contactar con nosotros puede hacerlo mediante correo postal a la dirección arriba indicada o bien a través del correo electrónico startfly.group@gmail.com <br/>
                        El acceso a nuestro dominio puede realizarse directamente o a través de cualquier redirección existente, siendo la Política de Privacidad aplicable esta misma.
                    </p>
                    <h3>POLÍTICA DE PRIVACIDAD</h3>
                    <p>
                        Esta Política de Privacidad describe el modo en que tratamos sus datos personales (por ej. recogida, uso, comunicación, conservación y protección de su información personal) y proporciona información acerca de sus derechos como interesado.
                        STARTFLY, SL es el responsable del tratamiento, así como de la recogida, uso, comunicación, conservación y protección de sus datos personales, de acuerdo con el Reglamento General de Protección de Datos, reglas y políticas internas o cualquier normativa nacional aplicable.
                        En cumplimiento de la Ley Orgánica 3/2018 de 5 de Diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), así como el nuevo Reglamento General (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de Abril de 2016, por medio del presente documento, STARTFLY, SL informa:
                    </p>
                    <h3>Identidad y datos de contacto del Responsable</h3>
                    <p>
                        Nuestra información identificativa:
                        <b>Starfly, SL</b>
                        <ul>
                            <li>Por correo postal: C/ Plaza musico espi, 10 46019 Valencia - Valencia</li>
                            <li>Por e-mail: startfly.group@gmail.com</li>
                            <li>Por teléfono: <b>654 82 67 81</b></li>
                            <li>Página web: startfy.es</li>
                        </ul>
                    </p>
                    <p>Si desea ejercer cualquiera de sus derechos, puede ponerse en contacto con nosotros a través de nuestro Responsable interno de protección de Datos.</p>
                    <ul>
                        <li><h3>STARTFLY, SL</h3></li>
                        <li>Att. Responsable de Protección de Datos</li>
                        <li><b>C/ Plaza musico espi 10</b></li>
                        <li><b>46019 Valencia - Valencia</b></li>
                    </ul>
                </Container>
            </section>
            <Footer/>
        </>
    )
}
