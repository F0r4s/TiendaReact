import React from "react";


import {Navbar} from "./componentes/Navbar";
import { Itemlistcontainer } from "./componentes/Itemlistcontainer";


import 'boxicons';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Itemlistcontainer greeting="Disfruta de las promos!"/>
     
     
    </div>
  );
}

export default App;

