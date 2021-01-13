import Link from 'next/link'
import Head from 'next/head'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { connect } from "react-redux"
import image from '../assets/LogoPreto.png'

function Header() {
  
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>

      <Navbar bg="info" variant="light">
        <Navbar.Brand href="/">
            <img src={image} height="57" width="433.6"/>
        </Navbar.Brand>
    </Navbar>
    </>
  )
}

const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)