import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heroes from './heroes.json'
import Wrapper from './components/Wrapper'
import Title from './components/Title'

  class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        heroes: heroes,
        unselectedHeroes: heroes
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selecta = type => {
        const findheroe = this.state.unselectedHeroes.find(item => item.heroe === heroe);

        if(findHeroe === undefined) {
            // failure to select a new hero
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                heroes: heroes,
                unselectedHeroes: heroes
            });
        }
        else {
            // success choose hero
            const newHeroes = this.state.unselectedHeroes.filter(item => item.hero !== hero);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                heroes: heroes,
                unselectedHeroes: newHeroes
            });
        }

        this.shuffleArray(heroes);
    };
  
    render() {
      return (
          <Wrapper>
              
              <Title />
              {
                  this.state.heroes.map(hero => (
                      <HeroCard
                          breed={hero.type}
                          image={hero.image}
                          selectHero={this.selectHero} 
                          curScore={this.state.curScore}
                      />
                  ))
              }
          </Wrapper>
      );
  }
}

export default App;




    
