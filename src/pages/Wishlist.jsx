function Wishlist({ wishlist }) {
  return (
    <div style={{ padding: "15px" }}>
      <h1>❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No Wishlist Items</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;