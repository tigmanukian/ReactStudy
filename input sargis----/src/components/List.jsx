import { useContext } from "react";

import styles from "../app.module.css";
import { useListItems } from "../providers/ListItemsProvider";

function List() {
  const { listItems } = useListItems();

  return (
    <ul>
      {listItems?.map((el, idx) => (
        <li key={idx}>{el.title}</li>
      ))}
    </ul>
  );
}


export default List;
