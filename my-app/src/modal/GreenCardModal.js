import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React from 'react';

function GreenCardModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Applying for Green Card
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Refugees are required to apply for Lawful Permanent Resident (“green card”) status one year after being admitted, and asylees may apply for green card status one year after their grant of asylum. The Office of Immigration Statistics (OIS) annual flow reports on refugees and asylees contain information obtained from the Worldwide Refugee Admissions Processing System (WRAPS) of the Bureau of Population, Refugees, and Migration of the U.S. Department of State on the numbers and demographic profiles of persons admitted to the United States as refugees, and those applying for and granted asylum status during a given fiscal year.</p>
            <a href="https://www.dhs.gov/immigration-statistics/refugees-asylees">Source</a>
        </Modal.Body>
        <Modal.Footer>
            <Button aria-label="Close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default GreenCardModal;