import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from './../theme/colors';
import { spacing } from './../theme/spacing';

export default function Prevention() {
  return (
    <View style={styles.container}>
      <Text preset="h3" style={{color: 'black', margin: 20}}>Prevention</Text>

      <View style={styles.preventionImg}>
        <View style={styles.content} >
          <Image style={{height: 100, width: 100}}  source={require("../image/distance.png")}/>
          <Text preset="h4" style={{color: colors.black}}>Avoid Close Contact</Text>
        </View>
        <View style={styles.content}>
          <Image style={{height: 100, width: 100}}  source={require("../image/washing hand.png")}/>
          <Text preset="h4" style={{color: colors.black }}>Clean Your Hands Often</Text>
        </View>
        <View style={styles.content}>
          <Image style={{height: 100, width: 100}}  source={require("../image/wear mask.png")}/>
          <Text preset="h4" style={{color: colors.black}}>Wear a facemask</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
  },

  preventionImg: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  content: {
    display: 'flex', 
    alignItems: 'center'
  }

})