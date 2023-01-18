import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/actions';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './Categories.scss';

const Categories = (props) => {
    
  const {
    categories,
    selectCategory
  } = props;

    return (
        <div className="breadcrumbs" role="presentation">
          <h3>Browse our Categories</h3>
          <Breadcrumbs separator="|" aria-label="breadcrumb">
            {
            categories.map((category, index) => (
                <Link underline="hover" color="blue" onClick={() => selectCategory(category)} key={`category-${index}`}>{category.displayName}</Link>
            ))
            }
          </Breadcrumbs>
        </div>
    )
}



const mapStateToProps = ({ categories }) => {
  return {
      categories: categories,
  }
}

const mapDispatchToProps = {
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);