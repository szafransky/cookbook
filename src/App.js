import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Form from './components/Form';
import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';
import './scss/App.scss';
import TestBootstrap from './components/TestBootstrap';


function App() {

const APP_ID = "62fefcde";
const APP_KEY = "83b6422d00cdd69f87ee9e6b0e3df12e";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState("all");
// const getRecipes =  (e) => {
//   e.preventDefault();
//   const recipeName = e.target.elements.recipeName.value;
//   console.log(recipeName);
// }

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data);
  setRecipes(data.hits);
}

const updateSearch = (e) => {
  
  console.log("Im in the update search");
  setSearch(e.target.value);
  console.log(e.target.value);
}


const getSearch = e => {
  console.log("Im in getSearch method");
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

useEffect(() => {
  getRecipes();
}, [query])

  return (
    <div className="app">
      <Header />
      <Form onChange={updateSearch} onSubmit={getSearch} searchValue={search}/>
      
      <RecipeList recipesToList={recipes} />
      {/* <TestBootstrap /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
