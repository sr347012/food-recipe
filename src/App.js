import logo from './logo.svg';
import './App.css';
import RecipeList from './recipe-list';
import RecipeDetail from './recipe-detail';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={RecipeList}></Route>
        <Route path="/:id" component={RecipeDetail}></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
