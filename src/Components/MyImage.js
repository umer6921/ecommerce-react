import React, { useState } from 'react'

export default function MyImage({ imgs = [{}] }) {
const [mainImage, setMainImage] = useState(imgs[0]);
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            {
                                imgs.map((curElem, index) => {
                                    return (
                                        <div className='row' key={index}>
                                            <figure>
                                                <img src={curElem.url} alt={curElem.filename} className='box-image--style img-fluid' onClick={()=>{setMainImage(curElem)}} />
                                            </figure>
                                        </div>
                                    )

                                })
                            }

                        </div>
                        <div className='col-8 my-auto'>
                           {
                            <img src={mainImage.url} title={mainImage.filename} className='img-fluid'/>
                           }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
