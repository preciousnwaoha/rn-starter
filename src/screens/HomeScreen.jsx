import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
} from 'react-native';



const HomeScreen = (props) => {

  const {navigate} = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
     
      <Text style={styles.text}>Hi, there!</Text>
        
      <Button
        title="Go to Components Demo"
        onPress={() => navigate('Components')}
        />

      <Button
      title="Go to List Demo"
      onPress={() => navigate('List', )}
      />

      <Button
      title="Go to Image Demo"
      onPress={() => navigate('Image')}
      />

<Button
      title="Go to Color Demo"
      onPress={() => navigate('Color')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 16,
    paddingBottom: 84,
  },
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
    marginBottom: 32,
  },
});

export default HomeScreen;
