import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');

    const handleChange = (newValue) => {
        setName(newValue);
    };

    return <View style={styles.container}>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChange={handleChange}
            value={name}
        />
    </View>;
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default TextScreen;