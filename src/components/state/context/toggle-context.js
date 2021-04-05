import React, { useReducer, createContext } from 'react';
import { toggleReducer } from 'components/state/reducers/toggleReducer';
import { MENU_OPEN, RESET } from 'components/state/constants';

export const ToggleContext = createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleState, dispatch] = useReducer(toggleReducer, {
    toggledMenu: false,
    dimmed: false,
  });

  const menuHandler = (e) => {
    const { id } = e.target;

    if (id === 'Россия') return;

    dispatch({ type: MENU_OPEN });
  };

  const resetHandler = (e) => {
    const { id } = e.target;

    const exceptions = ['Регион', 'Инфо', 'Россия', 'Фильтр', 'Иконка'];

    if (exceptions.includes(id)) return;

    dispatch({ type: RESET });
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleState,
        dispatch,
        menuHandler,
        resetHandler,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
export default ToggleContextProvider;
