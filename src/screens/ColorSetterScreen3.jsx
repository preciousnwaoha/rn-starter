import React, {useReducer} from "react";
import { StyleSheet, View } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    const {red, green, blue} = state;
    const {colorToChange, amount} = action;

    const newAmount = amount * COLOR_INCREMENT
    
    switch (colorToChange) {
        case "change_red":
            return {...state, red: (red + newAmount > 255 || red + newAmount < 0) ? red 
                : (red + newAmount)};
        case "change_green":
            return {...state, green: (green + newAmount > 255 || green + newAmount < 0) ? green 
                : (green + newAmount)};
        case "change_blue":
            return {...state, blue: (blue + newAmount > 255 || blue + newAmount < 0) ? blue 
                :  (blue + newAmount)};
        default:
            return state;
    }

}

const ColorSetterScreen = () => {
    const [state, dispatch] = useReducer(
        reducer, 
        {red: 0, green: 0, blue: 0}
    );

    const handleChange = (colorToChange, amount) => {
        dispatch({colorToChange, amount})
    }

    const {red, green, blue} = state;
    

    return <View style={styles.container}>
        <ColorAdjuster color={"Red"} 
        onChange={handleChange}/>
        <ColorAdjuster color={"Green"} onChange={handleChange} />
        <ColorAdjuster color={"Blue"} onChange={handleChange}/>

        <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ColorSetterScreen;