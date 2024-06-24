import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { allWorkouts } from '../services/allApis'
import WorkoutCard from '../components/WorkoutCard'
import { Row,Col,Container } from 'react-bootstrap'
import Fitlog from '../components/FItlog'


function Workouts() {


   const [workouts,setWorkouts]=useState([])
   const [search,setSearch]=useState("")



   useEffect(()=>{
      if(sessionStorage.getItem('token')){
         getData()
         
      }
      else{
         console.log("Login First");
      }
   },[search])

   console.log(workouts);

   const getData=async()=>{

      const header={"Authorization":`Bearer ${sessionStorage.getItem('token')}`}
      const result= await allWorkouts(header,search)
      console.log(result);
      if(result.status==200){
         setWorkouts(result.data)
      }
      else{
         console.log(result.response.data);
      }
   }


   return (
      <>
       <Fitlog/>
       <div 
      className='w-100 p-5' 
      style={{
        minHeight: '100vh',
        backgroundImage: `url('https://w0.peakpx.com/wallpaper/127/885/HD-wallpaper-woman-lifting-barbell.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className='text-center mt-5 d-flex my-4 justify-content-between flex-wrap'>
          <h2 className='text-white'>Workouts</h2>
         
        </div>
        <Row className='mt-3 p-5'>
          {workouts.length > 0 ? (
            workouts.map(item => (
              <Col xs={12} sm={6} md={4} lg={3} className='p-3' key={item.id}>
                <WorkoutCard workout={item} />
              </Col>
            ))
          ) : (
            <Col className='text-center'>
              <h2 className='text-white mt-4'>No Workouts Available!!</h2>
            </Col>
          )}
        </Row>
      </Container>
    </div>
      </>
   )
}

export default Workouts