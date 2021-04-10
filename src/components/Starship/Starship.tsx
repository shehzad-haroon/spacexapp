import React from 'react'
import { Card } from 'react-bootstrap'

function Starship() {
    return (
        <div>
                <div>
                <Card className="bg-dark text-white">
                {/* https://www.spacex.com/static/images/starship/CAPABILITIES__SATELLITE.gif */}
                {/* https://www.spacex.com/static/images/backgrounds/mars_landing.webp */}
                    <Card.Img src="https://www.spacex.com/static/images/backgrounds/mars_landing.webp"  width="100%" height="600px" alt="Card image" />
                    <Card.ImgOverlay>
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <Card.Title>LANDING ON MARS
</Card.Title>
                        <Card.Text>
                        Starship will enter Mars’ atmosphere at 7.5 kilometers per second and decelerate aerodynamically. The vehicle’s heat shield is designed to withstand multiple entries, but given that the vehicle is coming into Mars' atmosphere so hot, we still expect to see some ablation of the heat shield (similar to wear and tear on a brake pad). The engineering video below simulates the physics of Mars entry for
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card></div>
                <div>
                <Card className="bg-dark text-white">
                {/* https://www.spacex.com/static/images/starship/CAPABILITIES__SATELLITE.gif */}
                {/* https://www.spacex.com/static/images/backgrounds/mars_landing.webp */}
                    <Card.Img src="https://www.spacex.com/static/images/starship/CAPABILITIES__SATELLITE.gif"  width="100%" height="550px" alt="Card image" />
                    <Card.ImgOverlay>
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <Card.Title>STARSHIP SN11 HIGH-ALTITUDE FLIGHT TEST</Card.Title>
                        <Card.Text>
                        On Tuesday, March 30, SpaceX launched its fourth high-altitude flight test of Starship from Starbase in Texas. Similar to previous high-altitude flight tests, Starship Serial Number 11 (SN11) was powered through ascent by three Raptor engines, each shutting down in sequence prior to the vehicle reaching apogee – approximately 10 km in altitude. SN11 performed a propellant transition to the internal header tanks, which hold landing propellant, before reorienting itself for reentry and a controlled aerodynamic descent. </Card.Text>
                    </Card.ImgOverlay>
                </Card></div>
        </div>
    )
}

export default Starship
