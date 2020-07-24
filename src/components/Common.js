import React, { useState ,useEffect} from "react";

import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

import 'bootstrap/dist/js/bootstrap.bundle';
import Recipe from "./Recipe";



const Common=(props)=>{



  const [query, setQuery] = useState();
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${props.name}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
        const result = await Axios.get(url);
        
        console.log(result);
        setRecipes(result.data.hits);
        setQuery("");
        
      } 
  };
useEffect(() => {
   
        getData();
   
}, [])


    return(
        <>
        




        <div className="App " >
      <div className="recipes">
     
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
      </div>

   
        </>
    )


}

export default Common;
