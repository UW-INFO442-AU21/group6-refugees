import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';

function RefugeeModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Refugee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Refugees are any person who is outside any country of such person's nationality or, in the case of a person having no nationality, is outside any country in which such person last habitually resided, and who is unable or unwilling to return to, and is unable or unwilling to avail himself or herself of the protection of, that country because of persecution or a well-founded fear of persecution on account of race, religion, nationality, membership in a particular social group, or political opinion.</p>
            <a href="http://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title8-section1101&num=0&edition=prelim">Source</a>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default RefugeeModal;