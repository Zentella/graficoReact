// import logo from './logo.svg';
import React, { Component } from 'react';
// import './App.css';
import CanvasJSReact from './canvasjs.react';

//var CanvasJSReact = require('./canvasjs.react');

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends Component {	
  render() {
    const options = {
      title: {
        text: "Basic Column y Line Chart in React"
      },
      // data: [{				
      //           type: "column",
      //           dataPoints: [
      //               { label: "Apple",  y: 10  },
      //               { label: "Orange", y: 15  },
      //               { label: "Banana", y: 25  },
      //               { label: "Mango",  y: 30  },
      //               { label: "Grape",  y: 28  }
      //           ]
      //  }]

      data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },					
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 16, y: 60 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]


   }
		
   return (
      <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default App;