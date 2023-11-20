import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram, BsDiscord} from 'react-icons/bs';


export default function Footer() {
  return (
   <>
   <section className='footer py-4'>
    <div className='container position-relative'>
        <div className='get-started-div'>
            <div className='row justify-content-sm-between align-items-center'>
                <div className='col-12 col-sm-6'>
                <h6>Ready to get started?</h6>
                <h6>Talk to us today</h6>
                </div>
                <div className='col-12 col-sm-6 text-center text-md-end'>
                    <button className='btn btn-color'>
                        <NavLink to="/contact" className="text-white">GET STARTED</NavLink>
                    </button>
                </div>
            </div>

        </div>
        </div>
    </section>
    <footer >
        <div className='container py-custom '>
            <div className='row g-3'>
                <div className='col-12 col-md-6 col-lg-3'>
                    <h3 className='text-light'>Ecommerce</h3>
                    <p className='text-light'>This is our first online store. Hope You will able to automate your shopping experience</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <h6 className='text-light'>Subscribe to get important deals</h6>
                    <form action='#'>
                        <input type='email' className='form-control' name="email" />
                        <input type='submit' className='btn btn-color mt-3' />
                    </form>
                </div>
                <div className='col-6 col-md-6 col-lg-2 text-light'>
                    <h6 className='text-light'>Follow Us</h6>
                    <div className='d-flex'>
                       <div className='social-icon me-2'>
                        <BsDiscord className ="icon"/>
                       </div>
                       <div className='social-icon me-2'>
                        <FaLinkedinIn className ="icon" />
                       </div>
                       <div className='social-icon'>
                        <BsInstagram className ="icon" />
                       </div>
                    </div>
                </div>
                <div className='col-6 col-md- 6 col-lg-3'>
                    <h6 className='text-light'>Call Us</h6>
                    <h6 className='text-light'>+92302 53443234</h6>
                </div>
            </div>
        </div>

        <hr className='text-light' style={{height: "2px"}}></hr>
        <div className='container py-1'>
            {/* <div className='d-flex flex-column flex-sm-row'>
                <span className='me-5 text-light'>@{new Date().getFullYear()} Ecommerce. All Right Reserved</span>
                   
                    <span className='me-3 text-light d-inline'>Privacy Policy</span>
                    <span className='text-light'>Terms and Conditions</span>
                
            </div> */}
            <div className='row'>
                <div className='text-center text-sm-start col-sm-6 col-md-6 col-lg-4'>
                <span className='me-5 text-light'>@{new Date().getFullYear()} Ecommerce. All Right Reserved</span>
                </div>
                <div className='text-center text-sm-start col-sm-6 col-md-6 col-lg-4'>
                <span className='me-3 text-light'>Privacy Policy</span>
                    <span className='text-light'>Terms and Conditions</span>
                </div>
            </div>
        </div>
    
   </footer>
   
   </>
  )
}
