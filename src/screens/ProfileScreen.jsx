import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const LIST_DATA = [
  {key: 'General'},
  {key: "Security"},
  {key: "Privacy"},
  {key: "Help"},
  {key: "About"},
  {key: "Logout"},

]

const ProfileScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.headerText}>Hi Precious</Text> 
          </View>
            
          <FlatList 
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={{borderWidth: 1, borderColor: 'black'}}
          data={LIST_DATA}
          renderItem={({item}) => {
          return <Text style={styles.text}>{item.key}</Text>}}
          />
     
      <Button
      title="Go to Home"
      onPress={() =>
        navigation.navigate('Home', {name: 'Precious'})
      }
    />

    <TouchableOpacity
    onPress={() => console.log("Logout")}>
      <Text>Logout</Text>
    </TouchableOpacity>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
      fontSize: 64,
      marginVertical: 50,
    },
    text: {
      marginVertical: 50,
    },
    logout: {},
});

export default ProfileScreen;
