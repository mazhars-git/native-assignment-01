import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
// import Text from '../components/text/text'
import { spacing } from '../theme/spacing'
import { colors } from './../theme/colors';
import Text from '../components/text/text';

export default function Test() {
  return (
    <View style = {styles.container}>
        <View style = {styles.contentBox}>
            
                <Image style={{height: 100, width: 100}}  source={require("../image/do test.png")} />
            
            <View>
                <Text preset="h2">Do your own test!</Text>
                <Text style={{fontSize: 20}}>Follow the instructions to do your own test</Text>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        margin: spacing[8],
    },

    contentBox: {
        backgroundColor: colors.blue,
        margin: spacing[4],
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

})