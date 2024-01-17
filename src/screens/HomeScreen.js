import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableHighlight,
  View,
  Button,
  TextInput,
  Animated,
} from 'react-native';


import Inputer from '../components/Inputer';


const FadeInView = ({style, children}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {children}
    </Animated.View>
  );
};


const HomeScreen = ({navigation}) => {
  const handleListen = () => {
    console.log('listen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hi, how do you feel right now?</Text>
      </View>

      <Inputer />

      <View style={styles.fadeAnim}>
        <FadeInView style={{}}>
          {/* <Button
        title="Listen"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      /> */}
          <TouchableHighlight onPress={handleListen} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Listen</Text>
            </View>
          </TouchableHighlight>
        </FadeInView>
      </View>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 128, 255)',
    paddingHorizontal: 16,
    paddingBottom: 84,
  },
  text: {
    fontSize: 64,
    fontWeight: '700',
    color: 'black',
    marginBottom: 32,
  },
  fadeAnim: {
    // borderWidth: 1,
    width: 180,
  },
  button: {
    backgroundColor: 'rgb(67, 28, 67)',
    paddingHorizontal: 32,
    paddingVertical: 18,
    borderRadius: 32,
    width: 180,
    marginHorizontal: 'auto',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
