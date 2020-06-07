import React, { Component } from 'react';
import logo from './logo.svg';
import Template from './Template/Template'
import './App.css';
import Viewusers from './Template/Views/Viewusers'

// class app extends Component{
//   render(){
//     return(
//       <div className= "App">
//             <div className= "App-header">
//               <img src={logo} className= "App-logo" alt="app"></img>
//               <h1>Welcome to GreenCore</h1>
//               </div>
//               </div>
//     );

    


//   }



// }


function App() {
  return (
    <Template />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className= "container">
    //   <Viewusers />
    // </div>
  )
}

export default App;
