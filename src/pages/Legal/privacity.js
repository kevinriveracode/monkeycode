import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from 'semantic-ui-react';
import './main.scss';

export default function Privacity(props) {
    return(
        <>
            <Header/>
            <section className="privacidad">
                <Container>
                    <p>
                    La siguiente política de privacidad se aplica a la página web startfly.es en adelante STARTFLY y a todos los productos y servicios que se ofrecen en la plataforma web de STARTFLY. <br /><br />
                    A continuación se detalla la información que recibe STARTFLY y como se recopila cuando se utilizan los productos y servicios de STARTFLY, así como cuando los usuarios se registran en la plataforma de Startfly. <br/><br />
                    De conformidad con lo establecido en la Ley Orgánica 15/1999 de 13 de diciembre, de Protección de Datos de Carácter Personal, todos los datos de carácter personal facilitados a través de STARTFLY, especialmente en los formularios de contacto, serán incorporados en un fichero automatizado responsabilidad de la web de STARTFLY, con la finalidad exclusiva de gestión de clientes potenciales, clientes y candidatos a empleo, así como envío de newsletters y novedades, y/o comunicaciones comerciales que puedan resultarles de interés. De este modo, mediante el envío de formularios como Usuario en STARTFLY, el titular de los datos manifiesta, de forma expresa, su consentimiento para el tratamiento de sus datos de carácter personal con las finalidades anteriormente descrita. <br/><br />
                    Se prevé la utilización de cookies, log, enlaces y otras tecnologías para almacenar las preferencias del usuario con el fin de mejorar la calidad de nuestros servicios, asegurar el funcionamiento técnico de la red, y desarrollar nuevas y mejores prestaciones. Si se desactivan o rechazan las cookies, puede ocurrir que algunas de las funciones y/o servicios de STARTFLY no funcionen correctamente. <br/><br />
                    STARTFLY informa a los Usuarios la posibilidad de ejercitar los derechos de acceso, cancelación, rectificación y oposición respecto de sus datos de carácter personal que constan en los ficheros de la web de STARTFLY, mediante comunicación escrita escaneada acompañada de una fotocopia del D.N.I. dirigida a startfly en la dirección de email startfly.group@gmail.com <br/><br />
                    El fichero se encuentra debidamente inscrito en el Registro de la Agencia Española de Protección de Datos y cumplen las Medidas de Seguridad requeridas por el Real Decreto 1720/2007. <br/><br />
                    STARTFLY presenta servicios de libre acceso a la totalidad de los usuarios que lo visitan. Los citados Usuarios sólo están autorizados al uso de la plataforma web de STARTFLY previa aceptación y cumplimiento de las condiciones de uso, que pueden ser consultadas en la web de STARTFLY, debiendo abandonar el sitio en caso contrario. <br/><br />
                    STARTFLY informa a sus Usuarios de que NO cede la información privada a ninguna otra empresa o persona, ni comercializa con los datos de sus Usuarios. Los datos de los Usuarios serán suministrados únicamente por STARTFLY según las formas establecidas en estas Políticas de Privacidad. La web de STARTFLY hará todo lo que esté a su alcance para proteger la privacidad de la información. Puede suceder que en virtud de órdenes judiciales, o de regulaciones legales, STARTFLY se vea compelido a revelar información a las autoridades o terceras partes bajo ciertas circunstancias, o bien en casos que terceras partes puedan interceptar o acceder a cierta información o transmisiones de datos en cuyo caso STARTFLY no responderá por la información que sea revelada.<br/><br />
                    STARTFLY emplea técnicas de seguridad para proteger los datos de accesos no autorizados. En cualquier caso, se debe tener en cuenta que la seguridad perfecta no existe en Internet. STARTFLY no se hace responsable por interceptaciones ilegales o violación de sus sistemas o bases de datos por parte de personas no autorizadas, ni del uso que se haga de ellos.
                    </p>
                </Container>
            </section>
            <Footer/>
        </>
    )
}
