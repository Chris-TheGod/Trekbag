import { useState } from 'react';
import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import { initialItems } from './lib/constants';

type ItemType = {
  name: string;
  packed: boolean;
};

function App() {
  const [items, setItems] = useState<ItemType[]>(initialItems);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
