import { createSelector } from "reselect";

//selectCart is an input selector that receives the whole
//state are returns a slice of it, 1 layer deep usually
const selectCart = (state) => state.cart;

//cartItems is a property on state.cart
/* createSelector has 2 arguments
1: An array of input selectors (in this example we only have 1, selectCart)
2: A function that returns the value we want out of the input selectors.
The parameters of this function will be the selectors we're using to 
produce the selectCartItems' return value (i.e. the selectors from the array in param 1)
It's convention to remove 'select' from the name in these params, so 'selectCart' in param1
becomes 'cart' in the function
*/
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0);
});
