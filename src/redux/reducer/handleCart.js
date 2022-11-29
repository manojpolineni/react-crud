const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if Product is Already Exist
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the Quantity
                return state.map((x) => 
                action.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }
        
        case "DELETEITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            }
            else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }
        
        // case "INCREASE":
        //     return {
        //         ...state,
        //         cartItem: AddExistingItemToCart(state.cartItem, action.payload)
        //     }
            
        default:
            return state;
        // break;
    }

    
}

    // const AddExistingItemToCart = ((cartItems, itemToAdd) => {
    //     return cartItems.map(item =>
    //         item.id === itemToAdd.id ? { ...item, count: item.count + 1 } : item
    //     )
    // });
    
    export default handleCart;