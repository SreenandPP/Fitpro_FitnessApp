import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import FitNav from '../components/FitNav'


function Landing() {

   const [token,setToken]=useState("")
 
   useEffect(()=>{
      setToken(sessionStorage.getItem('token'))
     
   },[])

  

   return (
      <>

      <FitNav/>

         <section id='home'>

            {
               token ?
               <div
               style={{
                  height: '100vh',
                  backgroundImage: `url('https://i.pinimg.com/originals/25/e9/cf/25e9cfbebbc5eeb3ec11f926aecac4ef.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center', // Center items vertically
                  flexDirection: 'column', // Align items in a column
               }}
            >
               <div className='d-dlex flex-column justify-content-center align-items-center '>

                  <h2 className='text-white ' style={{ textTransform: 'uppercase', fontWeight: '800' }}>Transform Your <span style={{ color: "var(--dark-red)" }}> Sweat into Strength</span> </h2>
                  <h2 className='text-white  text-center ' style={{ textTransform: 'uppercase', fontWeight: '800' }}>Your <span style={{ color: "var(--dark-red)" }}> Effort into Results...</span> </h2>

                  <div className='d-flexjustify-content-center align-items-center text-center'>
                     <Link to={'/workouts'} className='btn btn-danger p-3 mt-3'  style={{ fontWeight: '900' }}>GO TO WORKMODE</Link>

                  </div>

               </div>


            </div>

            :

            <div
               style={{
                  height: '100vh',
                  backgroundImage: `url('https://w0.peakpx.com/wallpaper/686/51/HD-wallpaper-fitness-gym-workout-healthy.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center', // Center items vertically
                  flexDirection: 'column', // Align items in a column
               }}
            >
               <div className='d-dlex flex-column justify-content-center align-items-center '>

                  <h2 className='text-white ' style={{ textTransform: 'uppercase', fontWeight: '800' }}>Transform Your <span style={{ color: "var(--dark-red)" }}> Sweat into Strength</span> </h2>
                  <h2 className='text-white  text-center ' style={{ textTransform: 'uppercase', fontWeight: '800' }}>Your <span style={{ color: "var(--dark-red)" }}> Effort into Results...</span> </h2>
                    
                  <div className='d-flexjustify-content-center align-items-center text-center'>
                       <Link className='btn btn-danger p-3 mt-3' to={'/auth'} style={{ fontWeight: '900' }}>LET'S START</Link>
            
                  </div>

               </div>


            </div>
               
            }
          

         </section>

         <section id='about'>

            {
               token ?

                  <div className='p-5 text-center'>
                     <h2 className='text-white'>Never <span style={{color:'var(--dark-red)'}}>Give Up</span> </h2>
                  </div>
               
            :
            <div className='mt-5 p-5 w-100'>
               <div className='text-center text-white'>
                  <h2 style={{ fontWeight: '600' }}>About <span style={{ color: "var(--dark-red)" }}>Us</span> </h2>
                  <div style={{
                     width: '700px',
                     height: '300px',
                     margin: '0 auto',
                     backgroundColor: 'rgba(0, 0, 0, 0.5)',
                     padding: '20px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     overflow: 'hidden',
                     textAlign: 'justify'
                  }} className='mt-1'>
                     <p style={{ fontSize: '1.2rem', color: 'white' }} >
                        Welcome to <span style={{ color: 'var(--dark-red)' }}>FitPro The Fitness App</span>, your ultimate destination for achieving your
                        fitness goals and living a healthier, more active lifestyle.
                        Founded on the principles of dedication, innovation, and community,
                        our mission is to inspire and empower individuals of all fitness levels to reach their full potential.
                     </p>
                  </div>
               </div>
            </div>
            }
            
         </section>

         <section id='programme'>
            <div className='w-100 mt-3 '>
               <div className='text-center'>
                  <h2 className='text-white '>Programme</h2>
               </div>

               <div className='mt-3 p-5 shadow'>

                  <div className='d-flex mt-3 flex-row justify-content-evenly ' >
                     <Link to={'/workouts'}>
                        <div className="card" style={{ width: '18rem', backgroundColor: '#ff6c05', borderRadius: '5px' }}>
                           <img style={{ height: '300px' }} src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/8a/56/708a56b0-6e47-5fd3-b9a8-c75deb9b4143/virtuagym-0-0-1x_U007emarketing-0-5-85-220.png/512x512bb.jpg" className="card-img-top" alt="..." />
                           <div className="card-body">
                              <h5 className="card-title text-white">Workouts</h5>
                              <p className="card-text text-white">Embark on your fitness journey with our tailored workout plans designed to help you achieve your goals and feel your best.</p>

                           </div>
                        </div>


                     </Link>

                     <Link to={'/bmi'}>
                     
                       
                     <div className="card" style={{ width: '18rem', backgroundColor: '#fff', borderRadius: '5px', border: 'none' }}>
                        <img style={{ height: '325px' }} src="https://img.freepik.com/premium-vector/fatty-men-diet-trying-control-body-weight-with-bmi-body-mass-index-control_530733-3467.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title">BMI Calculator</h5>
                           <p className="card-text">Discover your Body Mass Index (BMI) to better understand your health and set personalized fitness goals.</p>

                        </div>
                     </div>
                     
                     
                     </Link>


                     
                     <Link to={'/diet'}>
                     
                     <div className="card" style={{ width: '18rem', backgroundColor: '#fce7b0', borderRadius: '5px' }}>
                        <img style={{ height: '325px' }} src="https://freedesignfile.com/upload/2018/06/healthy-food-illustration-vectors-06.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title">Diet Plan</h5>
                           <p className="card-text">Explore our customized diet plans to fuel your body, enhance your health, and reach your wellness goals.</p>

                        </div>
                     </div>
                     
                     </Link>
                     
                  </div>
               </div>
            </div>
         </section>

         <Footer />




      </>
   )
}

export default Landing
