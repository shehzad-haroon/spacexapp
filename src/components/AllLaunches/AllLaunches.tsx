import React from 'react'
import { Link } from 'react-router-dom'
import {LaunchListQuery} from '../../generated/graphql' 
import './AllLaunches.css'
interface Props{
    data:LaunchListQuery
}
const RenderAllLaunches:React.FC<Props> = ({data}) =>{
    if(!data){
        return <h2>Loading</h2>
    }
    return (
        <React.Fragment>
        <h1>Space X Launches</h1>
        <div className="launches">
          {data.launches?.map((launch,i) => {
              return(
                    <div   className="container-card">
                         <hr/>
                    <h2 className="name">{launch?.mission_name}</h2>
                   <hr  />
                   <p className="year">{launch?.launch_year}</p>
                   <hr />
                   <p>  </p>
                   <Link to={`/Launches/${launch?.flight_number}`}><button className="btn" >Click Here To View More</button></Link>
            </div>
             )
                })}
        </div>
        </React.Fragment>
    )
}

export default RenderAllLaunches
