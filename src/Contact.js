import React from 'react'

export default function Contact() {
  return (
    <>
      <h6 className='text-center my-5'>CONTACT PAGE</h6>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13618.38293962272!2d73.0761325!3d31.4252625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922434b1f46aca1%3A0x618420108c71ce69!2sGERMAN%20TECH%20(AUTHORISED%20FAG%20BEARINGS%20DISTRIBUTOR)!5e0!3m2!1sen!2s!4v1686301077557!5m2!1sen!2s" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className='container py-5'>
        <div className='contact-form-div'>
          <form method='POST' className="contact-form mx-auto" action='https://formspree.io/f/mvonjyyv'>
            <input type='text' placeholder='Enter Name...' class="form-control" name='Username' required autoComplete='off' />
            <input type='email' placeholder='Enter Email...' class="form-control" name='Email' required autoComplete='off' />
            <textarea name='Messages'  class="form-control" placeholder='Enter Your Message...' cols="30" rows="8" required />
            <button type="submit" class="btn btn-color">Submit</button>
          </form>
        </div>
      </div>

    </>
  )
}
