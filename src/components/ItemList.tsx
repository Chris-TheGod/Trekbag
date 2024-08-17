type ItemType = {
  name: string;
  packed: boolean;
};

type ItemListType = {
  items: ItemType[];
};

export default function ItemList({ items }: ItemListType) {
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
