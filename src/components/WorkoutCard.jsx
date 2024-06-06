import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import server_url from '../services/server_url'

function WorkoutCard({workout}) {
    return (
        <>
             <Link to={'/workoutdetails'} state={workout}>
                     <div className="card mt-5" style={{ width: '18rem', backgroundColor: 'var(--dark-red)', borderRadius: '5px', border: 'none' }}>
                        <img style={{ height: '200px' }} src={`${server_url}/uploads/${workout.image}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title text-white">{workout.title}</h5>

                        </div>
                     </div>

                  </Link>

        </>
    )
}

export default WorkoutCard