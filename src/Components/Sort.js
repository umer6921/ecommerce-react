import React from 'react';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { LuLayoutList } from 'react-icons/lu';
import { useFilterContext } from '../Context/filter_context';


export default function Sort() {
  const { setGridView, setListView, grid_view, filter_products } = useFilterContext();
  return (
    <>
      <div className='d-flex justify-content-between px-0'>
        <div>
          <button onClick={setGridView} className={grid_view === true ? "active-btn view-control me-3" : "view-control me-3"}>
            <BsFillGrid3X2GapFill />
          </button>
          <button onClick={setListView} className={grid_view === false ? "active-btn view-control me-3" : "view-control me-3"}>
            <LuLayoutList />
          </button>
        </div>
        <div>
          <p>{filter_products.length} total products</p>
        </div>
        {/* <div>
          <form className='w-100'>
            <select class="form-select form-select-sm" aria-label="Default select example" id="sort" onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div> */}

      </div>


    </>
  )
}
