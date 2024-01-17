import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const Inputer = () => {
  const [text, setText] = useState('');

  // async function getProfile(accessToken) {
  //   let accessToken = localStorage.getItem('access_token');
  
  //   const response = await fetch('https://api.spotify.com/v1/me', {
  //     headers: {
  //       Authorization: 'Bearer ' + accessToken
  //     }
  //   });
  
  //   const data = await response.json();
  // }

  return (
    <View style={styles.container}>
      <TextInput
      value={text}
        style={styles.input}
        placeholder="Type to listen to your mind!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        autoCapitalize='none'
        autoCorrect={false}
        
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginBottom: 32,
    },
    input: {
      fontSize: 24,
    },
})

export default Inputer;