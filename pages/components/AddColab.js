import { Form, Button, Modal, Alert } from "react-bootstrap";
import {useState} from "react"



const AddColab = ({
  show,
  setShow,
  form,
  setFormValue,
  createColab,
  error,
}) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      if (!form.certificacao.includes(event.target.value)) {
        setFormValue(form => ({ certificacao: [...form.certificacao, event.target.value]}))
      }
    } else {
      setFormValue(form => ({ certificacao: form.certificacao.filter(cert => cert !== event.target.value) }));
    }
  }

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
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Cargo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o cargo"
                onChange={(e) =>
                  setFormValue({ ...form, cargo: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Formação</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) =>
                  setFormValue({ ...form, formacao: e.target.value })
                }
              >
                <option value="" selected disabled>
                  Selecione uma formação
                </option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Completo</option>
                <option>Ensino Superior Incompleto</option>
              </Form.Control>
            </Form.Group>

            <form>
          <div>
            <h5>Certificações</h5>
            <div class="custom-control custom-checkbox" >
              {
                ["CPA-10", "CPA-20", "CEA", "CGRPPS"].map(cert => {
                  return (
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id={cert} value={cert} onChange={handleCheckboxChange} />
                      <label class="custom-control-label" for={cert}>{cert}</label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </form>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Certificações</Form.Label>
              <div className="form-check form-check-inline ml-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cbxCPA-10"
                  value="CPA-10"
                  onChange={(e) => setFormValue(form => ({ certificacao: [...form.certificacao, e.target.value]}))}
                />
                <label className="form-check-label" for="inlineCheckbox1">
                  CPA-10
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cbxCPA-20"
                  value="CPA-20"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label className="form-check-label" for="inlineCheckbox2">
                  CPA-20
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="cbxCEA"
                  value="CEA"
                  onChange={(e) => setFormValue(form => ({ certificacao: [...form.certificacao, e.target.value]}))}
                />
                <label className="form-check-label" for="inlineCheckbox1">
                  CEA
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cbxCGRPPS"
                  value="CGRPPS"
                  onChange={(e) => setFormValue({ ...form, certificacao: (e.target.value)})}
                />
                <label className="form-check-label" for="inlineCheckbox2">
                  CGRPPS
                </label>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => createColab()}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddColab;
