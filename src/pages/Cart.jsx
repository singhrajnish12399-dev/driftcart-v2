function Cart({ cart }) {
  return (
    <div style={{ padding: "15px" }}>
      <h1>🛒 Cart</h1>

      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;