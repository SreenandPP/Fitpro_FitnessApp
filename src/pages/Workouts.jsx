import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { allWorkouts } from '../services/allApis'
import WorkoutCard from '../components/WorkoutCard'
import { Row,Col } from 'react-bootstrap'
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
         <div className='w-100 p-5' 
          style={{
            height: '100vh',
            backgroundImage: `url('https://w0.peakpx.com/wallpaper/127/885/HD-wallpaper-woman-lifting-barbell.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
             // Align items in a column
         }}
         >
            <div className='text-center mt-5 d-flex my-4 justify-content-between'>
               <h2 className='text-white '>Workouts</h2>
               {/* <input type="text" onChange={(e)=>{setSearch(e.target.value)}} className='form-control w-25' placeholder='Enter body part for workout search'  /> */}
            </div>

                <Row className='mt-3 p-5 '>
                  {
                     workouts.length>0?
                     workouts.map(item=>(
                        <Col className='p-5'>
                   
                        <WorkoutCard  workout={item}/>
                        </Col>
                       
                     ))
                     :
                     <h2 className='text-white text-center mt-4'>No Workouts Available!!</h2>


                  }
                   
                  
                  </Row>  
                   
              
         </div>
      </>
   )
}

export default Workouts