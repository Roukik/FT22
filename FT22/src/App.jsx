import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (

        <div className="conteneur">
          <div className="partie-blanche"></div>
          <div className="partie-grise">
            <div id="export">
            <button class="export-button">Export</button>
            </div>
          </div>
          <div className="partie-bleue">
            <div id="export1">
            <button class="export1-button">Export</button>
            </div>
          </div>
        </div>
      );
      
}

export default App
