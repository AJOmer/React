import { FETCH_MEAL_START, FETCH_MEAL_SUCCESS } from "../actions";

const initialState = {
    mealInfo: "",
    img: "",
    meal: [],
    error: "",
    isFetching: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEAL_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MEAL_SUCCESS:
            console.log("Hello?", action.payload);
            return {
                ...state,
                mealInfo: action.payload,
                img: action.imgpayload,
                meal: action.mealpayload,
                error: "",
                isFetching: false
            };
        default:
            return state;
    }
};

export default reducer;