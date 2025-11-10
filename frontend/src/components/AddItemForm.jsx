import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    pricePerDay: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(form);
    setForm({ name: "", description: "", category: "", pricePerDay: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <input
        type="text"
        placeholder="Item Name"
        className="form-control mb-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        className="form-control mb-2"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        className="form-control mb-2"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price per Day"
        className="form-control mb-3"
        value={form.pricePerDay}
        onChange={(e) => setForm({ ...form, pricePerDay: e.target.value })}
        required
      />
      <button className="btn btn-success w-100" type="submit">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
