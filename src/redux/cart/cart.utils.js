export const addItemToCart = (cartItems, cartItemToAdd) => {
  // .find() is an array function that returns the
  // first element in the array that matches provided condition
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
