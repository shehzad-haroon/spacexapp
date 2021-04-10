import React from 'react'
import { Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import {useLaunchProfileQuery} from '../../generated/graphql' 
import  RenderLaunch from './Launch';
const Launch = (flight_number: string) =>{
    //    var {flight_number} = useParams();
    // console.log(id)
    //  let {flight_number} = useParams();
    const {data,error,loading} = useLaunchProfileQuery({variables: {id : flight_number}})
    // const { data, loading, error } = useLaunchProfileQuery({variables:{id:flight_number}})
    // console.log(flight_number)
      if (loading)
        return<h1>Please Wait...s<Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner></h1>
        if(error || !data)
        return<h1>Error</h1>
        console.log(data)
        console.log(error)
        console.log(loading)
    return (
        <div>
            <hr/>
           <RenderLaunch data={data}/>
        </div>
    )
}
export default Launch