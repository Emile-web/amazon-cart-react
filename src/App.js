import Reactm, {useState} from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import './App.css';
import data from './Data';

function App() {

  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
        <CartItems items={cartItems} setCartItems={setCartItems} />
        <CartTotal items={cartItems}/>
      </div>
    </div>
  );
}

export default App;
