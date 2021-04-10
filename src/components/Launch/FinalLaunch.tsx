
  
import React from 'react'
import { useParams } from 'react-router-dom'
import Launch from './index';
const FinalLaunch = () => {
    const {flight_number} = useParams<{flight_number:string}>();
    return (
        <div>
            {Launch(flight_number)}
        </div>
    )
}
export default FinalLaunch