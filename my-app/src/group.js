import './group.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import VBModal from './modal/VBModal';
import JGModal from './modal/JGModal';
import FormModal from './modal/FormModal';
import vol_img from "./picture_assets/volunteer_booth.jpeg"
import don_img from "./picture_assets/donation_drive.jpeg"
import ww_img from "./picture_assets/wishlist.jpeg"

function Group() {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    return (
        <div className="Group">
            <header>
                <h1>SHORT-TERM SERVICE GROUPS</h1>
                <h2>
                    At the University of Washington, there a limited amount of groups and
                    organizations that are serving the asylee and refugee communities.
                    You can make a difference by starting a short-term service group with your peers
                    and volunteer!
                </h2>
            </header>
            <p className='Desc'>
                Click on 'View More' to find out the details of the event and who is already
                signed up! If you have inspiration for your own event, create a group!
                If you are looking for inspiration, see our Orgs page to learn about what
                Seattle organizations are seeking assistance with in their efforts.
            </p>
            <Button aria-label="Create Group" size="lg" className='mainbtn' onClick={()=>setModalShow3(true)}>
                Create Group +
            </Button>
            <FormModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <Row xs={1} md={2} lg='auto' className="g-4">
                <Col>
                    <Card className='cardbg mb-2' style={{ width: '18rem'}}>
                        <Card.Img title="Volunteer Booth" alt="People at a volunteer booth" className='card-img' variant='top' src={vol_img}/>
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>Volunteer Booth</Card.Title>
                                <Card.Subtitle className="mb-2">Hosted by: Jane Dove</Card.Subtitle>
                                <Card.Text>
                                    November 5, 2021<br/>
                                    05:00 PM - 07:00 PM<br/>
                                    Issaquah, WA
                                </Card.Text>
                                <div className="btn-cntr">
                                    <Button aria-label="View More" variant="primary" onClick={() => setModalShow1(true)}>
                                        View More
                                    </Button>
                                    <VBModal
                                        show={modalShow1}
                                        onHide={() => setModalShow1(false)}
                                    />
                                    <Button aria-label="Join Group" variant="primary" onClick={()=>setModalShow2(true)}>
                                        Join Group
                                    </Button>
                                    <JGModal
                                        show={modalShow2}
                                        onHide={() => setModalShow2(false)}
                                    />
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className='cardbg mb-2' style={{ width: '18rem'}}>
                        <Card.Img title="Donation Booth" alt="People donating goods at a donation center" className='card-img' variant='top' src={don_img}/>
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>Donation Booth</Card.Title>
                                <Card.Subtitle className="mb-2">Hosted by: John Dove</Card.Subtitle>
                                <Card.Text>
                                    November 21, 2021<br/>
                                    09:00 AM - 12:00 PM<br/>
                                    Seattle, WA
                                </Card.Text>
                                <div className="btn-cntr">
                                    <Button aria-label="View More">View More</Button>
                                </div>    
                            </Card.Body>
                        </div>    
                    </Card>
                </Col>
                <Col>
                    <Card className='cardbg mb-2' style={{ width: '18rem'}}>
                        <Card.Img title="Welcome Wishlist" alt="Image of a Wishlist" className='card-img' variant='top' src={ww_img}/>
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>Welcome Wishlist</Card.Title>
                                <Card.Subtitle className="mb-2">Hosted by: John Jane</Card.Subtitle>
                                <Card.Text>
                                    November 25, 2021<br/>
                                    12:00 PM - 03:00 PM<br/>
                                    Kent, WA
                                </Card.Text>
                                <div className="btn-cntr">
                                    <Button aria-label="View More">View More</Button>
                                </div> 
                            </Card.Body>
                        </div>    
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Group;