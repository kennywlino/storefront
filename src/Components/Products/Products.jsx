import React from 'react';
import { connect } from 'react-redux';
import { decrementStock } from '../../store/actions';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { maxHeight } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import './Products.scss';

const Products = (props) => {

  const {
    products,
    activeCategory,
    decrementStock
  } = props;

  return (
    <div className="productsGrid">
      <Typography variant="h2" textAlign="center" mb="1rem" typography={{"textTransform": "uppercase"}}>
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
                    <Button size="small" onClick={() => decrementStock(product)}>Add to Cart</Button>
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

const mapStateToProps = ({ products, activeCategory }) => {
    return {
        products: products,
        activeCategory: activeCategory
    }
}
const mapDispatchToProps = {
  decrementStock
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);