import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementStock } from "../../store/actions";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

const SimpleCart = (props) => {

  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  return (
    <div>
      <List sx={{
        position: "fixed",
        top: "5rem",
        right: "5rem",
      }}>
        {cart.map(product => {
          return <ListItemText secondary={product.name} />
        })}
      </List>
    </div>
  );
}

export default SimpleCart;