import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRandomMeal } from "../actions";
// import logo from "../images/logo.jpg";

const Meal = props => {
    useEffect(() => {
        props.fetchRandomMeal();
    }, []);

    const fetchMeal = e => {
        e.preventDefault();
        props.fetchRandomMeal();
    };

    if (props.isFetching) {
        return <h3 > Please Wait... < /h3>;
    }

    return ( <
        div className = "container" >
        <
        div className = "header" >
        <
        h1 className = "headerint" > Hungry again...what to eat ? < /h1>{" "} <
        h4 className = "headerdesc" >
        For those times where your significant other can 't decide what to
        eat, theres an app
        for that!
        <
        /h4>{" "} <
        /div>{" "} <
        div >
        <
        div className = "find" >
        <
        h2 className = "findint" >
        Check out the meal below
        for some food inspo but
        if this isnt it then... { " " } <
        /h2>{" "} <
        button onClick = { fetchMeal } > Go to the next Meal! < /button>{" "} <
        /div>{" "} {
            props.meals.map(x => ( <
                div className = "mealBox"
                key = { x.idMeal } >
                <
                div className = "box1" >
                <
                h1 className = "foodinfo" > { x.strMeal } < /h1>{" "} <
                img className = "foodpic"
                src = { x.strMealThumb }
                alt = { x.strMeal }
                />{" "} <
                /div>{" "} <
                div className = "boxtext" >
                <
                h1 className = "foodinfo" > Information: < /h1>{" "} <
                span className = "boxinfo" > Category: < /span> {x.strCategory}{" "} <
                br / >
                <
                span className = "boxinfo" > Area: < /span> {x.strArea} <hr / >
                <
                br / >
                <
                span className = "boxinfo" > Instructions: < /span> <br / >
                <
                span className = "instructions" > { x.strInstructions } < /span> <br / >
                <
                br / >
                <
                div className = "information" >
                <
                span className = "game" >
                <
                a href = { x.strYoutube }
                target = "_blank"
                rel = "noopener noreferrer" >
                Watch Recipe Video { " " } <
                /a>{" "} <
                /span>{" "} <
                span className = "game" >
                <
                a href = { x.strSource }
                target = "_blank"
                rel = "noopener noreferrer" >
                Get the Recipe!
                <
                /a>{" "} <
                /span>{" "} <
                /div>{" "} <
                /div>{" "} <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        /div>
    );
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        mealInfo: state.mealInfo,
        img: state.img,
        meals: state.meal
    };
};

export default connect(mapStateToProps, { fetchRandomMeal: fetchRandomMeal })(
    Meal
);