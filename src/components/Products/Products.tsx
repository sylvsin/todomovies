import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";
import { ProductContext } from "../../ProductProvider";

const Home: React.FC = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div className="content">
        <ul>
            {
                products && products.map(product => (
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.imageUrl} alt="" style={{ width:"100px", height:"100px", borderRadius:"5px"}} />
                            </Link>
                            <br/>
                            Price: {product.price} $
                            <br/>
                            Released: {product.year}
                            <br/>
                            <button onClick={() => addToCart && addToCart(product)} style={{cursor: "pointer"}}>
                                Add to cart
                            </button>
                            <hr/>
                        </li>
                    )
                )
            }
        </ul>
    </div>
  );
};

export default Home;
