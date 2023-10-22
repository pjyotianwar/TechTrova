import React from "react";
import "./payment.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="Payment_Contanier">
      <div className="Success_Payment">
        <div className="Success_icon">
          <img
            src="https://png.pngtree.com/png-clipart/20230815/original/pngtree-cashless-payment-for-groceries-2d-vector-isolated-illustration-picture-image_7950451.png"
            alt=""
          />
        </div>

        <div className="Success_message">
          <h2>Order Placed Successfuly</h2>

          <p>
            <Link to={"/"}>Explore more products..</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
