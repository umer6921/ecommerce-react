import React from 'react';
import trust1 from '../img/trust1.png';
import trust2 from '../img/trust2.png';
import trust3 from '../img/trust3.png';

export default function Trusted() {
  return (
    <>
    <section className='trust-section'>
      <div className='container'>
        <h6 className='text-center pt-3'>Trusted by 100+ Brands</h6>
        <div className='row'>
          <div className='col-4 col-lg-2'>
            <div>
              <img src={trust1} className='trust-brands'/>
            </div>

          </div>
          <div className='col-4 col-lg-2'>
            <div>
              <img src={trust2} className='trust-brands'/>
            </div>

          </div>
          <div className='col-4 col-lg-2'>
            <div>
              <img src={trust3} className='trust-brands'/>
            </div>

          </div>
          <div className='col-4 col-lg-2'>
            <div>
              <img src={trust1} className='trust-brands'/>
            </div>

          </div>
          <div className='col-4 col-lg-2'>
            <div>
              <img src={trust2} className='trust-brands'/>
            </div>

          </div>
          <div className='col-4 col-lg-2'>
            <div>
              <img src={trust3} className='trust-brands'/>
            </div>

          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
