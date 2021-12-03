import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function FormModal(props) {
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
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="form.GName" className='formmar'>
                        <Form.Label>Group Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter group name" />
                    </Form.Group>
                    <Form.Group controlId="form.Email" className='formmar'>
                        <Form.Label>UW Email:</Form.Label>
                        <Form.Control type="email" placeholder="name@uw.edu" />
                    </Form.Group>
                    <Form.Group controlId="form.Phone" className='formmar'>
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="phone" placeholder="(000)-000-0000" />
                    </Form.Group>
                    <Form.Group controlId="form.Loc" className='formmar'>
                        <Form.Label>Location (City,ST):</Form.Label>
                        <Form.Control type="text" placeholder="Seattle, WA" />
                    </Form.Group>
                    <Form.Group controlId="form.Partner" className='formmar'>
                        <Form.Label>Partnership With:</Form.Label>
                        <Form.Control type="text" placeholder="ACLU" />
                    </Form.Group>
                    <Form.Group controlId="form.Num" className='formmar'>
                        <Form.Label>Number of Volunteers:</Form.Label>
                        <Form.Control type="number" placeholder="4" />
                    </Form.Group>
                    <Form.Group controlId="form.Date" className='formmar'>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="date" placeholder="November 30, 2021" />
                    </Form.Group>
                    <Form.Group controlId="form.Time" className='formmar'>
                        <Form.Label>Time Start:</Form.Label>
                        <Form.Control type="time" placeholder="10:30 AM" />
                    </Form.Group>
                    <Form.Group controlId="form.Time" className='formmar'>
                        <Form.Label>Time End:</Form.Label>
                        <Form.Control type="time" placeholder="02:00 PM" />
                    </Form.Group>
                </Form>
                <Button>Create Group</Button>
            </Container>
        </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default FormModal;