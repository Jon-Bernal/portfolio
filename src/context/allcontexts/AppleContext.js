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
        backStateStack: [],
        forwardStateStack: [],
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
        backStateStack: [...state.backStateStack, state],
        forwardStateStack: [],
      };
    case "back button":
      if (state.backStateStack.length > 0) {
        const newBackState = [...state.backStateStack];
        newBackState.pop();

        return {
          ...state.backStateStack[state.backStateStack.length - 1],
          backStateStack: newBackState,
          forwardStateStack: [...state.forwardStateStack, state],
        };
      } else {
        return {
          openApp: "portfolio",
          showOsMenu: false,
          subMenu: "",
          portfolioItem: null,
          backStateStack: [],
          forwardStateStack: [...state.forwardStateState, state],
        };
      }
    case "forward button":
      console.log("state.forwardStateStack :>> ", state.forwardStateStack);
      if (state.forwardStateStack.length > 0) {
        return {
          ...state.forwardStateStack[state.forwardStateStack.length - 1],
        };
      }
      return state;
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
  backStateStack: [],
  forwardStateStack: [],
};

export const AppleProvider = (props) => {
  const [appleState, appleDispatch] = useReducer(appleReducer, initState);

  return (
    <AppleContext.Provider value={{ appleState, appleDispatch }}>
      {props.children}
    </AppleContext.Provider>
  );
};
