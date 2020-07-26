import React from "react";
import Common from './Common';
import './indiaspecial.css';

import '../App';



const IndiaSpecial=()=>{

    return(
        <>

        <h2 style={{color:' #40b48e', marginTop:'50px',textAlign:'center', fontFamily:'"Jomolhari",serif',fontSize:'3.5rem'}}>SPECIAL FOOD RECIPES IN INDIA</h2>
        <br/><br/><br/>
        <div >
        <div className="row" style={{textAlign:'center'} } >
        <div className="col-12 col-md-4" >
        <h1 style={{fontFamily:'"Jomolhari",serif',color:'whitesmoke',fontSize:'3rem'}}>South Indian</h1>
        <Common name={"South Indian"}/>
        </div>
        <div className="col-12 col-md-4" >
        <h1 style={{fontFamily:'"Jomolhari",serif',color:'whitesmoke',fontSize:'3rem'}}>Maharashtrian</h1>
        <Common name={" Maharashtra"}/>
        </div>
        <div className="col-12 col-md-4" >
        <h1 style={{fontFamily:'"Jomolhari",serif',color:'whitesmoke',fontSize:'3rem'}}>North Indian</h1>
        <Common name={"north india"}/>

        </div>
        
        </div>
        </div>
    
     
        
       

        </>
    )


}

export default IndiaSpecial;
