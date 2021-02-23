import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
//import fire from './TipoFire';
let lista = pokemons;
class App extends React.Component {
  constructor(pros) {
    super(pros);
    this.proximoPokemon = this.proximoPokemon.bind(this);
    this.tipoFogo = this.tipoFogo.bind(this);
    this.tipoPsychic = this.tipoPsychic.bind(this);
    this.todos = this.todos.bind(this);
    this.state = {
      posiçãoDoPokemon: 0
    }
  }
  proximoPokemon() {
    this.setState((posiçãoAnterior, _pros) => ({
      posiçãoDoPokemon: posiçãoAnterior.posiçãoDoPokemon + 1
    }))
    if (this.state.posiçãoDoPokemon === lista.length -1 ) {
      this.setState({
        posiçãoDoPokemon: 0
      })
    }
  }

  tipoPsychic(){
    const pokemosPsychic = pokemons.filter(pokemon => pokemon.type === 'Psychic')
    lista = pokemosPsychic;
    this.setState({
      posiçãoDoPokemon: 0
    })
  }

  tipoFogo(){
    const pokemosFogo = pokemons.filter(pokemon => pokemon.type === 'Fire')
    lista = pokemosFogo;
    this.setState({
      posiçãoDoPokemon: 0
    })
  }

  todos(){
    lista = pokemons;
    this.setState({
      posiçãoDoPokemon: 0
    })
  }

  render(){
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={lista[this.state.posiçãoDoPokemon]} />
        <button onClick={this.proximoPokemon}>Proximo</button>
        <button onClick={this.tipoFogo}>Tipo Fogo</button>
        <button onClick={this.tipoPsychic}>Tipo Psychic</button>
        <button onClick={this.todos}>alls</button>
      </div>
    );
  }
}

export default App;