import { View, Text ,StyleSheet,Button} from 'react-native'
import React from 'react'

function Splash({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash</Text>
      <Button title='Login' onPress={()=>{navigation.navigate("Login")}}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
     flex:1,
     alignItems:"center",
     justifyContent:"center"
  },
  text:{
  color:"black",
  marginBottom: 20,
  fontSize:20
  },

})
