import { useState, useEffect } from "react";

function useListItems() {
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem("listItems")) || []
  );

  const handleListItemsUpdate = (value) => {
    setListItems((prev) => [...prev, { title: value }]);
  };

//   useEffect(() => {
//     if (listItems) {
//       localStorage.setItem("listItems", JSON.stringify(listItems));
//     }
//   }, [listItems]);

  return {
    listItems,
    handleListItemsUpdate,
  };
}

export default useListItems;
