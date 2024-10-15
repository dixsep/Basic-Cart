import { useState } from "react";

function Cart({cart})
{
    let price = 0;

    for (let i = 0; i < cart.length ; i++)
    {
        const delta = cart[i].price * cart[i].quantity;
        price += delta;
    }
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length == 0 ? (<p>No Items in the Cart, Add items to the Cart.</p>):(
                <div>
                    {cart.map((item) => (
                        <div style = {{margin : '10px', border : '2px solid black', padding : '5px'}}>
                            <h3>{item.name}</h3>
                            <p>Quantity : {item.quantity}</p>
                            <p>Total Cost : ${item.price * item.quantity}</p>
                            
                        </div>
                    ))}
                </div>
            )}
            <div>
                {/* Total Price */}
                <h2>Total Amount to be Paid : ${price}</h2>
            </div>
        </div>
    )
}

export default Cart;