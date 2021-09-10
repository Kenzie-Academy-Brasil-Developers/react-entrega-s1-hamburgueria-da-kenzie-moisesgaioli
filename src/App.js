import './App.css';
import { useState } from 'react';
import MenuContainer from "./components/MenuContainer";


function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 


const [currentSale, setCurrentSale] = useState([]);

const [input, setInput] = useState("");

const [inCart, setInCart] = useState(false)



function showProducts (input) {

  setProducts(products.filter(item => item.name === input || item.category === input));
}


function handleClick (productId) {

  const cart = products.find(elem => elem.id === productId);

  const inCart = currentSale.some(elem => elem.id === productId)

  if (!inCart) {
    setCurrentSale([...currentSale, cart])
  } else {
    alert("Produto já adicionado!")
  }
  console.log(currentSale)

  setInCart(true)
}

function removeToCart (productId) {
  setCurrentSale(currentSale.filter(elem => elem.id !== productId));
}


const totalPrice = currentSale.reduce((acc, elem) => acc + elem.price, 0);


  return (
      <main className="main-container">

        <h1 className="main-title">Hamburgueria da Kenzie</h1>

        {/* <section className="return"> 
          <button onClick={<MenuContainer products={products} handleClick={handleClick}/>}> Voltar ao Menu</button>
        </section> */}

        <section className="menu">
          <h3 className="menu-title">Menu</h3>

          <section className="container-input">
          <input className="menu-input" type="text" value={input} placeholder="Posso ajudar?" onChange={(event) => setInput(event.target.value)} />
          <button className="btn-input" onClick={() => showProducts(input) } > Procurar </button>
          </section>

          <MenuContainer products={products} handleClick={handleClick} />
        </section>

        <section className="cart"> 
          <h3 className="cart-title">Carrinho</h3>
          <MenuContainer products={currentSale} inCart={inCart} removeToCart={removeToCart} />
          <div className="cart-total">Total: R$ {totalPrice} </div>
        </section>

      
      </main>
  );
}

export default App;
