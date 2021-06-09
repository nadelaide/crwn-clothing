export const addItemToCart = (cartItems, cartItemToAdd) => { //first takes current cartItems, then cart items to add
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id // will return first item found in the array, based on the passed in condition
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => //will return a new array - so components know to re-render
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem //if doesn't match
            ) 
    }

    //if cartItem is not found in the array
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}; 

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id
        );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};