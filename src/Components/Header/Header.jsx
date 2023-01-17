import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Box sx={{flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase', color: 'black' }}>Our Store</Typography>
                    <Button sx={{ color:'black' }}>Cart</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;