import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { allDiets} from '../services/allApis'
import WorkoutCard from '../components/WorkoutCard'
import { Row,Col } from 'react-bootstrap'
import DietCard from '../components/DietCard'
import Fitlog from '../components/FItlog'

function Diet() {


   const [diets,setDiets]=useState([])



   useEffect(()=>{
      if(sessionStorage.getItem('token')){
         getData()
         
      }
      else{
         console.log("Login First");
      }
   },[])

   console.log(diets);

   const getData=async()=>{

      const header={"Authorization":`Bearer ${sessionStorage.getItem('token')}`}
      const result= await allDiets(header)
      console.log(result);
      if(result.status==200){
         setDiets(result.data)
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
            backgroundImage: `url('https://png.pngtree.com/background/20230611/original/pngtree-italian-food-photography-black-and-white-picture-image_3160702.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
             // Align items in a column
         }}
         
         >
            <div className='text-center mt-5'>
               <h2 className='text-white '>Diet Plan</h2>
            </div>

                <Row className='mt-3'>
                  {
                     diets.length>0?
                     diets.map(item=>(
                        <Col className='p-5'>
                   
                        <DietCard  diet={item}/>
                        </Col>
                       
                     ))
                     :
                     <h2 className='text-white text-center mt-4'>No Dieet Plan Available!!</h2>


                  }
                   
                  
                  </Row>  
                   
              
         </div>
      </>
   )
}

export default Diet