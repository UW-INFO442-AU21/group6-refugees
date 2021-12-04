import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


function VBModal_Join(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Volunteer Booth
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Hosted by: Jane Dove</h4>
            <p>
                November 5, 2021<br/>
                05:00 PM - 07:00 PM<br/>
                Issaquah, WA
            </p>
            <h4>Partnership with: <br/>
                International Rescue Committee
            </h4>
            <Card className='cardbg mb-2'>
                <div>
                    <Card.Body>
                        <Card.Title>Current Members</Card.Title>
                        <Card.Text>
                            1. And Ratcliffe <br/>
                            2. Rhonda Appleton <br/>
                            3. Persephone Mejia <br/>
                            4. Nylah Guerra <br/>
                            5. Nabilah Owen <br/>
                            6. Anastazia Browman <br/>
                            7. Fname Lname
                        </Card.Text> 
                    </Card.Body>
                </div>
            </Card>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default VBModal_Join;