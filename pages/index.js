import Head from "next/head";
import style from "../style/index.less";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { setInfo } from "../redux/actions/main"
import { Form, Col, Button } from "react-bootstrap";
import { Container } from "next/app";



function Home(props) {

  const { userInfo, setInfo } = props;
  const [ rpps, setRPPS ] = useState("")


  return (
    <>
    <div className="xcontainer">
      <Head>
        <title>Planejamento Educacional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <Header />
          <div className="firstpagecontent">
            <h2 className="title">
              Olá! Seja bem-vindo ao Planejamento Educacional para
              RPPS.
              <br />
            </h2>
            <p className="text-center">
              Esse simulador tem como objetivo auxiliar o gestor do RPPS a se
              planejar,
               anualmente, na capacitação dos servidores. 
              Nele, o gestor tem acesso a todos os cursos oferecidos pela
              Criando Valor e, com isso,
               mapear a capacitação que os servidores do RPPS irão
              precisar.
              
              Ao finalizar o simulador, o gestor conseguirá visualizar como
              ficou o planejamento educacional do RPPS durante todo ano,
               por servidor e por curso, além de receber o orçamento deste
              plano, com um preço EXCLUSIVO para o seu RPPS.
            </p>
          </div>
          <label>Nada</label>
          <Form className="txtrpps1">
            <Form.Row className="align-items-center">
              <Col xs={7}>
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  required
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Insira seu RPPS"
                  onChange={(e) => setRPPS(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button onClick={() => setInfo(rpps)} className="mb-2" href="/">
                  Avançar
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </main>
    </div>
    </>
  );
}


export default (Home)