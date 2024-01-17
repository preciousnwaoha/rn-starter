import React from "react"
import { StyleSheet, View, Text, FlatList } from "react-native"

const LIST_DATA = [
    {name: 'John', age: 20},
    {name: "Temi", age: 21},
    {name: "Tayo", age: 22},
    {name: "Tola", age: 23},
    {name: "Titi", age: 24},
    {name: "Tunde", age: 25},
    {name: "Tina", age: 26},
  
  ]


const ListScreen = () => {
    return (
        <View>
            <View>
            <Text style={styles.headerText}>Hi Precious</Text> 
          </View>
            
          <FlatList 
          keyExtractor={(friend) => friend.name}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={{borderWidth: 1, borderColor: 'black'}}
          data={LIST_DATA}
          renderItem={({item}) => {
          return <Text style={styles.text}>{item.name}</Text>}}
          />

        </View>
    )
}

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


export default ListScreen