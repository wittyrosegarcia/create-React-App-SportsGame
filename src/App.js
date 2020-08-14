import React from 'react';
import Game from './game/Game.js'
import bunny from './photoFrame/Images/bunny-1.png'
import hound from './photoFrame/Images/hound.png'
import raccoon from './photoFrame/Images/raccoon.png'
import squirrel from './photoFrame/Images/squirrel.png'


function App(props) {
    const raccoons = {
      name: 'Russiaville Raccoons',
      logoSrc: raccoon
    }
  
    const squirrels = {
      name: 'Sheridan Squirrels',
      logoSrc: squirrel
    }
  
    const bunnies = {
      name: 'Burlington Bunnies',
      logoSrc: bunny
    }
  
    const hounds = {
      name: 'Hammond Hounds',
      logoSrc: hound
    }
  
    return (
      <div className="App">
        

        <Game
          venue="Union 525 Gem"
          homeTeam={squirrels}
          visitingTeam={raccoons}
        />
        <Game
          venue="Sheridan Arena"
          homeTeam={bunnies}
          visitingTeam={hounds}
        />
      </div>
    )
  }
  
  
  


export default App;
