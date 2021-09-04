import React from "react";
import classes from "./App.module.css";
import ocean from "./Assets/images/ocean.jpg";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    <div className={classes.App}>
      <img src={ocean}  alt="" />
      <Auth />
    </div>
  );
}

export default App;

// import React from 'react';
// import classes from './App.module.css';

// function App() {
//   return (
//     <div className={classes.App}>

//     </div>
//   );
// }

// export default App;
