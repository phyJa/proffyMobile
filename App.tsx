import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, NLW!!</Text>
      <Text style={styles.text}>Some other text</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Note that in React Native, the flex direction standard is the 'column' type
    backgroundColor: 'rgb(42, 9, 9)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  }
});
