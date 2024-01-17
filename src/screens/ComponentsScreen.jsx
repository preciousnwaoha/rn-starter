import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const name = "Stephen";
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ComponentsScreen;