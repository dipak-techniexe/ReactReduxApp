'use strict';
import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

class Main extends React.Component{
  render(){
    return(
      <div>
        <Menu cartItemsNumber={this.props.totalQty} />
        <Route exact path="/" component={BooksList} />
        <Route path="/admin" component={BooksForm} />
        <Route path="/cart" component={Cart} />
        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    totalQty: state.cart.totalQty
  };
}

export default connect(mapStateToProps)(Main);