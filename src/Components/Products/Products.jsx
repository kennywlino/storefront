import { connect } from 'react-redux';

const Products = (props) => {

  const {
    products,
  } = props;

  console.log(props);

  return (
    <>
    <h3>Browse our categories</h3>
    <h2>Products</h2>
    </>
  )
};

const mapStateToProps = ({ products }) => {
    return {
        products: products.products,
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);