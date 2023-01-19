import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementStock } from "../../store/actions";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SimpleCart = (props) => {

  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  return (
    <div>
      <List sx={{
        position: "fixed",
        top: "5rem",
        right: "1rem",
      }}>
        {cart.map((product, value) => {
          return(
            <>
              <ListItem
                key={value}
                secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon />
                </IconButton>
                }
              >
                <ListItemText secondary={product.name} />
              </ListItem>
            </>
          )
        })}
      </List>
    </div>
  );
}

export default SimpleCart;