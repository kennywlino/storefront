import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementStock } from "../../store/actions";

const SimpleCart = (props) => {

  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  return (
    <div>
      <h2>Cart</h2>
    </div>
  );
}

export default SimpleCart;