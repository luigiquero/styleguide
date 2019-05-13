import { createContext, useContext } from 'react';

const MenuContext = createContext(true);

export const useMenuContext = () => useContext(MenuContext);

export default MenuContext;
