import React, { useState,useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import { allDiets } from '../services/allApis'
import { useLocation } from 'react-router-dom'
import Fitlog from '../components/FItlog'
import base_url from '../services/server_url'

function DietDetails() {

    const location=useLocation()

    const diet=location.state

    console.log(location);
    console.log(diet);


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
        src={`${base_url}/uploads/${diet.image}`}
        alt="Workout"
      />
    </Col>
    {/* Text Column */}
    <Col xs={12} md={6} lg={6} className='p-3 text-center text-md-start'>
      <div className='mb-3 '>
        <h1 className='text-success'>{diet.title}</h1>
      </div>
      <h3 className='mb-1 text-white' >{diet.category}</h3>
      <p className='mb-3 mt-3 text-white' style={{ textAlign: 'justify' }}>
        {diet.description}
      </p>
      <div className='d-flex justify-content-between '>
              <button className='btn btn-lg  shadow mt-4' style={{border:'solid 3px #00c469'}} >
              <i className="fa-solid fa-check fa-xl "  style={{color:'#00c469'}}></i> 
              </button>
             </div>
    </Col>
  </Row>
</div>



   
    </>
  )
}

export default DietDetails