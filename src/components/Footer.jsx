import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className='bg-dark w-100 d-flex flex-column justify-content-center text-white mt-5'
      >
        <div className='row p-5  '>
          <div className='col '>
            <h4 style={{color:'var(--dark-red)'}}>FitPro </h4>
            <p style={{ textAlign: 'justify'}}>
            Your journey to health and fitness starts here. Join our community for expert tips, personalized workouts, and all
             the motivation you need to achieve your goals. Let's make every day a step closer to a healthier, happier you!
            </p>

          </div>
          <div className='col  '  >
            <h4 style={{color:'var(--dark-red)'}}>Links</h4>
            <Link to={'/bmi'} style={{color:'white', textDecorationLine:'none' }}>Bmi</Link><br />
            <Link to={'/workouts'} style={{color:'white', textDecorationLine:'none' }}>Workouts</Link><br />
            <Link to={'/diet'} style={{color:'white', textDecorationLine:'none' }}>Diet</Link>
          </div>
          <div className='col  '>
            <h4 style={{color:'var(--dark-red)'}}>Reference</h4>
            <a href="https://getbootstrap.com/" target='_blank' style={{color:'white', textDecorationLine:'none' }}>Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'white', textDecorationLine:'none' }}>React-Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'white', textDecorationLine:'none' }}>React</a>
          </div>
        </div>

        <div className='text-center'>

          <p><i class="fa-solid fa-copyright"></i>FitPRo-2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer