import React from 'react'
import FilterSection from './Components/FilterSection';
import Sort from './Components/Sort';
import ProductList from './Components/ProductList';
import { useFilterContext } from './Context/filter_context';
import { useProductContext } from './Context/productContext';


export default function Product() {
  const {filter_products} = useFilterContext();
  //console.log("🚀 ~ file: Product.js:10 ~ Product ~ filter_products:", filter_products);
  const {products} = useProductContext();
  //console.log("🚀 ~ file: Product.js:13 ~ Product ~ products:", products)
  
  
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <FilterSection />


            </div>
            <div className='col-10'>
              <div className='row'>
                <Sort />
              </div>
              <div className='row'>
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
