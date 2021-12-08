import './learn.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RefugeeModal from './modal/RefugeeModal';
import AsyleeModal from './modal/AsyleeModal';
import EligibleForRefugeModal from './modal/EligibleForRefugeModal';
import PersecutionModal from './modal/PersecutionModal';
import GreenCardModal from './modal/GreenCardModal';
import ClaimAsylumModal from './modal/ClaimAsylum';
import CredibleFearModal from './modal/CredibleFearModal';
import ReasonableFearModal from './modal/ReasonableFearModal';
import Button from 'react-bootstrap/Button';
import React from 'react';

function Learn() {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);
    const [modalShow6, setModalShow6] = React.useState(false);
    const [modalShow7, setModalShow7] = React.useState(false);
    const [modalShow8, setModalShow8] = React.useState(false);
    return(
        <div className = "Learn">
            <header>
                <h1 className="LearnHeader">LEARN</h1>
                <h2 className="LearnDesc">Watch this documentary to learn how individual situations
                    are taken through the process of applying for asylum and
                    refuge in the United States.</h2>
            </header>
            <h2 className="VideoTitleHeader">Well-Founded Fear</h2>
            <p className="VideoDesc">The following documentary called “Well-Founded Fear“ showcases
                the system of Asylum and Refuge in the the United States
                according to the U.S. Immigration and Naturalization Service.
                On average, only 1 in 200 asylum applicants are ever admitted
                as a refugee. The film analyzes situational scenarios of
                several asylum applicants and the associated asylum officers
                that interview these individuals.</p>
            <div className="float-video">
                <iframe className = "video" aria-label="Well-founded fear" width="600" height="350" src="https://www.youtube.com/embed/bsW8e3Ys04I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <h2 className="VocabHeader">Related Vocabulary</h2>
            <p className="VocabDesc">There are terms that are important to better understand the process of asylum or refuge amongst the legal and social aspects. Below are some words we believe are helpful to know.</p>
            <div className = "vocabModals">
                <Row xs={1} md={2} lg='auto' className="g-4">
                <div className="vocab-btn">
                    <Button className="vocab-btn" aria-label="Refugee" variant="primary" onClick={() => setModalShow1(true)}>
                    Refugee
                    </Button>
                    <RefugeeModal
                    show={modalShow1}
                    onHide={() => setModalShow1(false)}
                    />
                </div>
                <div className="vocab-btn">
                    <Button className="vocab-btn" aria-label="Asylee" variant="primary" onClick={() => setModalShow2(true)}>
                    Asylee
                    </Button>
                    <AsyleeModal
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                    />
                </div>
                <div className="vocab-btn">
                    <Button className="vocab-btn" aria-label="Eligible for Refuge" variant="primary" onClick={() => setModalShow3(true)}>
                    Eligible for Refuge
                    </Button>
                    <EligibleForRefugeModal
                    show={modalShow3}
                    onHide={() => setModalShow3(false)}
                    />
                </div>
                <div className="vocab-btn">
                    <Button className="vocab-btn" aria-label="Persecution" variant="primary" onClick={() => setModalShow4(true)}>
                    Persecution
                    </Button>
                    <PersecutionModal
                    show={modalShow4}
                    onHide={() => setModalShow4(false)}
                    />
                </div>
                <div className="vocab-btn">
                    <Button className="vocab-btn" aria-label="Applying for Green Card" variant="primary" onClick={() => setModalShow5(true)}>
                    Applying for Green Card
                    </Button>
                    <GreenCardModal
                    show={modalShow5}
                    onHide={() => setModalShow5(false)}
                    />
                </div>
                <div className="vocab-btn">
                    <Button className="vocab-btn" aria-label="Claim of Asylum" variant="primary" onClick={() => setModalShow6(true)}>
                    Claim of Asylum
                    </Button>
                    <ClaimAsylumModal
                    show={modalShow6}
                    onHide={() => setModalShow6(false)}
                    />
                </div>
                <div className="vocab-btn">
                    <Button className="vocab-btn" aria-label="Credible Fear" variant="primary" onClick={() => setModalShow7(true)}>
                    Credible Fear
                    </Button>
                    <CredibleFearModal
                    show={modalShow7}
                    onHide={() => setModalShow7(false)}
                    />
                </div>
                <div className="vocab-btn">
                    <Button className="vocab-btn" aria-label="Reasonable Fear" variant="primary" onClick={() => setModalShow8(true)}>
                    Reasonable Fear
                    </Button>
                    <ReasonableFearModal
                    show={modalShow8}
                    onHide={() => setModalShow8(false)}
                    />
                </div>
                </Row>
            </div>
            <h2 className="TimelineHeader">Timeline</h2>
            <p className="TimelineDesc">Many are not aware of the complex system that is successfully
            seeking asylum or refuge. The many documents, interviews, stakeholders, and emotional
            burdance of the system is something we all can learn and empathize from. Follow along
            with this timeline for step by step process of seeking asylum or refuge.</p>
        </div>
    )
}

export default Learn;