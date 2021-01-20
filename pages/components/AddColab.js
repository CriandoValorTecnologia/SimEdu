import { Form, Button, Modal, Alert } from "react-bootstrap";
import { useEffect } from "react"

const AddColab = ({
  show,
  setShow,
  form,
  setFormValue,
  saveColab,
  error
}) => {

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Colaborador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do colaborador"
                onChange={(e) =>
                  setFormValue({ ...form, nome: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                type="number"
                min="0"
                placeholder="Insira a idade do Colaborador"
                onChange={(e) =>
                  setFormValue({ ...form, idade: e.target.value })
                }
              />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
              <Form.Label>Cargo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o cargo"
                onChange={(e) =>
                  setFormValue({ ...form, cargo: e.target.value })}
              />

            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira o e-mail"
                onChange={(e) =>
                  setFormValue({ ...form, email: e.target.value })
                }
              />
            </Form.Group>
            
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Certificações</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira as certificações"
                onChange={(e) =>
                  setFormValue({ ...form, certificacao: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Formação</Form.Label>
              <Form.Control as="select"
              onChange={(e) => setFormValue({ ...form, formacao: e.target.value})}>
                  <option value="" selected disabled>Selecione uma formação</option>
                  <option>Ensino Médio Completo</option>
                  <option>Ensino Superior Completo</option>
                  <option>Ensino Superior Incompleto</option>
              </Form.Control>
              <br />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => saveColab()}
          >
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddColab;
