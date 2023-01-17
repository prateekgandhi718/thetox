import React from "react";
import thetoxContext from "./thetoxContext";

const ThetoxState = (props) => {
  //Define all your arrow functions here.
  return (
    <thetoxContext.Provider value={{}}>{props.children}</thetoxContext.Provider>
  );
};

export default ThetoxState;

//Wrap the App.js under this ThetoxState component.
