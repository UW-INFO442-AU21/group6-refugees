import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';

function ReasonableFearModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Reasonable Fear
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Reasonable fear screenings are for individuals who are subject to administrative removal from the US because they are aggravated felons or the US has reinstated a prior order of removal. If the asylum officer determines the claim to be valid, the individual will have a hearing before an immigration judge who will decide if she is eligible for withholding of removal. The applicant must prove a “reasonable possibility” that she will be persecuted or tortured upon return to her home country.</p>
            <a href="https://www.imwong.com/immigration-news/our-immigration-blog-credible-vs-reasonable-fear/">Source</a>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ReasonableFearModal;