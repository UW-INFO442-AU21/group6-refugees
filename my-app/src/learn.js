import './learn.css';

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
      
            <h2 className="TimelineHeader">Timeline</h2>
            <p className="TimelineDesc">Many are not aware of the complex system that is successfully
            seeking asylum or refuge. The many documents, interviews, stakeholders, and emotional
            burdance of the system is something we all can learn and empathize from. Follow along
            with this timeline for step by step process of seeking asylum or refuge.</p>
        </div>
    )
}

export default Learn;