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
    <div className='p-3 container mt-5'>
  <Row className='align-items-center'>
    {/* Image Column */}
    <Col xs={12} md={6} lg={6} className='mb-3 text-center'>
      <img
        className='img-fluid'
        style={{ maxWidth: '100%',width:"400px", height: '400px', borderRadius: '10px' }}
        src={`${base_url}/uploads/${workout.image}`}
        alt="Workout"
      />
    </Col>
    {/* Text Column */}
    <Col xs={12} md={6} lg={6} className='p-3 text-center text-md-start'>
      <div className='mb-3 '>
        <h1 style={{ color: 'var(--dark-red)' }}>{workout.title}</h1>
      </div>
      <h3 className='mb-1 text-white' >{workout.category}</h3>
      <p className='mb-3 mt-3 text-white' style={{ textAlign: 'justify' }}>
        {workout.description}
      </p>
    </Col>
  </Row>
</div>
    </>
  )
}

export default WorkoutDetails