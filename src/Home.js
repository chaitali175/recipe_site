import React from "react";
import './App.css';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/js/bootstrap.bundle';
import Common from './components/Common';





const Home=()=>{
    

    return(
        <>
        <SearchForm/>
        <br/>
        <br/>
        
        <br/>
        <br/>
        <h1 style={{textAlign:'center', color:'black',fontSize:'4rem'}}>Try Some Latest Recipes</h1>
        <div className="App " >
          <Common name={"latest"}/>
      </div>

        </>
    )


}

export default Home;
