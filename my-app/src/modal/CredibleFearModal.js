import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';

function CredibleFearModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Credible Fear
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>An individual will be found to have a credible fear of persecution if he or she establishes that there is a “significant possibility” that he or she could establish in a full hearing before an Immigration Judge that he or she has been persecuted or has a well-founded fear of persecution or harm on account of his or her race, religion, nationality, membership in a particular social group, or political opinion if returned to his or her country.</p>
            <a href="https://www.dhs.gov/immigration-statistics/readingroom/RFA/credible-fear-cases-interview">Source</a>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default CredibleFearModal;