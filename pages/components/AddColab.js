import { Form, Button, Modal, Alert} from 'react-bootstrap'

const AddColab = ({ show, setShow, form, setFormValue, addColab, isLoading, error }) => {

    return (
      <>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Colaborador</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {error &&
            <Alert variant='danger'>
              {error}
            </Alert>
          }
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Insira o nome do colaborador" 
                onChange={(e) => setFormValue({...form, nome: e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Idade</Form.Label>
              <Form.Control 
                type="number"
                min="0"
                placeholder="Insira a idade"
                onChange={(e) => setFormValue({...form, idade: e.target.value})} 
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Insira o email" 
                onChange={(e) => setFormValue({...form,  email: e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Formação</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Insira a formação" 
                onChange={(e) => setFormValue({...form,  formacao: e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Certificações</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Insira as certificações" 
                onChange={(e) => setFormValue({...form, certificacao: e.target.value})}
              />
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={() => addColab()}
              disabled={isLoading}>
              {isLoading ? '...loading' : 'Adicionar'}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  export default AddColab;