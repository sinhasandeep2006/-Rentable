import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="mb-4">Thanks for Visiting!</h1>
      <p className="mb-4">Welcome to the Rentable Items App</p>
      <div className="d-flex gap-3">
        <button className="btn btn-primary" onClick={() => navigate("/find")}>
           Find Items
        </button>
        <button className="btn btn-success" onClick={() => navigate("/add")}>
           Add Item
        </button>
      </div>
    </div>
  );
};

export default Home;
