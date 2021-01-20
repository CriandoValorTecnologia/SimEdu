import Head from "next/head";
import React from 'react'
import style from "../style/index.less";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ListGroup, Button, Table } from "react-bootstrap";
import { saveColab, getColabs } from "../redux/actions/main";
import Header from "./components/Header";
import AddColab from "./components/AddColab";


function Colab() {

  const error = useSelector(state => state.error)
  const dispatch = useDispatch()

  const handleSaveColab = () => dispatch(saveColab(form))

  const [show, setShow] = useState(false);
  const [form, setFormValue] = useState("");

  return (
    <>
    <div className="xcontainer">
      <Head>
        <title>Planejamento Educacional para RPPS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AddColab
          show={show}
          setShow={setShow}
          form={form}
          setFormValue={setFormValue}
          saveColab={handleSaveColab}
          error={error}
        />
        <div className="main">
          <Header />
          <h1 className="title">Planejamento Educacional para RPPS</h1>
          <Button
            variant="info"
            className="mt-2 mb-2"
            onClick={() => setShow(!show)}
          >
            + Adicionar Colaborador
          </Button>
          {/*
          <div className="tabelacolab">
            {
              colabs && colabs.length > 0 ?
              colabs.map((colab,i) => 
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Função/Cargo</th>
              </tr>
            </thead>
            <tbody>
              <tr key={i}>
                <td>{colab.nome}</td>
                <td>{colab.cargo}</td>
              </tr>
            </tbody>
          </Table>
              )
            : "Nenhum colaborador adicionado"
            }
          </div>
          */}
        </div>
      </main>
    </div>
    </>
  );
}

export default Colab;
