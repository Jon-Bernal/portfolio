import React, { createContext, useReducer } from "react";

export const MsContext = createContext();

const msReducer = (state, action) => {
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
    case "reset":
      console.log("osSubMenu :>> ", state.osSubMenu);
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
};

export const MsProvider = (props) => {
  const [msState, msDispatch] = useReducer(msReducer, initState);

  return (
    <MsContext.Provider value={{ msState, msDispatch }}>
      {props.children}
    </MsContext.Provider>
  );
};
