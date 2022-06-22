import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(cart);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <Navbar cart={cart} openModal={openModal} />
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <button className='close-modal' onClick={closeModal}>X</button>
          <div>
            {
              cart.map(item => (

                <h1 className='cart-item' key={item.id}>
                  <img className='item-img' src={item.img} alt="" />
                  {item.name}</h1>
              ))
            }
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
