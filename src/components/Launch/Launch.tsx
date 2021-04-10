import React from 'react'
import { useParams } from 'react-router-dom';
import {LaunchProfileQuery} from '../../generated/graphql' 
import './Launch.css'
interface Props {
    data:LaunchProfileQuery
}
const RenderLaunch:React.FC<Props> = ({data}) =>{
    if(!data.launch) 
    return <h2>Product Not Found</h2>
    return (
        <div className="launch">
            <h1  >{data.launch.mission_name}</h1>
            <hr />
            <p  >Launch Status: {data.launch.launch_success ? <span >Succes</span>: (data.launch.launch_success === false ? <span >Fail</span> :  <span>Upcoming</span> )}</p>
            <hr/>
            <p  >Launch Site: {data.launch.launch_site?.site_name}</p>
            <hr/>
            <p  >Launch Year: {data.launch.launch_year}</p>
            <hr/>
            <p  >Rocket Used: {data.launch.rocket?.rocket_name}</p>
            <hr />
            <h1 >Gallery:</h1>
            <div >
           {
               data.launch.links?.flickr_images?.length !== 0 ? (<>
                {
                    data.launch.links?.flickr_images?.map((image , i) => <img className="image" key={i} src={`${image}`} alt="img" /> )
                }
               </>) : <p className="not-found" >No Images Found</p>
           }
           </div>
        </div>
    )
}
export default RenderLaunch;


