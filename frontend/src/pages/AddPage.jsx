import React from "react";
import { useNavigate } from "react-router-dom";
import AddItemForm from "../components/AddItemForm";
import axios from "axios";

const AddPage = () => {
  const navigate = useNavigate();
  const BASE_URL = "https://rentable-p4md.onrender.com";

  const addItem = async (item) => {
    try {
      await axios.post(`${BASE_URL}/api/items`, item);
      alert("✅ Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("❌ Failed to add item.");
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
           Back
        </button>
        <h2 className="text-center flex-grow-1"> Add a New Rentable Item</h2>
        <button className="btn btn-primary" onClick={() => navigate("/find")}>
          Find Items
        </button>
      </div>

      <AddItemForm addItem={addItem} />
    </div>
  );
};

export default AddPage;
