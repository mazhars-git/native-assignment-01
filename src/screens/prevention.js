import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from './../theme/colors';
import { spacing } from './../theme/spacing';

export default function Prevention() {
  return (
    <View style={styles.container}>
      <Text preset="h3" style={{color: 'black', margin: 20}}>Prevention</Text>

      <View>
        <View>
          <Image style={{height: 100, width: 100}}  source={require("../image/distance.png")}/>
          <Text style={{color: colors.black}}>Avoid Close Contact</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
  },

})