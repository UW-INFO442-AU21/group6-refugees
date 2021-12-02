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
            <a href="https://www.pbs.org/pov/watch/wellfoundedfear/"><img src="https://raw.githubusercontent.com/UW-INFO442-AU21/group6-refugees/main/my-app/src/picture_assets/well_founded_fear.png" alt=""/></a>

            <h2 className="TimelineHeader">Timeline</h2>
            <p className="TimelineDesc">Many are not aware of the complex system that is successfully
            seeking asylum or refuge. The many documents, interviews, stakeholders, and emotional
            burdance of the system is something we all can learn and empathize from. Follow along
            with this timeline for step by step process of seeking asylum or refuge.</p>
        </div>
    )
}

export default Learn;