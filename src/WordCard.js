import React, { useState, Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';


const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 3,
        guess: [],
        completed: false
    }
}


export default class WordCard extends Component{

    constructor(props){
        super(props)
        console.log(this.props.value)
        this.state = prepareStateFromWord(this.props.value)        
         console.log(this.state.word)
     
    }
    
 

    activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        this.changeLevel()
        this.forceUpdate()
        console.log(this.state.word)
        let guess = [...this.state.guess, c]
        this.setState({guess})
        
        if(guess.length == this.state.chars.length){
            console.log(`${guess.join('').toString()} ${this.state.chars.join('').toString()}`)
            if(guess.join('').toString() == this.state.chars.join('').toString()){
                this.setState({guess: [], completed: true})
                document.getElementById('result').innerHTML = `You Win!!!!`

            }
            else{
                this.setState({guess: [], attempt: this.state.attempt - 1})
                document.getElementById('result').innerHTML = `You have "${this.state.attempt}" rounds  `
                    if(this.state.attempt == 0){
                        document.getElementById('result').innerHTML = `GameOver `
                        document.getElementById('correct_word').innerHTML = `Correct Word  = ${this.state.chars.join('').toString()}`
                    }
                    
            }
        }
    }

    changeLevel = () => {
        if(this.props.isNextLevel){
            this.setState({
                word: this.props.value,
                chars : _.shuffle(Array.from(this.props.value))
            })
            this.props.reset()
        }

    }
    render(){
        console.log(this.props.value)
        return(
            <div>
            { Array.from(this.props.value).map((c,i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} {...this.state}/>)}
            </div>
        );
    }


}