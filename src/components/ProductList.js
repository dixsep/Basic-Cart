
import Product from "./Product";

function ProductList({products, addToCart, removeFromCart})
{
    return (
        <div style = {{display : 'flex', flexDirection : 'column'}}>
            <h1>Products : </h1>
            {products.map((product) => <Product key = {product.id} product = {product} addToCart = {addToCart} removeFromCart = {removeFromCart}/>)}
        </div>
    )
}

export default ProductList;