'use strict';
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// REACT-ROUTER
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
// import {addToCart} from './actions/cartActions';
// import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1 create the store
const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers,middleware);

import Main from './main';


const Routes = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} />
    </Router>
  </Provider>
);

render(
  Routes, document.getElementById('app')
);

// STEP 2 create and dispatch actions
// store.dispatch(postBooks([{
//         id: 1,
//         title: 'this is the book title',
//         description: 'this is the book description',
//         price: 33.33
//     }, {
//         id: 2,
//         title: 'this is the second book title',
//         description: 'this is the second book description',
//         price: 50
//     }]
// ))

// // DISPATCH a second action
// store.dispatch(deleteBooks(
//     { id: 1 }
// ))

// // UPDATE a book
// store.dispatch(updateBooks(
//     {
//         id: 2,
//         title: "Learn React in 24h"
//     }
// ))

// //-->> CART ACTIONS <<--
// // ADD to cart
// store.dispatch(addToCart([{id: 2}]))