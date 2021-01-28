import Head from "next/head";
import React from "react";
import style from "../style/index.less";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { ListGroup, Button, Table } from "react-bootstrap";
import {createColab,getInfo,getColabs,deleteColab,updateColab, getColab} from "../redux/actions/main";
import Header from "./components/Header";
import AddColab from "./components/AddColab";
import EditColab from "./components/EditColab";
import editicon from "./assets/editicon.png";
import deleteicon from "./assets/deleteicon.png";

function Colab(props) {
  const { colab, colabs, error } = props.userInfo;
  const [show, setShow] = useState(false);
  const [ushow, usetShow] = useState(false);
  const [form, setFormValue] = useState("");
  const { deleteColab } = props;

  useEffect(() => {
    props.getInfo();
  }, []);


  useEffect(() => {
    props.getColabs();
    props.getColab();
  }, []);


  const createColab = () => {
    props.createColab(form);
  };

  const updateColab = () => {
    props.updateColab(form);
  };

  function delColab(d) {
    window.location.reload();
    deleteColab(d);
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  function edcolab(colab) {
    const data = colab
    localStorage.setItem("colab", JSON.stringify(data))
    usetShow(!ushow)
  }

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
            createColab={createColab}
            error={error}
          />
          {/* <EditColab
            show={ushow}
            setShow={usetShow}
            form={form}
            setFormValue={setFormValue}
            getColab={getColab}
            updateColab={updateColab}
            error={error}
            props={props}
            colab={colab}
          /> */}
          <div className="main">
            <Header />
            <div className="AddColabTop">
              <h1 className="txtPlanejamento">
                Planejamento Educacional para RPPS
              </h1>
              <Button
                variant="info"
                className="btnAddColab"
                onClick={() => setShow(!show)}
              >
                + Adicionar Colaborador
              </Button>
            </div>
            <div className="tabelacolab">
              <Table className="tblColab">
                <thead variant="dark">
                  <tr>
                    <th className="tblNome">Nome</th>
                    <th className="tblCargo">Cargo</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                {colabs && colabs.length > 0 ? (
                  colabs.map((colab, i) => (
                    <tbody key={i}>
                      <tr>
                        <td><a data-tooltip={"Formacao: "+colab.formacao +"\n Certificacao: "+colab.certificacao}>{colab.nome}</a></td>
                        <td>{colab.cargo}</td>
                        <img
                          src={editicon}
                          type="button"
                          id={colab._id}
                          width="20"
                          height="20"
                          className="my-3 mr-2"
                          //onClick={() => edcolab(colab)}
                        />
                        <img
                          src={deleteicon}
                          type="button"
                          width="20"
                          height="20"
                          className="my-3 ml-2"
                          onClick={() => delColab(colab._id)}
                        />
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <label>Nenhum colaborador adicionado</label>
                )}
              </Table>
            </div>
            <Button className="btnAvancar mb-1 mt-4" href="/colab">
              Avançar
            </Button>
          </div>
          <div></div>
        </main>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main
});

const mapDispatchToProps = {
  getInfo,
  createColab,
  getColabs,
  updateColab,
  deleteColab,
  getColab
};

export default connect(mapStateToProps, mapDispatchToProps)(Colab);
