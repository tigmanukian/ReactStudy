import { createContext, useContext } from "react";
import useListItemsHook from "../hooks/useListItems.hook";

const listItemsContext = createContext(null);

const ListItemsProvider = ({ children }) => {
  const value = useListItemsHook();

  return (
    <listItemsContext.Provider value={value}>
      {children}
    </listItemsContext.Provider>
  );
};

export const useListItems = () => useContext(listItemsContext);

export default ListItemsProvider;
