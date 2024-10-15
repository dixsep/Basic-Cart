
function Product({product, addToCart, removeFromCart}) 
{
    return (
        <div style = {{margin : '10px', padding : '5px', margin : '2px solid black'}}>
            <h2>Name : {product.name}</h2>
            <h3>Price : ${product.price}</h3>
            <button onClick = {() => addToCart(product)}>Add To Cart</button>
            <button onClick = {() => removeFromCart(product.id)}>Remove from Cart</button>
        </div>
    )
}

export default Product;