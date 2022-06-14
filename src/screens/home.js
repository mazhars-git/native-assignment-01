import { View, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from '../components/text/text'
import { spacing } from './../theme/spacing';

export default function Home() {
  return (
    <View style = {styles.container}>
      <View style = {styles.top}>
        <Text preset="h1">Covid-19</Text>
        <Pressable>
            <View>

                <Text>USA</Text>
            </View>
        </Pressable>
      </View>

      <View>
          <Text>Are you feeling sick?</Text>
          <Text>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
      </View>

    </View>    
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    color: colors.white,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    padding: spacing[5],
  },
  
  top: {
    flex: 1,
    justifyContent: 'space-around'
    
  }
})