import './orgs.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import irc_img from './picture_assets/intl_rescue.jpeg'
import nirp_img from './picture_assets/northwest_rights.jpeg'
import aclu_img from './picture_assets/aclu_logo.png'

function Orgs() {
    return(
        <div className='Orgs'>
            <header className="OrgsHeader">
                <h1 className="Organizations">ORGANIZATIONS</h1>
                <p className = "organizationsDesc">
                    Get connected to a range of organizations in the Seattle
                    area that are looking for service volunteers in various ways!
                    Below you can find their pages where they list projects or
                    services that are required by the local community.
                </p>
            </header>
            <Row xs={1} md={1} lg='auto' className="g-4">
                <Col>
                    <Card className='cardbg mb-2 mx-5'>
                        <Card.Img className='card-img-g' alt="International Rescue Committee Logo" title="International Rescue Committee Logo" variant='top' src={irc_img} />
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>The International Rescue Committee</Card.Title>
                                <Card.Link href="https://www.rescue.org/united-states/seattle-wa">Link to Site</Card.Link>
                                <Card.Text>
                                    The International Rescue Committee provides opportunities for refugees,
                                    asylees, victims of human trafficking, survivors of torture,
                                    and other immigrants to thrive in America. Each year, thousands of
                                    people, forced to flee violence and persecution, are welcomed by the
                                    people of the United States into the safety and freedom of America.
                                    These individuals have survived against incredible odds. The IRC
                                    works with government bodies, civil society actors, and local
                                    volunteers to help them translate their past experiences into assets
                                    that are valuable to their new communities.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card className='cardbg mb-2 mx-5'>
                        <Card.Img className='card-img-g' alt="Northwest Immigrant Right Project Logo" title="Northwest Immigrant Right Project Logo" variant='top' src={nirp_img}/>
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>Northwest Immigrant Right Project</Card.Title>
                                <Card.Link href="https://www.nwirp.org">Link to Site</Card.Link>
                                <Card.Text>
                                    The NW Immigrant Right Project defend the rights of people who have
                                    a fear of persecution in their home country and help them gain safety
                                    through asylum. The asylum unit also assists pro se applicants with
                                    navigating the asylum application process and works with outside
                                    agencies, communities, and organizations to promote the rights
                                    and dignity of and offer support services to persons fleeing
                                    persecution in their home countries.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card className='cardbg mb-2 mx-5'>
                        <Card.Img className='card-img-g' alt="American Civil Liberties Union Logo" title="American Civil Liberties Union Logo" variant='top' src={aclu_img}/>
                        <div className='textalign'>
                            <Card.Body>
                                <Card.Title className='cardtitle'>American Civil Liberties Union</Card.Title>
                                <Card.Link href="https://www.aclu-wa.org">Link to Site</Card.Link>
                                <Card.Text>
                                    The ACLU of Washington is a nonprofit organization devoted to defending
                                    and extending civil rights and civil liberties.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Orgs;