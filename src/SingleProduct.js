import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from './Context/productContext';
import PageNavigation from './Components/PageNavigation';
import MyImage from './Components/MyImage';
import FormatPrice from './Helpers/FormatPrice';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { SiFsecure } from 'react-icons/si';
import Star from './Components/Star';
import AddToCart from './Components/AddToCart';


export default function SingleProduct() {
  const { isSingleLoading, singleProduct, getSingleProduct } = useProductContext();
  console.log("🚀 ~ file: SingleProduct.js:8 ~ SingleProduct ~ singleProduct:", singleProduct);
  const API = "https://api.pujakaitem.com/api/products";
  const { id } = useParams();
  const { id: alias, name, company, description, category, stock, stars, reviews, image, price } = singleProduct;
  //console.log("🚀 ~ file: SingleProduct.js:6 ~ SingleProduct ~ id:", id);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])

  if (isSingleLoading) {
    return <div>loading...</div>;
  }

  return (

    <>
      <div>
        <div className='container py-5'>
          <PageNavigation title={name} />
          <div className='row'>
            <div className='col-12 col-lg-6'>

              <MyImage imgs={image} />
            </div>
            <div className='col-12 col-lg-6'>
              <h2>{name}</h2>
              <Star stars = {stars} reviews  ={reviews} />
              <p className='product-price fw-bold'>
                MRP: <del> <FormatPrice price={price + 22000} /></del>

              </p>
              <p className='product-real-price fw-bold'>
                Deal of the Day: <FormatPrice price={price} />
              </p>
              <p>{description}</p>
              <div className='d-flex justify-content-between'>
                <div className='benefits text-center'>
                  <TbTruckDelivery className='benefits-icons' />
                  <p><small>Free Delivery</small></p>
                </div>
                <div className='benefits text-center'>
                  <TbReplace className='benefits-icons' />
                  <p><small>30 Days Replacement</small></p>
                </div>
                <div className='benefits text-center'>
                  <TbTruckDelivery className='benefits-icons' />
                  <p><small>Secure Delivery</small></p>
                </div>
                <div className='benefits text-center'>
                  <SiFsecure className='benefits-icons' />
                  <p><small>5 Year Warranty</small></p>
                </div>

              </div>
               <p>Availablity <b>{stock > 0? "In Stock": "Out of Stock"}</b></p>
               <p>ID: <b>{id}</b></p>
               <p>Brand: <b>{company}</b></p>
              <hr style={{height: "2px"}}></hr>
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
