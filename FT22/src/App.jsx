import { useState } from 'react'
import './App.css'
import {Bar} from "react-chartjs-2"

const data = {
  labels: ["red", "bleu", "green", "violet", "orange", "yellow"],
  datasets: [
    {
      label: "couleurs préférées en France",
      data: [23, 21, 32, 12, 15, 9],
      backgroundColor: ["red", "blue", "green", "violet", "orange", "yellow"],
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="conteneur">
      <div className="partie-blanche">
        <img src="../Images/logo_sncfbleu.png" alt="" className="logo" />
      </div>
      <div className="partie-grise">
        <div id="export">
          <button className="export-button">Export</button>
        </div>
                <h2 className='moisgauche'>Octobre 2023</h2>
        <div className="App">
          <div className="container">
            <div className="card">
              <Bar data={data} /> {}
            </div>
          </div>
        </div>
      </div>
      <div className="partie-bleue">
      <h2 className='annuel'>Annuel</h2>
        <div id="export1">
          <button className="export1-button">Export</button>
        </div>
        <div className="App">
          <div className="container">
            <div className="card">
              <Bar data={data} /> {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

