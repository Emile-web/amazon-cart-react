import logo from './logo.svg';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
