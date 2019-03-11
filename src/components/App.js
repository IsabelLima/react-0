import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      recipes,
      searchString: '',
      filteredRecipes : this.recipes
    };
  }

/*   getValueInput (evt) {
    const inputValue = evt.target.value;
    this.setState({ input: inputValue });
    this.filterRecipes(inputValue);
  }
  
  filterRecipes (searchString) {
    const { recipes } = this.state;
    this.setState({
      filteredRecipes: recipes.filter(item => 
         item.title.includes(searchString))
    });
  }
 */
  render() { 
    return (
      <div className="App">
        <Navbar />
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
