import React, { createContext, useReducer } from "react";

export const AppleContext = createContext();

const appleReducer = (state, action) => {
  switch (action.type) {
    case "change open app":
      return {
        ...state,
        showOsMenu: false,
        osSubMenu: "",
        openApp: action.name,
      };

    case "set os menu":
      return {
        ...state,
        showOsMenu: action.isOpen,
        osSubMenu: "",
      };

    case "open os submenu":
      console.log("osSubMenu :>> ", state.osSubMenu);
      return {
        ...state,
        osSubMenu: action.subMenu,
      };

    default:
      break;
  }
};

const initState = {
  openApp: "",
  showOsMenu: false,
  subMenu: "",
};

export const AppleProvider = (props) => {
  const [appleState, appleDispatch] = useReducer(appleReducer, initState);

  return (
    <AppleContext.Provider value={{ appleState, appleDispatch }}>
      {props.children}
    </AppleContext.Provider>
  );
};
