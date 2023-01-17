import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  )
}

export default App;
