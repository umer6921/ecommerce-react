//create context
// provider
// consumer => useContext Hook
import axios from "axios";
import { useEffect, useContext, createContext, useReducer } from "react";
import reducer from '../Reducer/productReducer';
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}
const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url)=>{
        dispatch({type: "SET_LOADING"});
    try {
        const resp = await axios.get(url);
        const products = await resp.data;
       // console.log("🚀 ~ file: productContext.js:13 ~ getProducts ~ data:", products);
        dispatch({type: "SET_API_DATA",  payload: products});
    } catch (error) {
        dispatch({type: "API_ERROR"});
        
    }
   };
  //2nd api for single porduct

  const getSingleProduct = async(url)=>{
    dispatch({type: "SET_SINGLE_LOADING"});
    try {
        const resp = await axios.get(url);
        const singleProduct = await resp.data;
        dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct})
    } catch (error) {
        dispatch({type: "SET_SINGLE_ERROR"});   
        
    }
  }


    useEffect(()=>{
        getProducts(API);
    }, [])

    return (
    <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
    )
}
const useProductContext = ()=>{
    return  useContext(AppContext);
}
export {AppProvider, AppContext, useProductContext };