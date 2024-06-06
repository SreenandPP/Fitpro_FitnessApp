import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import server_url from '../services/server_url'


function DietCard({diet}) {
    return (
        <>
             <Link to={'/dietdetails'}  state={diet}>
                     <div className="card mt-5 bg-success" style={{ width: '18rem', borderRadius: '5px', border: 'none' }}>
                        <img style={{ height: '200px' }} src={`${server_url}/uploads/${diet.image}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title text-white">{diet.title}</h5>

                        </div>
                     </div>

                  </Link>

        </>
    )
}

export default DietCard