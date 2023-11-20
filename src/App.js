import logo from './logo.svg';
import './App.css';
import RecipeList from './components/recipe-list';
import RecipeDetail from './components/recipe-detail';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RecipeHome from './components/recipe-home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RecipeHome}></Route>
        <Route path="/react-food-recipe" exact component={RecipeList}></Route>
        <Route path="/:id" component={RecipeDetail}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
