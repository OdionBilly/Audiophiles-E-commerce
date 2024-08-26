import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [Product, setProduct] = useState([]);

    return <ProductContext.Provider value={{Product}}> {children}</ProductContext.Provider>;
}

export default ProductContext;