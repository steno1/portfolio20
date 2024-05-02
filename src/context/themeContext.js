import React, { createContext, useContext, useEffect, useReducer } from "react"; // Imported necessary modules from React

import themeReducer from "./themeReducer"; // Imported themeReducer from the relative path

export const ThemeContext = createContext(); // Created a context named ThemeContext

const initialThemeState = JSON.parse(localStorage.getItem("themeSettings"))||
{ primary: "color-1", background: "bg-1" }; // Initialized initial theme state

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState); // Used useReducer to manage theme state and dispatch
  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName }); // Dispatches an action based on buttonClassName
  };
  //console.log(themeState)

  //save theme settings to local storage
  useEffect(()=>{
localStorage.setItem("themeSettings", JSON.stringify(themeState))
  },[themeState])
  
  return ( // Returned the ThemeContext.Provider with children
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook to use theme context wherever in our project
export const useThemeContext=()=>{
  return useContext(ThemeContext);
}