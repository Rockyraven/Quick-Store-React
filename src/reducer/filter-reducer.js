export const reducer = (state, action) => {
    switch (action.type) {
        
        case "LOW_TO_HIGH":
            return { ...state, sortBy: action.type };

        case "HIGH_TO_LOW":
            return { ...state, sortBy: action.type };

        case "SPORT_SHOE":
            return { ...state, Sports: !state.Sports };

        case "FORMAL_SHOE":
            return { ...state, Formal: !state.Formal };

        case "SNEAKER_SHOE":
            return { ...state, Sneaker: !state.Sneaker };

        case "CASUAL_SHOE":
            return { ...state, Casual: !state.Casual };

        case "fiveStar":
            return { ...state, rating: action.type}

        default:
            return state;
    }
};