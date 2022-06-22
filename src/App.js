import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  }

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar />
      {
        cart.map(item => (

          <h1 key={item.id}>{item.name}</h1>
        ))
      }
      <div className='card-container'>
        {
          guns.map(gun => (
            <Card
              key={gun.id}
              gun={gun}
              handleAddToCart={handleAddToCart}
            ></Card>
          ))
        }
      </div>
    </div>
  );
}

export default App;
