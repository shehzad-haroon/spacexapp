import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import './MIssion.css'
function Mission() {
    return (
        <div>
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://www.spacex.com/static/images/mission/mission-slider-01.webp" width="100%" height="500px" alt="Card image" />
                    <Card.ImgOverlay>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        {/* <br /> */}
                        <Card.Title>--Mission--</Card.Title>
                        <Card.Text>
“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
-Elon Musk </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className="cards">
                <h1>SPACEX FACILITIES</h1>
                <br />
                <CardGroup className="py-4px px-4px" >
                    <Card className="bg-dark">
                        <Card.Img variant="top" src="https://www.spacex.com/static/images/locations/testing.webp" />
                        <Card.Body>
                            <Card.Title>TESTING FACILITY
</Card.Title>
                            <Card.Text>SpaceX tests its engines, vehicle structures, and systems at a 4,000-acre state-of-the-art rocket development facility in McGregor, Texas. Outfitted with 16 specialized test stands, the facility validates for flight every Merlin engine that powers the Falcon 9 and Falcon Heavy rockets, and every Draco thruster that controls the Dragon spacecraft
      </Card.Text>
                        </Card.Body>
                    </Card >
                    <Card className="bg-dark">
                        <Card.Img variant="top" src="https://www.spacex.com/static/images/locations/build.webp" />
                        <Card.Body>
                            <Card.Title>BUILD FACILITY</Card.Title>
                            <Card.Text>
                                SpaceX designs and builds its reusable rockets and spacecraft at its headquarters in Hawthorne, California. As a company, SpaceX is vertically integrated, building the vast majority of the vehicle on the Hawthorne campus. SpaceX headquarters remains one of the few facilities in the world where you can see an entire launch vehicle or spacecraft come together under one roof.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="bg-dark">
                        <Card.Img variant="top" src="https://www.spacex.com/static/images/locations/cape.webp" />
                        <Card.Body>
                            <Card.Title>
CAPE CANAVERAL SPACE FORCE STATION, SPACE LAUNCH COMPLEX 40</Card.Title>
                            <Card.Text>
                            The site’s location on the southeast coast of the US provides access to a wide range of low and medium inclination orbits frequently used by communications and Earth-observing satellites and by supply missions to the International Space Station. The site also allows access to geostationary orbits, as well as departures to the Moon and interplanetary destinations.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}

export default Mission
