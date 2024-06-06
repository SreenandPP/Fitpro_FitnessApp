import React, { useState,useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import { allWorkouts } from '../services/allApis'
import { useLocation } from 'react-router-dom'
import Fitlog from '../components/FItlog'
import base_url from '../services/server_url'

function WorkoutDetails() {

    const location=useLocation()

    const workout=location.state

    console.log(location);
    console.log(workout);


  return (
    <>
    <Fitlog/>
     <div className='p-5 container'>
      
      <Row >
        <Col sm={12} md={6} lg={6} className='mt-5'>
        <img className='img-fluid ms-5 ' style={{height:'400px',width:'400px',borderRadius:'10px'}} src={`${base_url}/uploads/${workout.image}`}   alt="img" />
    
        </Col>
        <Col sm={12} md={6} lg={6} className='p-5 text-white'>
             <div className='mb-3 '>
                <h1 style={{color:'var(--dark-red)'}}>{workout.title}</h1>
             </div>
             <h3 className='mb-1'>{workout.category}</h3>
    
             <p className='mb-3 mt-3' style={{textAlign:'justify'}}>{workout.description}</p>
             <div className='d-flex justify-content-between '>
              {/* <button className='btn btn-lg  shadow mt-4' style={{border:'solid 3px var(--dark-red)'}} >
              <i className="fa-solid fa-check fa-xl" style={{color:'var(--dark-red)'}}></i> 
              </button> */}
             </div>
        </Col>
      </Row>
   </div>
    </>
  )
}

export default WorkoutDetails