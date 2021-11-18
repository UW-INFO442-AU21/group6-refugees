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
                <h2>Start a short term service group!</h2>
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
                                Goal: $10,000<br/>
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