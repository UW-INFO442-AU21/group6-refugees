import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

function JGModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Join Group
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='groupForm'>
            <Container>
                <Form>
                    <Form.Group controlId="form.Name" className='formmar'>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Fname Lname" readOnly/>
                    </Form.Group>
                    <Form.Group controlId="form.Email" className='formmar'>
                        <Form.Label>UW Email:</Form.Label>
                        <Form.Control type="email" placeholder="email@uw.edu" readOnly/>
                    </Form.Group>
                    <Form.Group controlId="form.Phone" className='formmar'>
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="phone" placeholder="(111)-222-3333" readOnly/>
                    </Form.Group>
                </Form>
                <LinkContainer to="/joingroup">
                    <Nav.Link>
                        <Button aria-label="Join Group">Join Group</Button>
                    </Nav.Link>
                </LinkContainer>
            </Container>
        </div>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default JGModal;