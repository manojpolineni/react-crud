
const cart = [];

export const handleCart = (state = cart, action) => {
    const product = action.payload;
    
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                {
                    ...product,
                    qty: 1,
                },
                // localStorage.setItem("item", JSON.stringify(state))

            ]
        
        case "DELETEITEM":
            return state = state.filter((x) => {
                return x.id !== product.id
            })
        
        case "INCREASEQTY":
            const exists = state.find((x) => x.id === product.id);
            if (exists.qty >= 0) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + (x.qty < 10 ? 1: 0) } : x)
            }
            else {
                return state;
            }
            
        case "DECREASEQTY":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty>1) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - (x.qty > 1 ? 1: 0) } : x)
            }
            else {
                return state;
            }

        case "CLEARCART":
            return {
                ...state,
                [state]: 0,
            }
        
        case "TOTAL":
            const totalquantity = 0;
            const total = 0;
            state.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0,
                }
            )
        break;
        
        default:
            return state;
    }
}

export default handleCart;