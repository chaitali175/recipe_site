import React from "react";
import Common from './Common';
import './indiaspecial.css';

import '../App';



const IndiaSpecial=()=>{

    return(
        <>

        <h1 style={{color:' #0099cc', marginTop:'50px',textAlign:'center', fontFamily:'"Jomolhari",serif',fontSize:'3rem'}}>SPECIAL FOOD RECIPES IN INDIA</h1>
        <br/><br/><br/>
        <div >
        <div className="row" style={{textAlign:'center'} } >
        <div className="col-12 col-md-4" >
        <h1 style={{fontFamily:'"Jomolhari",serif',color:'black'}}>South Indian</h1>
        <Common name={"South Indian"}/>
        </div>
        <div className="col-12 col-md-4" >
        <h1 style={{fontFamily:'"Jomolhari",serif',color:'black'}}>Maharashtrian</h1>
        <Common name={" Maharashtra"}/>
        </div>
        <div className="col-12 col-md-4" >
        <h1 style={{fontFamily:'"Jomolhari",serif',color:'black'}}>North Indian</h1>
        <Common name={"northindian"}/>

        </div>
        
        </div>
        </div>
    
     
        
       

        </>
    )


}

export default IndiaSpecial;
