import "./styles.css"

function Product ({ elem, handleClick, inCart, removeToCart }) {
    
    return (

        <section className="card">
            <div className="product">
                <h5> {elem.name} </h5>
                <p> {elem.category} </p>
                <p> {elem.price} </p>
                {!inCart ? <button className="btn buy" onClick={() => handleClick(elem.id) } > Comprar </button> 
                            : <button className="btn remove" onClick={() => removeToCart(elem.id) } > Remover </button>
                }
                
            </div>
        </section>

    )
}







export default Product;