export const addItemToCart = (cartItems, cartItemToAdd) => {
	// ?? 👇 if there's no equal value, this variable will be UNDEFINED then proceed to line 18
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	)

	if (existingCartItem) {
		// ?? 👇 this will overwrite the existing object in cartItems array; returns new version
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToAdd.id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem // ?? 👈 then we dont need to update
		)
	}

	// ?? 👇 cloning existing items and adding new object item
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
