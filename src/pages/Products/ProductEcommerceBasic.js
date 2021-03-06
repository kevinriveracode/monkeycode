import React, { useState, useEffect } from "react"
import { Container, Grid, Button, Icon, Image, Form } from "semantic-ui-react"
import { loadStripe } from "@stripe/stripe-js"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {Helmet} from "react-helmet"
import "./ProductWeb.scss"
const stripePromise = loadStripe(
  "pk_live_51HWHRmHTnDUNNyj1AMjBKSM5dSVzzXVqMoGPQ5JkhVY6luR6DXYc6FUYWGlyFSm8vOKSnPii1xwAguvMLwgJbfzH00MGNxrO7o"
)

export default function ViewPackBasic(props) {
  const [message, setMessage] = useState("");
  const [openCheckout, setOpenCheckout] = useState(false);
  const infoPage = {
    image:
      "https://monkeycode.s3.eu-west-3.amazonaws.com/packroma.svg",
    title: "PACK DE DISEÑO ECOMMERCE ROMA",
    price: "500 €",
    description:
      "Desarrollamos tu tienda online con todas las garantías para que triunfe. No temas a la competencia, pondremos todos nuestros conocimientos y entusiasmo a tu disposición para que tu ecommerce sea un éxito. Diseño web original y potente, comunicación que conecta, programación exquisita y facilidad de gestión. Empieza a vender.",
    urlCheckout: "https://monkeycodebackend.herokuapp.com/buy-pack-roma",
  }
  useEffect(() => {
    // Check to see if this is a redirect back from checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get("success")) {
      setMessage("Orden placed!! Todo perfecto")
    }
    if (query.get("canceled")) {
      setMessage("Order canceled")
    }
  }, [])
  async function handleClick(ev , info) {
    const stripe = await stripePromise
    const url = "http://localhost:3000/buy-pack-roma";
    const urlprod = "https://stagging-startfly.herokuapp.com/buy-pack-roma";
    const response = await fetch(urlprod, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name: info.name,
        lastname: info.lastname,
        email: info.email,
        payment: info.paymentMethod
      })
    })
    const session = await response.json()
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })
  }
  const features = [
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/design.svg",
      text: 'DISEÑOS ESPECTACULAR'
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/tiendashop.svg",
      text: 'DESARROLLO EN PRESTASHOP'
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/producto-entrega.svg",
      text: 'INTEGRACIÓN DE PAGO Y ENVIO'
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/responsive-product.png",
      text: 'WEB RESPONSIVE'
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/autoadministrable.svg",
      text: 'AUTOGESTIONABLE'
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/caja.svg",
      text: 'PRODUCTOS INFINITOS'
    }
  ]
  
  const faqs = [
    {
      answer: 'Una vez completes el proceso de compra, récibiras acceso a un formulario en el recogeremos información sobre tu proyecto y en base a eso empezaremos la construcción de tu sitio.',
      question: 'Te interesa que diseñemos tu web. ¿Qué pasos debes seguir?'
    },
    {
      answer: 'Podrás pagar tus pedidos de diseño web tanto con targeta como con transferencia bancaria. Proximamente añadiremos otros metodos de pago que te permitan la financiación de tu web.',
      question: '¿Qué tipo de medios de pago ofrecemos?'
    },
    {
      answer: 'Por supuesto, nuestro personal esta para ayudarte siempre que lo necesites. Envia un correo electronico a startfly.support@gmail.com y nos podremos en contacto contigo lo mas pronto posible.',
      question: '¿Podrás comunicarte con nosotros?'
    },
    {
      answer: 'Dependerá de la complejidad y extensión del proyecto y del tiempo que tardes en facilitarme la información basica para el diseño. Sin embargo, si todo va bien, desde el envio de toda la información necesaria tendremos la web lista de 4 a 7 días laborales.',
      question: '¿Cuándo tendré mi web?'
    },
    {
      question: '¿Podré gestionar yo mismo la web?',
      answer: 'Por supuesto. Dejaremos tu web preparada para que puedas modificar los textos y los parámetros básicos, incluso algunos de diseño. No te hará falta contratar ningún servicio externo.'
    },
    {
      question: '¿Qué ocurre sdiseño-tienda-online/i el diseño no me gusta?',
      answer: 'Contamos con varias fases de revisión, y siempre que estemos dentro del plan de trabajo fijado, no dejaremos de hacer cambios que sean necesarios hasta que el diseño sea de tu agrado.'
    },
    
  ]
  return (
    <>
      <Header />
      <Helmet>
        <html lang="es" />
        <title>Aumenta tu presencia en internet | pack Roma | Tienda online| Startfly</title>
        <meta name="description" content="Desarrollamos tu tienda online con todas las garantías para que triunfe. No temas a la competencia, pondremos todos nuestros conocimientos y entusiasmo a tu disposición para que tu ecommerce sea un éxito. " ></meta>
        <meta name="keywords" content="pack de diseño web milan, precios de paginas web, precio pagina web, diseño web, diseño paginas web, paginas web valencia, diseño de paginas web valencia, diseño y creacion web, diseño paginas web valencia, agencia diseño web, desarrollo web valencia, creadores de paginas web en valencia, empresas paginas web valencia, desarrollo de paginas web valencia, diseño y desarrollo web valencia, agencia de diseño de paginas web, agencia de diseño web, empresas de diseño web valencia, crear web valencia, diseño web paginas web, diseño creacion paginas web, diseño web web, creacion paginas web, contratar diseñador web, paginas de diseño online" />
        <meta name="robots" content="index"/>
        <meta property="og:site_name" content="Startfly"></meta>
        <meta property="og:locale" content="es_ES"></meta>
        <link rel="canonical" href="https://startfly.es/product/diseño-web-pack-roma/"></link>
      </Helmet>
      <section className="product">
        <Container>
          <Grid columns={16}>
            <Grid.Column className="product__container-image" mobile={16} tablet={8} computer={8}>
              <Image src={infoPage.image} className="product__image" alt={infoPage.title} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <h1 className="product__title">{infoPage.title}</h1>
              <p className="product__price">{infoPage.price}</p>
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <span className="product__sub">
                (Recomendado por nuestros clientes)
              </span>
              <p className="product__description">{infoPage.description}</p>
              <Button
                className="product__button"
                onClick={() => setOpenCheckout(openCheckout ? false : true)}
              >
                {
                  openCheckout ? 'Ver ficha de producto' : 'Comprar'
                }
              </Button>
            </Grid.Column>
          </Grid>
        </Container>
        {
          openCheckout && (<Checkout sendInfo={handleClick}  />)
        }
        {
          !openCheckout && (
            <Container fluid className="product-sheet">
              <Grid>
                <Container>
                  <Grid className="product-sheet__grid">
                    {
                      features.map((entry) => (<MiniatureProduct image={entry.image} text={entry.text}/>))
                    }
                  </Grid>
                  <Grid className="answer">
                    <Grid.Column computer={16}>
                      <h4 className="answer__title">PREGUNTAS FRECUENTES</h4>
                    </Grid.Column>
                    {
                      faqs.map((entry) => (<Faq 
                        question={entry.question}
                        answer={entry.answer}
                      />))
                    }
                  </Grid>
                </Container>
              </Grid>
            </Container>
          )
        }
      </section>
      <Footer />
    </>
  )
}

