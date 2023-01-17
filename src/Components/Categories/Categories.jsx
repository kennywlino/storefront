import { connect } from "react-redux"

const Categories = (props) => {
    
    const {
        categories
    } = props;

    console.log('CATEGORIES:', props);

    return (
        <>
        <h3>Browse our Categories</h3>
        {
        categories.map((category, index) => (
          <div key={`category-${index}`}>
            <h5>{category.name}</h5>
          </div>
        ))
      }
        </>
    )
}



const mapStateToProps = ({ categories }) => {
    return {
        categories: categories.categories,
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);