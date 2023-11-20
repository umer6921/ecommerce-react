import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { SiFsecure } from 'react-icons/si';
import { GiReturnArrow } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { useProductContext } from '../Context/productContext';
import {NavLink} from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice'
export default function Services() {


    const { isLoading, featureProducts } = useProductContext();
    if (isLoading) {
        return <div>...Loading</div>
    }
    return (
        <>
            <section id="services-section" className='py-5'>
                <div className='container'>
                    <h6>CHECK NOW</h6>
                    <h3 >Our Feature Services</h3>
                    <div className='row justify-content-evenly g-3'>
                        {


                            featureProducts.map((curElem) => {
                                return (
                                    
                                    <div className='col-12 col-md-6 col-lg-3 '>
                                        <NavLink to={`/singleproduct/${curElem.id}`}>
                                        <div className="card mx-auto" style={{ width: "18rem" }}>
                                            <div className='fig'>
                                                <img src={curElem.image} className="card-img-top" alt="..." />
                                                <div className='item-name'>
                                                    {curElem.category}
                                                </div>
                                            </div>
                                            <div className="card-body d-flex justify-content-between">
                                                <p className='m-0'>{curElem.name}</p>
                                                <p className='m-0'>{<FormatPrice price={curElem.price}/>}</p>
                                            </div>
                                        </div>
                                        </NavLink>
                                    </div>
                                    
                                )
                            })
                        }
                        {/* <div className="card mx-auto" style={{ width: "18rem" }}>
                                <div id='fig'>
                                    <img src={img1} className="card-img-top" alt="..." />
                                    <div className='item-name'>
                                        Phones
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <p className='m-0'>Iphone X</p>
                                    <p className='m-0'>$999</p>
                                </div>
                            </div> */}
                    </div>
                    {/* <div className='col-12 col-md-6 col-lg-3'>
                            <div className="card mx-auto" style={{ width: "18rem" }}>
                                <div id='fig'>
                                    <img src={img2} className="card-img-top img-fluid" alt="..." />
                                    <div className='item-name'>
                                        Accessories
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <p className='m-0'>Iphone X</p>
                                    <p className='m-0'>$999</p>
                                </div>
                            </div>
                        </div> */}
                    {/* <div className='col-12 col-md-6 col-lg-3'>
                            <div className="card mx-auto" style={{ width: "18rem" }}>
                                <div id='fig'>
                                    <img src={img3} className="card-img-top img-fluid" alt="..." />
                                    <div className='item-name'>
                                        Watches
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <p className='m-0'>Iphone X</p>
                                    <p className='m-0'>$999</p>
                                </div>
                            </div>
                        </div> */}
                </div>

            </section >
            <section className='py-5 servcie-section-two'>
                <div className='container'>
                    <div className='row justify-content-center g-5'>
                        <div className='col-12 col-lg-3 services-col'>
                            <div className='text-center '>

                                <FaShippingFast className='serivces-icon' />
                                <p>Super Fast and Free Delivery</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3'>
                            <div className='row h-100 text-center g-3'>
                                <div className='col-12 d-flex justify-content-center align-items-center border-redius' style={{ backgroundColor: "#80808014", borderRadius: "20px", height: "46%" }}>
                                    <div className=' '>
                                        <SiFsecure className='serivces-icon' />
                                        <p className='d-inline ms-2'>Non-contact Shipping</p>
                                    </div>


                                </div>
                                <div className='col-12 d-flex justify-content-center align-items-center border-redius' style={{ backgroundColor: "#80808014", borderRadius: "20px", height: "46%" }}>
                                    <div >
                                        <GiReturnArrow className='serivces-icon' />
                                        <p className='d-inline ms-2'>Money-back Guaranteed</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 services-col'>
                            <div className='  text-center '>
                                <RiSecurePaymentLine className='serivces-icon' />
                                <p>Super Secure Payment System</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
