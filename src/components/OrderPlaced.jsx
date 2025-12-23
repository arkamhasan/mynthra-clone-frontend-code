import React, { useEffect } from "react";
import "./OrderPlaced.css";
import { Link, useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const randomId = Math.floor(Math.random() * 10000000);
  useEffect(() => {
    // Example: auto redirect after 5 seconds
    const timer = setTimeout(() => {
      console.log("User can be redirected");
      // navigate("/");  // react-router use kar rahe ho to
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="order-wrapper">
      <div className="order-card">
        <div className="success-icon">
          <span className="tick"></span>
        </div>

        <h1>Order Placed</h1>
        <p>Your payment was successful.</p>

        <div className="order-info">
          <p>
            <strong>Order ID:</strong> FK{randomId}
          </p>
          <p>Delivery in 3–5 business days</p>
        </div>
        <Link to="/">
          <button className="continue-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPlaced;
