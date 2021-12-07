import './learn.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Learn() {
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
            <div>
                <Row xs={1} md={1} lg={2} className="g-4">
                    <Col>
                        <Card className='vocab-card mb-2'>
                            <div className='textalign'>
                                <Card.Body className = "vocabcard-body">
                                    <Card.Title className='cardtitle'>Refugee</Card.Title>
                                    <Card.Link href="http://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title8-section1101&num=0&edition=prelim">Source</Card.Link>
                                    <Card.Text>
                                    Refugees are any person who is outside any country of such person's nationality or, in the case of a person having no nationality, is outside any country in which such person last habitually resided, and who is unable or unwilling to return to, and is unable or unwilling to avail himself or herself of the protection of, that country because of persecution or a well-founded fear of persecution on account of race, religion, nationality, membership in a particular social group, or political opinion.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='vocab-card mb-2'>
                            <div className='textalign'>
                                <Card.Body className = "vocabcard-body">
                                    <Card.Title className='cardtitle'>Asylee</Card.Title>
                                    <Card.Link href="https://www.dhs.gov/immigration-statistics/refugees-asylees">Source</Card.Link>
                                    <Card.Text>
                                    An asylee is a person who meets the definition of refugee and is already present in the United States or is seeking admission at a port of entry.                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='vocab-card mb-2'>
                            <div className='textalign'>
                                <Card.Body className = "vocabcard-body">
                                    <Card.Title className='cardtitle'>Eligible for Refuge</Card.Title>
                                    <Card.Link href="https://www.alllaw.com/articles/nolo/us-immigration/who-eligible-asylum-refugee-protection.html">Source</Card.Link>
                                    <Card.Text>
                                    To be eligible to seek refuge, you must be from a country where you have undergone persecution or have a well-founded fear of being persecuted if you return to that country in the future, you may decide to seek either refugee protection from the U.S.                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='vocab-card mb-2'>
                            <div className='textalign'>
                                <Card.Body className = "vocabcard-body">
                                    <Card.Title className='cardtitle'>Persecution</Card.Title>
                                    <Card.Link href="https://www.alllaw.com/articles/nolo/us-immigration/who-eligible-asylum-refugee-protection.html">Source</Card.Link>
                                    <Card.Text>
                                    Persecution is defined generally as the infliction of suffering or harm, or a serious threat to your life or freedom. Harassment alone isn't enough, but things like death threats, torture, imprisonment, constant surveillance, pressure to join a group engaging in illegal activity, interference with your privacy, family, home, or correspondence, or discrimination in matters like housing, education, or passport issuance have all been found to qualify. Persecution must have been based on at least one of five grounds, either your race, religion, nationality political opinion, or membership in a particular social group.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='vocab-card mb-2'>
                            <div className='textalign'>
                                <Card.Body className = "vocabcard-body">
                                    <Card.Title className='cardtitle'>Applying for Green Card</Card.Title>
                                    <Card.Link href="https://www.dhs.gov/immigration-statistics/refugees-asylees">Source</Card.Link>
                                    <Card.Text>
                                    Refugees are required to apply for Lawful Permanent Resident (“green card”) status one year after being admitted, and asylees may apply for green card status one year after their grant of asylum. The Office of Immigration Statistics (OIS) annual flow reports on refugees and asylees contain information obtained from the Worldwide Refugee Admissions Processing System (WRAPS) of the Bureau of Population, Refugees, and Migration of the U.S. Department of State on the numbers and demographic profiles of persons admitted to the United States as refugees, and those applying for and granted asylum status during a given fiscal year.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='vocab-card mb-2'>
                            <div className='textalign'>
                                <Card.Body className = "vocabcard-body">
                                    <Card.Title className='cardtitle'>Claim of Asylum</Card.Title>
                                    <Card.Link href="https://www.imwong.com/immigration-news/our-immigration-blog-credible-vs-reasonable-fear/">Source</Card.Link>
                                    <Card.Text>
                                    A person can either make an affirmative or a defensive claim of asylum. An affirmative claim means that the asylum seeker is not currently in removal proceedings, while an individual who files a defensive claim of asylum is already in such proceedings.                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='vocab-card mb-2'>
                            <div className='textalign'>
                                <Card.Body className = "vocabcard-body">
                                    <Card.Title className='cardtitle'>Credible Fear</Card.Title>
                                    <Card.Link href="https://www.dhs.gov/immigration-statistics/readingroom/RFA/credible-fear-cases-interview">Source</Card.Link>
                                    <Card.Text>
                                    An individual will be found to have a credible fear of persecution if he or she establishes that there is a “significant possibility” that he or she could establish in a full hearing before an Immigration Judge that he or she has been persecuted or has a well-founded fear of persecution or harm on account of his or her race, religion, nationality, membership in a particular social group, or political opinion if returned to his or her country.                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='vocab-card mb-2'>
                            <div className='textalign'>
                                <Card.Body className = "vocabcard-body">
                                    <Card.Title className='cardtitle'>Reasonable Fear</Card.Title>
                                    <Card.Link href="https://www.imwong.com/immigration-news/our-immigration-blog-credible-vs-reasonable-fear/">Source</Card.Link>
                                    <Card.Text>
                                    Reasonable fear screenings are for individuals who are subject to administrative removal from the US because they are aggravated felons or the US has reinstated a prior order of removal. If the asylum officer determines the claim to be valid, the individual will have a hearing before an immigration judge who will decide if she is eligible for withholding of removal. The applicant must prove a “reasonable possibility” that she will be persecuted or tortured upon return to her home country.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
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