function Checkout(props){ 
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email,setEmail] = useState('');
  const [paymentMethod , setPaymentMethod] = useState('');
  const [errorBuy,setErrorBuy] = useState(false);
  const { sendInfo } = props;
  const [loading,setLoading] = useState(false);

 
  function handlerBuyService(ev) {
    const newBuy = {
      name: name,
      lastname: lastname,
      email: email,
      paymentMethod: paymentMethod
    }
    if(newBuy.name === '' || newBuy.name.length < 2) {
      setErrorBuy(true);
      return
    }  
    if(newBuy.email === '' || newBuy.email.length < 2 || newBuy.email.includes('@') === false) {
      setErrorBuy(true);
      return
    }  
    if(newBuy.paymentMethod === '') {
      setErrorBuy(true)
      return
    }
    setLoading(true)
    
    props.sendInfo(ev , newBuy);
  }
  async function handlerBuyTransfer(ev) {
    setLoading(true);
    const newBuy = {
      name: name,
      lastname: lastname,
      email: email,
      paymentMethod: paymentMethod
    }
    const url = "http://localhost:3000/buy-pack-roma-transfer";
    const urlprod = "https://stagging-startfly.herokuapp.com/buy-pack-roma-transfer";
    const response = await fetch(url, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        payment: paymentMethod
      })
    })
    setLoading(false);
    window.location="/pack-purchase-complete-transfer/"
  }
  return(
    <Container className="checkout">
      <Grid>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <h2 className="checkout__title">Checkout</h2>   
          {
            errorBuy === true && (<p style={{color:'red',fontFamily: 'Roboto Condensed'}}>Rellene todos los datos antes de continuar</p>)
          }
          <Form>
            <Form.Group>
              <Form.Input value={name} onChange={ev => setName(ev.target.value)} className="checkout__input" label='Nombre *' placeholder='Nombre' width={8} />
              <Form.Input value={lastname} onChange={ev => setLastname(ev.target.value)} className="checkout__input" label='Apellido *' placeholder='Apellido' width={8} />
            </Form.Group>
            <Form.Group>
              <Form.Input value={email} onChange={ev => setEmail(ev.target.value)} className="checkout__input" label='Email *' placeholder='Email' width={16} />
            </Form.Group>  
          </Form>
          <Grid.Column>
            <h6 className="checkout__subtitle">Seleccione el metodo de pago</h6>
          </Grid.Column>
          <Grid.Column className="checkout__payments">
            <div onClick={() => setPaymentMethod('card')} className={`${paymentMethod === 'card' && ('active')} checkout__payment-method`}>
              <Image src="https://monkeycode.s3.eu-west-3.amazonaws.com/visa.svg" />
              <p>Targeta</p>
            </div>
            <div onClick={() => setPaymentMethod('transfer')} className={`${paymentMethod === 'transfer' && ('active')} checkout__payment-method`}>
              <Image src="https://monkeycode.s3.eu-west-3.amazonaws.com/transferencia.svg" />
              <p>Transferencia</p>
            </div>
          </Grid.Column>
  
        </Grid.Column>
        <Grid.Column computer="8" tablet={8} mobile={16}>
          <h2 className="checkout__title">Resumen</h2>   
          <section className="checkout-resume">
            <div className="checkout-resume__item">
              <p><span><Image src="https://monkeycode.s3.eu-west-3.amazonaws.com/web-shop.svg" /></span>Diseño Ecommerce: PACK ROMA</p>
              <span>500 €</span>
            </div>
            <div className="checkout-resume__item">
              <p><b>SUBTOTAL</b></p>
              <span>500 €</span>
            </div>
            <div className="checkout-resume__item">
              <p><b>TOTAL</b></p>
              <span>500 €</span>
            </div>
            {
              paymentMethod === ''  && (<Button loading={loading} className="checkout__buy" onClick={handlerBuyService} content="Comprar" />)
            }
            {
              paymentMethod === 'card'  && (<Button loading={loading} className="checkout__buy" onClick={handlerBuyService} content="Comprar" />)
            }
            {
              paymentMethod === 'transfer' && (<Button loading={loading} className="checkout__buy" onClick={handlerBuyTransfer} content="Comprar" />)
            }
            <p className="checkout__subtitle checkout__subtitle--span">*Al darle a comprar Acepta todas nuestra politicas de privacidad.</p>
          </section>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

function Faq(props){
  const {answer, question} = props;
  const [showAnswer,setShowAnswer] = useState(false);

  return( 
    <Grid.Column className="faq-container" computer={16}>
      <div className="faq">
        <p>{question}</p>
        <Image onClick={() => setShowAnswer(!showAnswer)} src="https://monkeycode.s3.eu-west-3.amazonaws.com/arrow.svg" />
      </div>
      {showAnswer && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
      
    </Grid.Column>
  )
}
function MiniatureProduct(props){
  const {image , text} = props;
  return(
    <Grid.Column  className="miniature">
        <Image className="miniature__image" src={image} alt="" />
  <h4 className="miniature__title">{text}</h4> 
    </Grid.Column>
  )
}
