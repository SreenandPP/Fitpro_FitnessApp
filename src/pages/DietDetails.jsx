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
     <div className='p-5 container'>
      
      <Row >
        <Col sm={12} md={6} lg={6} className='mt-5'>
        <img className='img-fluid ms-5' style={{height:'400px',width:'400px',borderRadius:'10px'}} src={`${base_url}/uploads/${diet.image}`}    alt="img" />
    
        </Col>
        <Col sm={12} md={6} lg={6} className='p-5 text-white'>
             <div className='mb-3 '>
                <h1 className='text-success'>{diet.title}</h1>
             </div>
             <h3 className='mb-1'>{diet.category}</h3>
    
             <p className='mb-3 mt-3' style={{textAlign:'justify'}}>{diet.description}</p>
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