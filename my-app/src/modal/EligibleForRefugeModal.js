import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';

function EligibleForRefugeModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Eligible for Refuge
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>To be eligible to seek refuge, you must be from a country where you have undergone persecution or have a well-founded fear of being persecuted if you return to that country in the future, you may decide to seek either refugee protection from the U.S.</p>
            <a href="https://www.alllaw.com/articles/nolo/us-immigration/who-eligible-asylum-refugee-protection.html">Source</a>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default EligibleForRefugeModal;