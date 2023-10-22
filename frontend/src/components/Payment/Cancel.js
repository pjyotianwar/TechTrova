import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="Payment_Contanier">
      <div className="Success_Payment">
        <div className="Success_icon">
          <img
            src="https://png.pngtree.com/png-clipart/20230923/original/pngtree-payment-error-2d-vector-isolated-illustration-design-woman-icon-vector-png-image_12578533.png"
            alt=""
          />
        </div>

        <div className="Success_message">
          <h2>Order Payment is Cancelled</h2>
          <h3>Server Error !</h3>
          <p>
            <Link to={"/"}>Explore more products</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
