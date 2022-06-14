import { View, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from '../components/text/text'
import { spacing } from './../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style = {styles.container}>
      <View style = {styles.top}>
        <Text preset="h1">Covid-19</Text>
        <Pressable>
            <View style= {styles.usaBtn}>
                <Image style={{resizeMode: 'contain'}} source = {require("../../image/usa flag.png")} />
                <Text>USA</Text>
                <AntDesign name="caretdown" size={10} color="black" />
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
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    padding: spacing[5],
  },
  
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  usaBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: spacing[4],
    borderRadius: 30,
  },
})