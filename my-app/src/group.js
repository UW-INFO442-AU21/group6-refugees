import './group.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Group() {
    return (
        <div className="Group">
            <header>
                <h1>SHORT-TERM SERVICE GROUPS</h1>
                <h2>
                    At the University of Washington, there a limited amount of groups and
                    organizations that are serving the asylee and refugee communities.
                    You can make a difference by starting a short-term service group with your peers
                    and volunteer!"
                </h2>
            </header>
                <p className='Desc'>
                    Click on 'View More' to find out the details of the event and who is already
                    signed up! If you have inspiration for your own event, create a group!
                    If you are looking for inspiration, see our Orgs page to learn about what
                    Seattle organizations are seeking assistance with in their efforts.
                </p>
            <Button size="lg" className='mainbtn'>Create Group +</Button>
            <Row xs={1} md={2} lg='auto' className="g-4">
                <Col>
                    <Card className='cardbg mb-2' style={{ width: '18rem'}}>
                    <Card.Img variant='top' src="\picture_assets\volunteer_booth.jpeg"/>
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>Volunteer Booth</Card.Title>
                                <Card.Subtitle className="mb-2">Hosted by: Jane Dove</Card.Subtitle>
                                <Card.Text>
                                    November 5, 2021<br/>
                                    05:00 PM - 07:00 PM<br/>
                                    Issaquah, WA
                                </Card.Text>
                                <div className="btn-right">
                                    <Button>View More</Button>
                                </div> 
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className='cardbg mb-2' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src="picture_assets/volunteer_booth.jpeg"/>
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>Donation Booth</Card.Title>
                                <Card.Subtitle className="mb-2">Hosted by: John Dove</Card.Subtitle>
                                <Card.Text>
                                    November 21, 2021<br/>
                                    09:00 AM - 12:00 PM<br/>
                                    Seattle, WA
                                </Card.Text>
                                <div className="btn-right">
                                    <Button>View More</Button>
                                </div>    
                            </Card.Body>
                        </div>    
                    </Card>
                </Col>
                <Col>
                    <Card className='cardbg mb-2' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src="picture_assets/volunteer_booth.jpeg"/>
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>Welcome Wishlist</Card.Title>
                                <Card.Subtitle className="mb-2">Hosted by: John Jane</Card.Subtitle>
                                <Card.Text>
                                    November 25, 2021<br/>
                                    12:00 PM - 03:00 PM<br/>
                                    Kent, WA
                                </Card.Text>
                                <div className="btn-right">
                                    <Button>View More</Button>
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