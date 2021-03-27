import React, { useReducer, createContext } from 'react';
import { toggleReducer } from 'components/state/reducers/toggleReducer';

export const ToggleContext = createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleState, dispatch] = useReducer(toggleReducer, {
    toggled: false,
  });

  const resetToggle = (e) => {
    const target = e.target.id;

    if (target === 'Россия') return;

    if (toggleState.toggled) dispatch({ initial: 'reset' });
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleState,
        dispatch,
        resetToggle,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
export default ToggleContextProvider;
