import Head from 'next/head'
import style from "../style/index.less"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import {ListGroup, Button} from 'react-bootstrap'
import { addColab, getColabs } from "../redux/actions/main"
import Header from './components/Header'
import AddColab from './components/AddColab';

function Colabs(props) {

  const { colabs, loading, error } = props.userInfo

  const [ show, setShow ] = useState(false);
  const [ form, setFormValue ] = useState("");
  

  const addColab = () => props.addColab(form);

  return (
    <div className="xcontainer">
      <Head>
        <title>Simulador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AddColab 
            show={show}
            setShow={setShow}
            form={form}
            setFormValue={setFormValue}
            isLoading={loading}
            error= {error}
            addColab={addColab}
          />
        <div className="main">        
          <Header />
          <h1 className="title">
            Simulador de Planejamento Financeiro
          </h1>
          <Button 
            variant="info" 
            className='mt-2 mb-2'
            onClick={() => setShow(!show)}>
              + Adicionar Colaborador
          </Button>
          
          
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  addColab, getColabs
}

export default connect(mapStateToProps, mapDispatchToProps)(Colabs)