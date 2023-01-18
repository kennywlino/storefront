import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SimpleCart from '../SimpleCart/SimpleCart';

const Header = (props) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);


    const [showCart, setShowCart] = useState(false);

    return (
        <Box sx={{flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase', color: 'black' }}>Our Store</Typography>
                    <Button sx={{ color:'black' }} onClick={() => setShowCart(!showCart)}>{`Cart (${cart.length})`}</Button>
                    {showCart /* && <SimpleCart /> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;