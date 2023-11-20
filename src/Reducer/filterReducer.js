const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            console.log('load',state)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }
        // case "SET_GRID_VIEW":
        //     return {
        //         ...state,
        //         grid_veiw: false,
        //     }

        //Not working 
        // case "GET_SORT_VALUE":
        //     let userSortValue = document.getElementById("sort");
        //     let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
        //     console.log("🚀 ~ file: filterReducer.js:20 ~ reducer ~ sortValue:", sortValue)
        //     return {
        //         ...state,
        //         sorting_value: sortValue,
        //     }
        // case "SORTING_PRODUCTS":
        //     let newSortData;
        //     let tempSortProduct = [...action.payload];
        //     // console.log(tempSortProduct)
        //     if (state.sorting_value === "a-z") {
        //         newSortData = tempSortProduct.sort((a, b) =>
        //             a.name.localeCompare(b.name)
        //         );
        //     }
        //     if (state.sorting_value === "z-a") {
        //         newSortData = tempSortProduct.sort((a, b) =>
        //             b.name.localeCompare(a.name)
        //         );
        //     }
        //     return {
        //         ...state,
        //         filter_products: newSortData,
        //     };

        case "UPDATE_FILTERS_VALUE":
            const {name, value} = action.payload;
            return {
                ...state,
                [name] : value,
                
               
            }

        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterProduct = [...all_products];
            let filtered = []
            console.log("🚀 ~ file: filterReducer.js:54 ~ reducer ~ tempFilterProduct:", tempFilterProduct)
           
        
            const {category,company,text,color} = state;
            console.log('wow',state)
            if(text){
                filtered = tempFilterProduct.filter((curElem)=>{
                    return curElem.name.toLowerCase().includes(text);
                })
            }

            if(category !== "all"){
                filtered = tempFilterProduct.filter((curElem)=>{
                    return curElem.category == category;   
                })
            }
            if(company !== "all"){
                filtered = tempFilterProduct.filter((curElem)=>{
                    return curElem.company.toLowerCase() == company.toLowerCase();   
                })
            }

            if(color !== 'all'){
                filtered = tempFilterProduct.filter((curElem)=>{
                    return curElem.colors.includes(color)
                   
                })
                console.log("🚀 ~ file: filterReducer.js:80 ~ tempFilterProduct=tempFilterProduct.filter ~ tempFilterProduct:", filtered, "Hello   ")
            }
            return{
                ...state,
                filter_products: filtered,

            }    
        default:
            return state;
    }
}
export default reducer;