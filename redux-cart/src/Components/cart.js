import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./cartproduct";
import { modifyItem, removeItem } from "../redux/cart";

const CartPage = () => {
  const list = useSelector((state) => state.cart.list);

  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const getTotalAmount = () => {
    return list.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  };

  return (
    <>
      <div>
        <h3 className="imagetext">Total Amount : {getTotalAmount()}</h3>
      </div>
      {list.length > 0 ? (
        list.map((item) => (
          <CartProduct
            {...item}
            key={item.id}
            item={item}
            handleIncrement={() => handleIncrement(item)}
            handleDecrement={() => handleDecrement(item)}
            handleRemove={() => handleRemove(item)}
          />
        ))
      ) : (
        <>
          <h3 className="image-text">Your Cart is Empty</h3>
          <img
            className="cart-image"
            src="https://img.freepik.com/free-photo/funny-illustration-3d-cartoon-backpacker_183364-80424.jpg?w=1380&t=st=1690967265~exp=1690967865~hmac=3a953df10987b13a88915a21662843501208169d499267818c9ff582e45e1ca6"
            alt="your cart is empty"
          />
        </>
      )}
    </>
  );
};

export default CartPage;