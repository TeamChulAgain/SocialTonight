import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}/>
        <Text style={styles.text}>SSU CSE wonhee, jinsoo, yoonsung</Text>
      <View style={styles.bottomView}/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
    // flexDirection:"row",
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:"black", 
    alignContent:"center"
  },
  topView: {
    flex:1,
    backgroundColor:"yellow"
  },
  bottomView: { 
    flex:2,
    backgroundColor:"green"
 },
});
 