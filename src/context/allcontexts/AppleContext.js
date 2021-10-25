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
        portfolioItem: null,
      };

    case "set os menu":
      return {
        ...state,
        showOsMenu: action.isOpen,
        osSubMenu: "",
      };

    case "open os submenu":
      return {
        ...state,
        osSubMenu: action.subMenu,
      };
    case "view portfolio item":
      return {
        ...state,
        portfolioItem: action.index,
      };
    case "reset":
      return {
        ...initState,
      };

    default:
      break;
  }
};

const initState = {
  openApp: "",
  showOsMenu: false,
  subMenu: "",
  portfolioItem: null,
};

export const AppleProvider = (props) => {
  const [appleState, appleDispatch] = useReducer(appleReducer, initState);

  return (
    <AppleContext.Provider value={{ appleState, appleDispatch }}>
      {props.children}
    </AppleContext.Provider>
  );
};
