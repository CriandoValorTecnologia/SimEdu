import Head from "next/head";
import style from "../style/index.less";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { ListGroup, Button, Table } from "react-bootstrap";
import { saveColab, getColabs } from "../redux/actions/main";
import Header from "./components/Header";
import AddColab from "./components/AddColab";

function Colabs(props) {

  const saveColab = () => props.saveColab(form);

  const { colabs, loading, error } = props.userInfo
  const [show, setShow] = useState(false);
  const [form, setFormValue] = useState("");

  return (
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
          isLoading={loading}
          error={error}
          saveColab={saveColab}
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

          <div className="tabelacolab">
          <Table striped bordered hover size="xl">
            <thead class="thead-dark">
              <tr>
                <th>Nome</th>
                <th>Função/Cargo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Joao</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>Maria</td>
                <td>Gerente</td>
              </tr>
              <tr>
                <td>Fernanda</td>
                <td>TI</td>
              </tr>
            </tbody>
          </Table>
              
          </div>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Colabs);