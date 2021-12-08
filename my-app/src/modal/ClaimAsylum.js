import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';

function ClaimAsylumModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Claim of Asylum
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>A person can either make an affirmative or a defensive claim of asylum. An affirmative claim means that the asylum seeker is not currently in removal proceedings, while an individual who files a defensive claim of asylum is already in such proceedings.</p>
            <a href="https://www.imwong.com/immigration-news/our-immigration-blog-credible-vs-reasonable-fear/">Source</a>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ClaimAsylumModal;