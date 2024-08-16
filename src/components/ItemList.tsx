import { useState } from 'react';
import { initialItems } from '../lib/constants.ts';

type ItemType = {
  name: string;
  packed: boolean;
};

export default function ItemList() {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {items.map(({ name, packed }: ItemType) => {
        return <Item key={name} name={name} packed={packed} />;
      })}
    </ul>
  );
}

function Item({ name, packed }: ItemType) {
  return (
    <li className='item'>
      <label>
        <input type='checkbox' checked={packed} /> {name}
      </label>

      <button>❌</button>
    </li>
  );
}
