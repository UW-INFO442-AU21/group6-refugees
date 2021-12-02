import './home.css';

function Home() {
    return(
        <div className = "Home">
            <header>
                <h1 className="WelcomeHeader">WELCOME!</h1>
                <div class="row">
                    <div class="col-lg-8 col-md-6">
                        <p className="WelcomeDesc">We are RAUWR: Refugee Asylee University of Washington
                            Resource. A service that assists the general UW population
                            and all of its staff and students in learning more about the
                            process of seeking Asylum or Refuge in the United States and
                            how we can help those seeking Asylum or Refuge in our
                            community with services or needs that they have.</p>
                    </div>
                    <div class="col-12 col-lg-4 col-md-6">
                        <img src="https://raw.githubusercontent.com/UW-INFO442-AU21/group6-refugees/clform/my-app/src/picture_assets/image%201.png" alt="" class="img-responsive float-right mr-3"/>
                    </div>
                </div>
            </header>
            <h2 className="OurWorkHeader">OUR WORK</h2>
            <p className="Desc"> As the team behind RAUWR, we seek to provide communities
                here at UW with the information neccessary to come together
                and serve others in our communities that are in a vulnerable
                position. An individual applyinf for Asylum or Refuge is seeking
                protection due to well-founded fear or reason of persecution.
                Due to these reasons, they need support building from the ground
                up and we all have a part in strengthening our communities with
                mutual aid and support. RAUWR centralizes information and service
                for you to assist the Refugees and Asylees in our area.</p>
            <h2 className="TeamHeader">MEET THE TEAM</h2>
            
        </div>
    )
}

export default Home;