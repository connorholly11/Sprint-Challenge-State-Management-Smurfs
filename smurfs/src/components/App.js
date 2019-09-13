import React, { useState } from "react";
import "./App.css";
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import SubmitForm from './SubmitForm';

const App = () => {

  const [smurfs, setSmurfs] = useState([]);
  console.log(smurfs);


  const addNewSmurf = props => {
    setSmurfs([...smurfs, props])
  }

  return(
    <div>
      <Smurf smurfs={smurfs}/>
      <SmurfForm addNewSmurf={addNewSmurf}/>
      {/* <SubmitForm /> */}
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
