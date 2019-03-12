import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      recipes: this.recipes,
      searchString: '',
      filteredRecipes : this.recipes
    };
  }

  filterRecipes = (searchString) => {
    this.filterRecipes = this.filterRecipes.bind(this);
    this.setState({
      filteredRecipes: this.state.recipes.filter(item => 
         item.title.toString().toLowerCase().includes(searchString.target.value.toString().toLowerCase())
         || item.ingredients.toString().toLowerCase().includes(searchString.target.value.toString().toLowerCase())
         )
    });
  }
 
  render() { 
    return (
      <div className="App">
        <Navbar functionOnchange={this.filterRecipes}/>
        <div className="container mt-10">
          <div className="row">
            {this.state.filteredRecipes.map((item, i) => {
              return <RecipeItem recipe={item} key={i}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
