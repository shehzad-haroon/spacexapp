import React from 'react'
import { Spinner } from 'react-bootstrap';
import {useLaunchListQuery} from '../../generated/graphql' 
import  RenderAllLaunches from './AllLaunches';

export default function AllLaunches() {
    const {data,error,loading} = useLaunchListQuery();
     if(loading)
        return<h1><Spinner animation="border" role="status" className="spin">
        <span className="sr-only">Loading...</span>
      </Spinner></h1>
        if(error || !data)
        return<h1><Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner></h1>
    return (
        <div>
        {/* <Spinner animation="grow"/> */}

           <RenderAllLaunches data={data}/>
        </div>
    )
}

