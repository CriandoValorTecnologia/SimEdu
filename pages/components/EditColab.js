// import { Form, Button, Modal, Alert } from "react-bootstrap";
// import { useEffect, useState } from "react";


// const EditColab = ({
//   show,
//   setShow,
//   form,
//   setFormValue,
//   getColab,
//   updateColab,
//   error,
//   props,
//   colab
// }) => {

//   useEffect(() => {
//     props.getColab();
//   }, []);

//   return (
//     <>
//       <Modal show={show} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Editar Colaborador</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Nome Completo</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Insira um nome"
//                 value=""
//                 onChange={(e) =>
//                   setFormValue({ ...form, nome: e.target.value })
//                 }
//               />
//             </Form.Group>

//               <Form.Group controlId="formBasicEmail">
//               <Form.Label>Cargo</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Insira o cargo"
//                 onChange={(e) =>
//                   setFormValue({ ...form, cargo: e.target.value })}
//               />

//             </Form.Group>
            
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Certificações</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Insira as certificações"
//                 onChange={(e) =>
//                   setFormValue({ ...form, certificacao: e.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicEmail">
//             <Form.Label>Formação</Form.Label>
//               <Form.Control as="select"
//               onChange={(e) => setFormValue({ ...form, formacao: e.target.value})}>
//                   <option value="" selected disabled>Selecione uma formação</option>
//                   <option>Ensino Médio Completo</option>
//                   <option>Ensino Superior Completo</option>
//                   <option>Ensino Superior Incompleto</option>
//               </Form.Control>
//               <br />
//             </Form.Group>
            
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShow(false)}>
//             Cancelar
//           </Button>
//           <Button
//             variant="primary"
//             //onClick={() => updateColab(colab)}
//           >
//             Adicionar
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default EditColab;
