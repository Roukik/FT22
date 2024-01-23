import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (

        <div className="conteneur">

          <div className="partie-blanche">
            <img src="FT22/FT22/Images/logo_sncfbleu.png" alt="" className="logo" />
          </div>

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
