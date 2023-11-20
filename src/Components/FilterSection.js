import React from 'react';
import { useFilterContext } from '../Context/filter_context';
export default function FilterSection() {
  const { text, category, updateFilterValue, all_products, color} = useFilterContext();
  const getUniqueData = (data, property)=>{
    let newValue = data.map((curElem)=>{
      return curElem[property];
    })

    if(property === 'colors'){
     // return (newValue = ["All", ...new Set([].concat(...newValue))  ])
     newValue = newValue.flat();
    }
     return (newValue = ["all", ...new Set(newValue)]);
     console.log("🚀 ~ file: FilterSection.js:10 ~ getUniqueData ~ newValue:", newValue)
  }
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
 
  const colorsData = getUniqueData(all_products, "colors");
  console.log("🚀 ~ file: FilterSection.js:20 ~ FilterSection ~ colorsData:", colorsData)
 
  // const {text} = filters;
  return (
    <>
    <form onSubmit={(e)=>e.preventDefault() }>
    <input type="text" className="form-control input-sm" name='text' value={text} onChange={updateFilterValue} placeholder='SEARCH'/>
    </form> 
      <div className='my-5'>
        <h6 className='fw-bold'>Category</h6>
        <div>
          {
            categoryOnlyData.map((curElem,index)=>{
                return <button key={index} type='button' name='category' value={curElem} onClick={updateFilterValue} className='product-cat-btn'>
                  {curElem}
                </button>
            })
          }
        </div>
      </div>
      <div>
        <h6 className='fw-bold'>Company</h6>
        <form action='#'>
          <select name='company' id='company' onClick={updateFilterValue} class="form-select">

          {
            companyData.map((curElem)=>{
              return(
                <option value={curElem} >{curElem}</option>
              )
            })
          }

          </select>
        </form>
      </div>
      <div className='color-filter'>
          <h6 className='fw-bold'>Colors</h6>
          {
            colorsData.map((curColor, index)=>{
             return  <button 
             value={curColor} 
             name='color' 
             key={index} 
             type='button' 
             className={color ===curColor? 'color-selection me-2 active' : "color-selection me-2 "} 
             style={{backgroundColor: curColor}} 
             onClick={updateFilterValue}>
                {
                  color === curColor? "" : null
                }
              </button>
            })
          }
      </div>
    </>
  )
}
