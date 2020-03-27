import axios from "axios";

///TYPES: every action must have a type \\\

export const FETCH_MEAL_START = "Fetch_Meal_Start loading up";
export const FETCH_MEAL_SUCCESS = "Fetch_Meal_Success loading up";

export const fetchRandomMeal = () => {
    return function(dispatch) {
        dispatch({ type: FETCH_MEAL_START });
        axios
            .get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(res => {
                console.log(res.data.meals);
                console.log(res.data.meals[0].strMeal);
                dispatch({
                    type: FETCH_MEAL_SUCCESS,
                    payload: res.data.meals[0].strMeal,
                    imgpayload: res.data.meals[0].strMealThumb,
                    mealpayload: res.data.meals
                });
            })
            .catch(err => console.error(err));
    };
};