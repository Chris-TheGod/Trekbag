const initialItems = [
  {
    name: 'good mood',
    packed: true,
  },
  {
    name: 'passport',
    packed: false,
  },
  {
    name: 'phone charger',
    packed: false,
  },
];

export default function ItemList() {
  return (
    <ul>
      {initialItems.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </ul>
  );
}

type ItemProps = {
  item: {
    name: string;
    packed: boolean;
  };
};

function Item({ item }: ItemProps) {
  return (
    <li className='item'>
      <label>
        <input type='checkbox' checked={item.packed} /> {item.name}
      </label>
    </li>
  );
}
