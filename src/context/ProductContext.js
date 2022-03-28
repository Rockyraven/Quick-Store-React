const { createContext, useContext, useEffect, useState } = require("react");

const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [ product, setProduct ] = useState([])
    const [category, setcategory ] = useState([]);

    useEffect(()=>{
        fetch('/api/products')
        .then(res=>res.json())
        .then(data=>setProduct(data.products))
    
      },[])
    useEffect(()=>{
        fetch('/api/categories')
        .then(res=>res.json())
        .then(data=>setcategory(data.categories))
      },[])

    return(
        
        <ProductContext.Provider value={{product: product,category: category}}>
            {children}
        </ProductContext.Provider>
    )
}
// custom Hook
export const useProduct = () => useContext(ProductContext);


