import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors } from './src/theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.white, fontSize: 30, fontWeight: 'bold'}}>Hello! Welcome to new app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f90',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
