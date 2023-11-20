import React from 'react';
import {NavLink} from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>

      <section>
        <div className="container py-5">
          <div className='text-center'>
              <h2 className='display-2 fw-bold'>404</h2>
              <h2>Page Not Found</h2>
              <p>The page you are looking for doesn't exist.</p>
              <button className='btn btn-color '><NavLink to='/' className="text-light">Go back to Home</NavLink></button>
          </div>


        </div>
      </section>

    </>
  )
}
