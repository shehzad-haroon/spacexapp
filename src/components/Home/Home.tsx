import React from 'react'
import { Carousel, Card, Button } from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.researchsnipers.com/wp-content/uploads/2021/03/SpaceX.jpg"
                        alt="First slide"
                        width="100%"
                        height="620px"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpapercave.com/wp/wp2284543.jpg"
                        alt="Second slide"
                        width="100%"
                        height="620px"
                    />
{/* 
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.spacex.com/static/images/backgrounds-2021/HP_SN11_Vertical_20210311_IMG_01221.webp"
                        width="100%"
                        height="620px"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>


            {/* <hr/>
<hr/>
<hr/>
<hr/> */}
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://www.spacex.com/static/images/backgrounds/iss_game.webp" alt="Card image" width="100%" height="500px" />
                    <Card.ImgOverlay>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <Card.Title>DRAGON DOCKING SIMULATOR</Card.Title>
                        <Card.Text>Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.
    </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card></div>
                <div>
                    {/* <br/> */}
                <Card className="bg-dark text-white">
                    <Card.Img src="https://www.spacex.com/static/images/backgrounds-2021/HP_Star23_DSC_4468.webp" alt="Card image" width="100%" height="500px" />
                    <Card.ImgOverlay>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Card.Title>Launches</Card.Title>
                        <Card.Text className="">On Wednesday, April 7 at 12:34 p.m. EDT, SpaceX launched 60 Starlink satellites from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida. This was the seventh launch and landing of this Falcon 9 first stage booster, which previously launched NASA astronauts Bob Behnken and Doug Hurley to the International Space Station, ANASIS-II, CRS-21, Transporter-1, and two Starlink missions. One half of Falcon 9’s fairing previously supported the AMOS-17 and two Starlink missions, and the other supported one Starlink mission
    </Card.Text>
                        {/* <Card.Text><</Card.Text> */}
                    </Card.ImgOverlay>
                </Card>
                </div>
        </div>

    )
}

export default Home
