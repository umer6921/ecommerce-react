import { useContext } from "react";
import { createContext } from "react";
import { useProductContext } from "./productContext";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from '../Reducer/filterReducer';
import { useState } from "react";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    text: '',
    category: "all",
    company: "all",
    color: "all",
};




export const FilterContextProdiver = ({ children }) => {
    const [grid_view, setVeiw] = useState(false);
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    //set the grid view
    const setGridView = () => {
        //return dispatch({type:"SET_GRID_VIEW"});
        return setVeiw(true);
    }

    const setListView = () => {
        return setVeiw(false);
    }
    // sorting function 
    // const sorting= (event)=>{
    //     // let userValue = event.target.value;
    //     // console.log(userValue)
    //     dispatch({type: "GET_SORT_VALUE"});
    // }

    // // //to sort the products
    // useEffect(()=>{
    //    dispatch({type: "SORTING_PRODUCTS", payload: products});

    // }, [ state.sorting_value])

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
    }, [state.text,state.category,state.company])
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products])

    //Update the filter values
    const updateFilterValue = (event) => {
        let name = event.target.name;
      
        let value = event.target.value;
        
        

        dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    }
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, grid_view, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { useFilterContext };

