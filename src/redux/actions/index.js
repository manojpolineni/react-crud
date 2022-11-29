// For Add Item to Cart
export const AddCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item From Cart
export const DeleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}
export const InCrease = (product) => {
    return {
        type: "INCREASE",
        payload: product
    }
}