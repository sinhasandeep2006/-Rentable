import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ItemList from "../components/ItemList";

const FindPage = () => {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({ category: "", minPrice: "", maxPrice: "" });
  const BASE_URL = "http://localhost:5000";
  const navigate = useNavigate();

  const fetchItems = async () => {
    try {
      const params = {};
      if (filters.category) params.category = filters.category;
      if (filters.minPrice) params.minPrice = filters.minPrice;
      if (filters.maxPrice) params.maxPrice = filters.maxPrice;

      const res = await axios.get(`${BASE_URL}/api/items`, { params });
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [filters]);

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
           Back
        </button>
        <h2 className="text-center flex-grow-1"> Rentable Items</h2>
        <button className="btn btn-success" onClick={() => navigate("/add")}>
          Add Item
        </button>
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Category"
          className="form-control mb-2"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        />
        <div className="d-flex gap-2">
          <input
            type="number"
            placeholder="Min Price"
            className="form-control"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="form-control"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          />
        </div>
      </div>

      <ItemList items={items} />
    </div>
  );
};

export default FindPage;
