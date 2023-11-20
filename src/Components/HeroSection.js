import React from 'react';
import styled from 'styled-components';
import heroimg from '../img/hero.jpg'

export default function HeroSection({data}) {
    return (
        <>

            <Wrapper>
                <div className='container my-5'>
                    <div className='row h-100 justify-content-evenly g-5'>
                        <div className='col-12 col-lg-5 col-xl-5'>
                            <h6>
                                {data}
                            </h6>
                            <h3 className='fw-bold display-5'>
                                Ecommerce Store
                            </h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora totam sint rem. In porro odit, architecto sequi blanditiis nisi eveniet delectus cum ratione assumenda sapiente! Nobis consequuntur quaerat adipisci harum?
                            </p>
                            <button className='btn btn-color'>SHOP NOW</button>
                        </div>

                        <div className='col-12 col-lg-7 col-xl-4'>
                            <figure id="hero-fig">
                                <img src={heroimg} className='img-fluid-custom' />
                            </figure>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`


`