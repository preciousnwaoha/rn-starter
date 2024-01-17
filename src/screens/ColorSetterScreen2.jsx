import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const ColorSetterScreen2 = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 25;

    const setColor = (color, amount) => {
       
        const newAmount = amount * COLOR_INCREMENT

        switch (color) {
            case "red":
                (red + newAmount > 255 || red + newAmount < 0) ? null : setRed(red + newAmount);
                break;
            case "green":
                (green + newAmount > 255 || green + newAmount < 0) ? null : setGreen(green + newAmount);
                break;
            case "blue":
                (blue + newAmount > 255 || blue + newAmount < 0) ? null : setBlue(blue + newAmount);
                break;
            default:
                break;
        }
    };


    return <View style={styles.container}>
        <ColorAdjuster color={"Red"} onChange={setColor}/>
        <ColorAdjuster color={"Green"} onChange={setColor} />
        <ColorAdjuster color={"Blue"} onChange={setColor}/>

        <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ColorSetterScreen2;