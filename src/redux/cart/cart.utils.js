export const addItemToCart = (cartItems, cartItemToAdd) => {
  // .find() is an array function that returns the
  // first element in the array that matches provided condition
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  //If the item only has 1 quantity
  if (existingCartItem && existingCartItem.quantity === 1) {
    //Remove the item from the cart
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  //Otherwise, minus 1 from the quantity property
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
  });
};
