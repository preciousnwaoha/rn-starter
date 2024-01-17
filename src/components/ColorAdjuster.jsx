import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const ColorAdjuster = ({color, onChange}) => {

    return <View style={styles.container}>
        <Text>{color}</Text>
        <Button
            title={`Increase ${color}`}
            onPress={() => {
                onChange(color.toLowerCase(), 1)
            }}
        />
        <Button
            title={`Decrease ${color}`}
            onPress={() => {
                onChange(color.toLowerCase(), -1)
            }}
        />


    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ColorAdjuster;