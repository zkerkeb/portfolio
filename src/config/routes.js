import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {createGlobalStyle} from 'styled-components'
import Cv from "../screens/cv";
require("typeface-roboto")

const GlobalStyle = createGlobalStyle`
  @font-face { font-family: 'Roboto'; 
  font-weight: normal; 
  font-style: normal; 
  src: url('./Roboto.ttf'); }
` 

const Routes = () => {
  return(
    <Router>
      <GlobalStyle></GlobalStyle>
      <Switch>
        <Route exact path="/" component={Cv}></Route>
      </Switch>
    </Router>
  )
}

export default Routes