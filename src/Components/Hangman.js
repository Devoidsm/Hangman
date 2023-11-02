//Imports Dependancies
import React, { Component } from "react";
import { Wordrandomiser } from './Dictionary';
import "./Hangman.css";
//Imports Images
import logo from './Images/Hangman.jpg';
import img0 from "./Images/0.png";
import img1 from "./Images/1.png";
import img2 from "./Images/2.png";
import img3 from "./Images/3.png";
import img4 from "./Images/4.png";
import img5 from "./Images/5.png";
import img6 from "./Images/6.png";

class Hangman extends Component {
    /** Allow 6 Failed attempts and use provided gif images. */
    static defaultProps = {
        maxFail: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };
  
    //Constructor Used
    constructor(props) {
        super(props);

        this.state = { 
            failedattempts: 0, 
            attempts: new Set(), 
            // answer would be "geometrician"
            answer: Wordrandomiser() 
        };
        //Binding event Listeners
        this.handleGuess = this.handleGuess.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }
    
    // restart the game and put things in default state
    restartGame() {
        this.setState({
        failedattempts: 0,
        attempts: new Set(),
        answer: Wordrandomiser()
        });
    }

    // Give out the basics of the game
    help() {
        return alert('You have 6 attempts to figure out the Word before You hang the Man, Try starting with vowels')
    }

    /** guessedWord is a deconstructor: show current-state of word:
        if guessed letters are {g,t,e}, show "ge__et______" for "apple"
        */
    guessedWord() {
        const { answer, attempts } = this.state;
        //array.Map() Method
        return answer
        .split("").map(ltr => (attempts.has(ltr) ? ltr : "_"));
    }
    
    /** handleGuest: handle a Attempted letter:
    - add to Attempted letters
    - if not in answer, increase failedattempts guesses
    */
    handleGuess(evt) {
    
    let ltr = evt.target.value;

    this.setState(st => ({
        Attempted: st.attempts.add(ltr),
        failedattempts: st.failedattempts + (st.answer.includes(ltr) ? 0 : 1)
    }));
    }

    /** generateButtons: return array of letters to buttons with the render */
    generateButtons() {
       
        const  { handleGuess } = this;
        const { attempts } = this.state;

        return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
            <button
            key={index}
            value={ltr}
            onClick={handleGuess}
            disabled={attempts.has(ltr)}
            >
            {ltr}
            </button>
        ));
    }
    
    /** function used render the hangman game */
    render() {
        const { failedattempts, answer} = this.state;
        const { images, maxFail } = this.props;

        let alternateText = `${this.state.failedattempts} Attempts Failed`;
        
        return (
            <div className='Hangman'>
            <img src={logo} className='App-logo'/>
            <h1>Hangman</h1>
            <img src={images[failedattempts]} alt={alternateText}/>
            <p>Attempts Failed: {failedattempts}</p>

            
            { answer === this.guessedWord().join("") ? <p>You Won!</p> :

                (failedattempts === maxFail ?
            <div>
                <p>YOU Failed </p>
                <p>Correct Word is: {answer}</p>
            </div>
            :
            <div>
            <p className='Hangman-word'>{this.guessedWord()}</p>
            <p className='Hangman-btns'>{this.generateButtons()}</p>
            </div>)
            }

            <button id='reset' onClick={this.restartGame}>Restart Game</button>
            <button id='help' onClick={this.help}>Help</button>
            </div>
        );
    }
}
    
export default Hangman;