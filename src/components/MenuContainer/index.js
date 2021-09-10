import Product from "../Product";
import "./styles.css";

function MenuContainer ({ products, handleClick, inCart, removeToCart }) {

    return (

        <section className="card-container"> 
            {products.map(elem => <Product key={elem.id} elem={elem} handleClick={handleClick} inCart={inCart} removeToCart={removeToCart} />)}
        </section >
    )
}


export default MenuContainer;