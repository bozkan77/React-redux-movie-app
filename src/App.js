import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css' ;
import './App.css';


import MoviesPage from './pages/MoviesPage';
import Footer from './containers/Footer';
import Header from './containers/Header';






class App extends Component {
    

 

  render() {

    

    return (
      <div className="App">

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Header />

        <Container text>
        <Route path="/movies" component={MoviesPage}></Route>
         
        </Container>

        <Footer />
        
      </div>
    );
  }
  
}

export default App;
