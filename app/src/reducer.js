export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for Adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exists in basket, remove
                newBasket.splice(index, 1);
            } else {

            }

            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;