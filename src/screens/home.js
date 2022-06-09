import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

export default function Home() {
  return (
    <View style = {styles.container}>
      <Text>Covid-19</Text>
      <Pressable>
          <View>

              <Text>USA</Text>
          </View>
      </Pressable>

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
    height: 100,
    color: colors.white,
  }
})