import { useListItems } from "../providers/ListItemsProvider";

function ListForm() {
  const { handleListItemsUpdate } = useListItems();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleListItemsUpdate(e.target.elements[0].value);

    e.target.elements[0].value = "";
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input name="item" type="text" />
    </form>
  );
}

export default ListForm;
