import './home.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import angelina from './picture_assets/headshots/angelina.JPG'
import chance from './picture_assets/headshots/chance.jpg'
import ethan from './picture_assets/headshots/ethan.jpg'
import kaamna from './picture_assets/headshots/kaamna.jpg'
import padma from './picture_assets/headshots/padma.jpg'
import migrants from './picture_assets/migrants.jpg'

function Home() {
    return(
        <div className = "Home">
            <header>
                <h1 className="WelcomeHeader">WELCOME!</h1>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <p className="WelcomeDesc">We are RAUWR: Refugee Asylee University of Washington
                            Resource. A service that assists the general UW population
                            and all of its staff and students in learning more about the
                            process of seeking Asylum or Refuge in the United States and
                            how we can help those seeking Asylum or Refuge in our
                            community with services or needs that they have.</p>
                    </div>
                    <div class="col-12 col-lg-6 col-md-6 col-sm-12">
                        <img src={migrants} alt="Migrants" class="migrants img-responsive float-right mr-3"/>
                    </div>
                </div>
            </header>
            <h2 className="OurWorkHeader">OUR WORK</h2>
            <p className="WorkDesc"> As the team behind RAUWR, we seek to provide communities
                here at UW with the information neccessary to come together
                and serve others in our communities that are in a vulnerable
                position. An individual applying for Asylum or Refuge is seeking
                protection due to well-founded fear or reason of persecution.
                Due to these reasons, they need support building from the ground
                up and we all have a part in strengthening our communities with
                mutual aid and support. RAUWR centralizes information and service
                for you to assist the Refugees and Asylees in our area.</p>

            <h2 className="TeamHeader">MEET THE TEAM</h2>
            <Row xs={1} md={2} lg='auto' className="g-4">
                <Col>
                    <Card className='cardbg mb-2 border-0' style={{ width: '18rem'}}>
                    <Card.Img alt = "kaamna" classname = 'h-cardimg' variant='top' src={kaamna}/>
                        <div className='textalign'>
                            <Card.Body className = "team-cardbody">
                                <Card.Title className='team-cardtitle'>Kaamna Rishi</Card.Title>
                                <Card.Subtitle className="team-subtitle mb-2">Product Manager</Card.Subtitle>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col>
                    
                    <Card className='cardbg mb-2 border-0' style={{ width: '18rem' }}>
                    <Card.Img alt = "angelina" classname = 'h-cardimg' variant='top' src={angelina}/>
                        <div className='textalign'>
                            <Card.Body className = "team-cardbody">
                                <Card.Title className='team-cardtitle'>Angelina Lum</Card.Title>
                                <Card.Subtitle className="team-subtitle mb-2">UX Researcher + UX Designer</Card.Subtitle>
                            </Card.Body>
                        </div>    
                    </Card>
                </Col>
                <Col>
                    <Card className='cardbg mb-2 border-0' style={{ width: '18rem' }}>
                    <Card.Img alt = "ethan" classname = 'h-cardimg' variant='top' src={ethan}/>
                        <div className='textalign'>
                            <Card.Body className = "team-cardbody">
                                <Card.Title className='team-cardtitle'>Ethan Kuhn</Card.Title>
                                <Card.Subtitle className="team-subtitle mb-2">UX Researcher + UX Designer</Card.Subtitle>
                            </Card.Body>
                        </div>    
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} lg='auto' className="g-4">
                <Col>
                    <Card className='cardbg mb-2 border-0' style={{ width: '18rem'}}>
                    <Card.Img alt = "padma" classname = 'h-cardimg' variant='top' src={padma}/>
                        <div className='textalign'>
                            <Card.Body className = "team-cardbody">
                                <Card.Title className='team-cardtitle'>Padma Gundapaneni</Card.Title>
                                <Card.Subtitle className="team-subtitle mb-2">Developer</Card.Subtitle>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className='cardbg mb-2 border-0' style={{ width: '18rem' }}>
                    <Card.Img alt = "chance" classname = 'h-cardimg' variant='top' src={chance}/>
                        <div className='textalign'>
                            <Card.Body className = "team-cardbody">
                                <Card.Title className='team-cardtitle'>Chance Landis</Card.Title>
                                <Card.Subtitle className="team-subtitle mb-2">Developer</Card.Subtitle>
                            </Card.Body>
                        </div>    
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;