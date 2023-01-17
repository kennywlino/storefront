import React from 'react';
import { connect } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { maxHeight } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import './Products.scss';

const Products = (props) => {

  const {
    products,
    activeCategory
  } = props;

  return (
    <div className="productsGrid">
    <h2>{activeCategory}</h2>
    <Grid container spacing={3}>
    {activeCategory && products.map((product, index) => {
        return (
          <Grid xs={4}>
            <Card key={`product-${index}`} variant="outlined" sx={{ maxWidth: "20rem", height: "20rem"}}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <CardActions>
                  <Button size="small">Add to Cart</Button>
                  <Button size="small">View Details</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        )
    })}
    </Grid>
    </div>
  )
};

const mapStateToProps = ({ products }) => {
    return {
        products: products.products,
        activeCategory: products.activeCategory
    }
}


export default connect(mapStateToProps)(Products);