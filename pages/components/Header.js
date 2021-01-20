import Link from "next/link";
import Head from "next/head";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useState, useEffect } from "react"
import { restore } from "../../redux/actions/main"

function Header(props) {

  const {userInfo, restore} = props

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_info"))
    if(userData){
      restore(userData)
    }
  }, [])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Navbar className="navcomp navbar-fixed-top" bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            width="270"
            height="28.14"
            src="https://criandovaloreducacao.com.br/wp-content/uploads/2020/05/logo-edu.png"
            className="header_logo header-logo"
            alt="Criando Valor – Educação"
          />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav className="linksnav">
          <Nav.Link href="http://grupocriandovalor.com.br">Inicio </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/quem-somos/">
            Quem somos
          </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/loja-virtual/">
            Loja Virtual
          </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/social/">
            Social
          </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/centro-de-inovacao/">
            Inovação
          </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/midias/">
            Mídias
          </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/podcast/">
            Podcast
          </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/blog/">
            Blog
          </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/tour-virtual/">
            Tour Virtual
          </Nav.Link>
          <li>|</li>
          <Nav.Link href="https://criandovaloreducacao.com.br/fac/">
            FAQ
          </Nav.Link>
          <Button
            className="navbutton"
            h="17"
            w="92"
            variant="info"
            href="https://educacaocriandovalor.com.br/login/index.php"
          >
            Área do Aluno
          </Button>
        </Nav>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {
  restore
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
