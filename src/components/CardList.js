import React from 'react';
import Card from "./Card";
import cardData from ".CardData.json"

class CardList extends React.Component {
    state = {
        guess: [],
        score: 0,
        highscore: 0,
    }

    validateGuess(id) {
        if (!guesses.includes(id)) {
            guesses.push(id);
            this.state.set({score: this.score + 1});
            console.log("score: " + this.score)
        }
        resetGame();
    }

    resetGame() {
        this.state.set({guess: []});
        console.log(this.state.guesses);
        this.state.set({score: 0})
    }

    render

}



export default App;
