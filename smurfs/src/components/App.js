import React, { useState } from "react";
import "./App.css";
import Smurf from './Smurf';
import SmurfForm from './SmurfForm'

const App = () => {

  const [smurfs, setSmurfs] = useState([]);
  console.log(smurfs);


  const addNewSmurf = props => {
    setSmurfs([...smurfs, props])
  }

  return(
    <div>
      <Smurf />
      <SmurfForm addNewSmurf={addNewSmurf}/>
    </div>

  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Smurf />
//         <br />
//         <SmurfForm />
//       </div>
//     );
//   }
// }

export default App;
