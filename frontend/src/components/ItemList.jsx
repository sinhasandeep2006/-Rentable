import React from "react";

const ItemList = ({ items }) => {
  if (items.length === 0) return <p className="text-center">No items found.</p>;

  return (
    <div className="row">
      {items.map((item) => (
        <div key={item._id} className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> ₹{item.pricePerDay}/day</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
