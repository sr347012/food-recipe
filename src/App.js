import logo from './logo.svg';
import './App.css';
import react, {useEffect, useState} from 'react';
import Recipe from './recipe';

const App = () => {
  const APP_ID = 'bfdfa512';
  const API_KEY = '8f45f8725135b3df2cdf26dd2f48569f';
  // const [count,setCount] = useState(0);
  // const increment = () => {
  //   setCount (count + 1);
  // };

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Banana');

  const getRecipes = async () =>  {
    const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    const response =await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    // console.log(data);
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch (e.target.value)
    // console.log(e.target.value);
  }

  const updateQuery = (e) => {
    e.preventDefault();
    console.log(search);
    setQuery(search);
    setSearch('');
  }
  useEffect (() => {
    // console.log('Effect has been run');
    getRecipes();
  },[query]);

  return (
    <div className='App'>
      <form onSubmit={updateQuery} className='search-form'>
      <h1 className='title'>Recipe Search Application</h1>

        <input className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch} />
        <button className='search-button' type='submit' >

        Search   </button>
        {/* <h1>{count}</h1>      */}
        
      </form>
      {recipes.map((rec) => (
      <Recipe title={rec.recipe.label}
      img = {rec.recipe.image}
      calories = {rec.recipe.calories} 
      key = {rec.recipe.calories}
      />
      ))}
    </div>
  );
}

export default App;