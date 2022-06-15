import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colors } from './src/theme/colors';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import { useFonts } from 'expo-font';
import Header from './src/components/header/header';
import Prevention from './src/screens/prevention';


// const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Reqular': require('./assets/fonts/Roboto-Regular.ttf'),
  })

  if (!loaded) {
    <Text>Fonts Loading.............</Text>
  }

  return (
    <SafeAreaView>
        <Header />
        <Home />
        <Prevention />
        <Text style={{ fontSize: 30, fontFamily: 'Roboto-Bold'}}>font check</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
