import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart";
import { useNavigate } from "react-router-dom";
import "./ProductsCard.css"; // Import the CSS file

const ProductsCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = () => {
    dispatch(addItem(props));
    navigate("/cart");
  };

  return (
    <div className="card m-5">
      <div>
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="mt-2">Price: ${props.price.toFixed(2)}</h6>
        <h6 className="mt-2">Discount: {props.discountPercentage}%</h6>
        <h6 className="mt-2">Rating: {props.rating}</h6>
      </div>
      <button className="btn btn-success" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductsCard;
