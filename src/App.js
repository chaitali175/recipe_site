import React from 'react';
import Home from './Home';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Healthy from './components/Healthy';
import Dessert from './components/Dessert';
import Snacks from './components/Snacks';
import  Navbar from './Navbar';
import  IndiaSpecial from './components/IndiaSpecial';



const App =()=>{
  
  

  return(
    <>
    <Navbar/>
  
    <Switch>
    <Route  exact path="/" component={Home} />
      
      
      <Route  exact path="/snacks" component={Snacks} />
      
      <Route  exact path="/healthy" component={Healthy} />
      
      <Route  exact path="/dessert" component={Dessert} />

      <Route  exact path="/indiaspecial" component={IndiaSpecial} />
      
     
      <Redirect to='/'/>



    </Switch>

  
    
    
   </>
  )
}

export default App;