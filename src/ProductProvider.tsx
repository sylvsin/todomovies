import React, { useContext, useEffect, useState, useCallback } from "react";
import { Product } from "./types";
import { AppContext } from "./AppContext";

export interface ProductContext {
  products?: Product[];
  addToCart?: (product: Product) => void;
  removeFromCart?: (product: Product) => void;
}

export const ProductContext = React.createContext<ProductContext>({});

export const ProductContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { api } = useContext(AppContext);
  // const [loading, setLoading] = useState(true)
 
  const addToCart = useCallback(
    product => {
      const newProducts = products.map(prod => {
        if (prod.id === product.id) {
          return { ...product, isAddedToCart: true };
        }
        return prod;
      });
      setProducts(newProducts);
    }, [products] );

  const removeFromCart = useCallback(
    product => {
      const newProducts = products.map(prod => {
        if (prod.id === product.id) {
          return { ...product, isAddedToCart: false };
        }
        return prod;
      });
      setProducts(newProducts);
    }, [products] );

  useEffect(() => {
    if (api) {
      api
        .get<Product[]>("products")
        .then(response => {
          return response.data;
        })
        .then(data => {
          setProducts(data);
          // setLoading(false)
        });
    }
  }, [api] );

  // if(loading) {
  //   return(<div style={{ textAlign: "center" }}>Loading...</div>)
  // }

  return (
    <ProductContext.Provider value={{ addToCart, removeFromCart, products }}>
      {children}
    </ProductContext.Provider>
  );
};
