import { View, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from '../components/text/text'
import { spacing } from './../theme/spacing';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style = {styles.container}>
      <View style = {styles.top}>
        <Text preset="h1">Covid-19</Text>
        <View style= {styles.usaBtn}>
               
                <Image style={{height: 10, width: 10}} source = {require("../image/usa flag.png")} />
               

                <Text style={{color: colors.black}}>USA</Text>
                <AntDesign name="caretdown" size={10} color="black" />
           
        </View>
      </View>
    
      <View>
          <Text>Are you feeling sick?</Text>
          <Text>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
      </View>

      <View style={styles.btnBox}>
          <Pressable style={styles.btn}>
              <Ionicons name="call" size={20} color= {colors.white} />
              <Text style={{marginLeft: spacing[2]}}>Call Now</Text>
          </Pressable>

          <Pressable style={styles.btn2}>
              <AntDesign name="message1" size={20} color={colors.white} />
              <Text style={{marginLeft: spacing[2]}}>Send SMS</Text>
          </Pressable>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: spacing[4],
    borderRadius: 30,
  },

  btnBox: {
    marginTop: spacing[4],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.red,
    borderRadius: 30,
    padding: spacing[4],
  },
  btn2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.lightBlue,
    borderRadius: 30,
    padding: spacing[4],
  },
})