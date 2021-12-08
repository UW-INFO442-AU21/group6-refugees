import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';

function AsyleeModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Asylee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>An asylee is a person who meets the definition of refugee and is already present in the United States or is seeking admission at a port of entry.</p>
            <a href="https://www.dhs.gov/immigration-statistics/refugees-asylees">Source</a>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default AsyleeModal;