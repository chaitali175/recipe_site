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
        <h2 style={{textAlign:'center', color:'whitesmoke',fontSize:'4rem' ,fontFamily:'"Jomolhari", serif'}}>Try Some Latest Recipes</h2>
        <div className="App " >
          <Common name={"latest"}/>
      </div>


        </>
    );
    

    }


export default Home;
