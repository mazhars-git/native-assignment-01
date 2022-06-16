import { View, StyleSheet } from 'react-native'
import React from 'react'
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { colors } from './../../theme/colors';
import { spacing } from './../../theme/spacing';

export default function Header() {
  return (
    <View style = {styles.container}>
      <SimpleLineIcons style={{cursor: 'pointer'}} name="menu" size={24} color="white" />
      <Ionicons style={{cursor: 'pointer'}} name="ios-notifications-outline" size={24} color="white" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: spacing[5],
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  }
})