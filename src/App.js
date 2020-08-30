import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
//import CharacterCard from './CharacterCard';
//const word = "Hello";
const word = [
              ['RTY','ANW'],
              ['COOL','CRAP'],
              ['HELLO','WORLDS','HIPSTER'],
              ['BITCH','DANGE','FIGHT'],
              ['abcdefg','good luck']
            ]

//const word1 = ['Hello', 'Words']
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      isNextLevel: false,
      level: 0,
      word: word[0][Math.floor(Math.random()*word[0].length)]
    };
    }

  restart = () => {
    window.location.reload(false);
  }

  nxt_level = () => {
    let currentLevel  = this.state.level
    this.setState({
      level: currentLevel+1,
      word: word[currentLevel+1][Math.floor(Math.random()*word[currentLevel].length)],
      isNextLevel: true
    });
    console.log(this.state.word)
  }

  reset = () => {
    this.setState({isNextLevel : false})
  }

  render(){
    console.log(this.state.word)
    return(
      <div className="App">
        <div className = "titleBg">
        <h0 id = "title">Word Random Game</h0>
        </div>
        <div className = "text">
         <WordCard value={this.state.word} isNextLevel = {this.state.isNextLevel} reset = {this.reset}/> 
          <h1 id = 'result'> </h1>
          <h2 id="correct_word"> </h2>
        </div>
        
        <div className = "bg">
          <button id="restart" class="button" onClick={this.restart}>Restart</button>
          <button id="nxt_level" class="button" onClick={this.nxt_level}>Next Level</button>
        </div>
      </div>
      
    );
  }
}

export default App;