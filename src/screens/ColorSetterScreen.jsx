import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const ColorSetterScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, val, amount) => {
        const newVal = (val === 1 ? red + amount : red - amount)
   

        switch (color) {
            case "red":
                (red + amount > 255 || red + amount < 0) ? null : setRed(newVal);
                break;
            case "green":
                (red + amount > 255 || red + amount < 0) ? null : setGreen((val === 1 ? red + amount : red - amount));
                break;
            case "blue":
                (red + amount > 255 || red + amount < 0) ? null : setBlue((val === 1 ? red + amount : red - amount));
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

export default ColorSetterScreen;