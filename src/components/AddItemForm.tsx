import { useState } from 'react';
import Button from './Button';

type ItemType = {
  name: string;
  packed: boolean;
};

type AddItemFormProps = {
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

export default function AddItemForm({ setItems }: AddItemFormProps) {
  const [itemText, setItemText] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Add an item</h2>
      <input
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
