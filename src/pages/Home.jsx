import { Link } from "react-router-dom";
import { products } from "../data/products";

function Home({ cart, wishlist }) {
  return (
    <div style={{ padding: "15px" }}>
      <h1>🛒 DriftCart</h1>

      <div style={{ marginBottom: "15px" }}>
        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        {" | "}

        <Link to="/wishlist">
          Wishlist ({wishlist.length})
        </Link>
      </div>

      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "white",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="100%"
            />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <Link to={`/product/${product.id}`}>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;