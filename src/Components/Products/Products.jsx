import React from 'react';
import { connect } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
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
      <Typography variant="h2" textAlign="center" mb="1rem" typography={{"text-transform": "uppercase"}}>
        {activeCategory}
      </Typography>
      <Grid container spacing={3}>
      {activeCategory && products.map((product, index) => {
          return (
            <Grid xs={4} key={`product-grid-${index}`}>
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