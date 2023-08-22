import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Tab4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab4</Text>
    </View>
  )
}

export default Tab4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'black',
        marginBottom:20,
        fontSize:20
      },
})