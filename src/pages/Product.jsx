import { useParams } from "react-router-dom";
import { products } from "../data/products";

function Product() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "15px" }}>
      <img
        src={product.image}
        alt={product.name}
        width="100%"
      />

      <h2>{product.name}</h2>

      <h3>₹{product.price}</h3>

      <p>{product.category}</p>
    </div>
  );
}

export default Product;