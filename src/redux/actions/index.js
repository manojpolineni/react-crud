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

export const IncreaseCart = (product) => {
    return {
        type: "INCREASEQTY",
        payload: product
    }
}
export const DecreaseCart = (product) => {
    return {
        type: "DECREASEQTY",
        payload: product
    }
}
export const getTotals = (product) => {
    return {
        type: "TOTAL",
        payload: product
    }
}

export const ClearCart = (product) => {
    return {
        type: "CLEARCART",
        payload: product
    }
}

