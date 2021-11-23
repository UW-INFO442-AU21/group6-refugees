import './group.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Group() {
    return (
        <div className="Group">
            <header className="GroupHeader">
                <h1>SHORT-TERM SERVICE GROUPS</h1>
                <h2>
                    At the University of Washington, there a limited amount of groups and
                    organizations that are serving the asylee and refugee communities.
                    You can make a difference by starting a short-term service group with your peers
                    and volunteer!"
                </h2>
                <p>
                    Click on 'View More' to find out the details of the event and who is already
                    signed up! If you have inspiration for your own event, create a group!
                    If you are looking for inspiration, see our Orgs page to learn about what
                    Seattle organizations are seeking assistance with in their efforts.
                </p>
            </header>
            <Button variant="primary">Create Group +</Button>
            <Row xs={1} md={2} lg='auto' className="g-4">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Volunteer Booth</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Hosted by: Jane Dove</Card.Subtitle>
                            <Card.Text>
                                November 5, 2021<br/>
                                05:00 PM - 07:00 PM<br/>
                                Issaquah, WA
                            </Card.Text>
                            <Button variant="primary">View More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Donation Booth</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Hosted by: John Dove</Card.Subtitle>
                            <Card.Text>
                                November 21, 2021<br/>
                                09:00 AM - 12:00 PM<br/>
                                Seattle, WA
                            </Card.Text>
                            <Button variant="primary">View More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Welcome Wishlist</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Hosted by: John Jane</Card.Subtitle>
                            <Card.Text>
                                November 25, 2021<br/>
                                12:00 PM - 03:00 PM<br/>
                                Kent, WA
                            </Card.Text>
                            <Button variant="primary">View More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Group;