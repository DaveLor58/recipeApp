import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "71a5cd26";
  const APP_KEY = "79b22a4302e32e026d90fcc8449a1829";
  
  // get recipes will be made into objects inside this state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault(); // stops app from refreshing 
    setQuery(search);
    setSearch("");
  }

  return (
    <div className= "App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
          style={{width: "370px", height: "2em"}}
          placeholder= "Type Recipe Here"
        />
        <button className="search-button" type="submit" style={{height: "50px", cursor: "pointer"}}>Search</button>
      </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label} 
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
        ))}
        </div>
    </div>
  );
};

export default App;
