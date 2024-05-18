import React from 'react'
import './App.css';
import News from './components/News'
import Navbar from'./components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




const App = () => {
  return (     
    <Router>
    <Navbar />
    
          <div>
    <Switch>  
    <Route exact path="/">
      <News key="general" pageSize={8} category="general" country="in"/>
  
      </Route>
   
      <Route exact path="/business">
      <News key="business" pageSize={8} category="business" country="in"/>
      </Route>
     
      <Route exact path="/health">
      <News key="health" pageSize={8} category="health" country="in"/>
      </Route>

      <Route exact path="/science">
      <News key="science" pageSize={8} category="science" country="in"/>
      </Route>

      <Route exact path="/sports">
      <News key="sports" pageSize={8} category="sports" country="in"/>
      </Route>




      </Switch>
  
  </div>
  </Router>

   
  )
}

export default App
