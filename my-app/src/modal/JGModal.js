import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

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
            CREATE GROUP
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='groupForm'>
            <Container>
                <Form>
                    <Form.Group controlId="form.Name" className='formmar'>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                </Form>
                <Button>Join Group</Button>
            </Container>
        </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default JGModal;