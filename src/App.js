import React, { Component } from 'react';
import pokeball from './pokeball.png';

class App extends Component {

  state = {
    loading: true,
    loaded: null,
  }
  
    async componentDidMount(){
      const url="https://pokeapi.co/api/v2/pokemon/gengar/";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({loaded: data,loading:false});
      console.log(data);
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.loaded ? 
        ( <div>loading...</div> ) : 
        ( <div>
          <h1 id="pokename">{this.state.loaded.name}</h1>
        </div> 
        )}
      </div>
    ); 
  }
}
export default App;


