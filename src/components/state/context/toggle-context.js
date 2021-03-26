import React, { useReducer, createContext } from 'react';
import { toggleReducer } from 'components/state/reducers/toggleReducer';

export const ToggleContext = createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleState, dispatch] = useReducer(toggleReducer, {
    toggled: false,
  });

  return (
    <ToggleContext.Provider
      value={{
        toggleState,
        dispatch,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
export default ToggleContextProvider;
