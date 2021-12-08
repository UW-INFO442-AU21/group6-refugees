import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';

function PersecutionModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Persecution
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Persecution is defined generally as the infliction of suffering or harm, or a serious threat to your life or freedom. Harassment alone isn't enough, but things like death threats, torture, imprisonment, constant surveillance, pressure to join a group engaging in illegal activity, interference with your privacy, family, home, or correspondence, or discrimination in matters like housing, education, or passport issuance have all been found to qualify. Persecution must have been based on at least one of five grounds, either your race, religion, nationality political opinion, or membership in a particular social group.</p>
            <a href="https://www.alllaw.com/articles/nolo/us-immigration/who-eligible-asylum-refugee-protection.html">Source</a>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default PersecutionModal;