import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [guns, setGuns] = useState([]);
  // console.log(guns);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className='card-container'>
        {
          guns.map(gun => (
            <Card
              key={gun.id}
              gun={gun}
            ></Card>
          ))
        }
      </div>
    </div>
  );
}

export default App;
