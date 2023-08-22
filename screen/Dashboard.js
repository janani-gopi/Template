import { View, Text,StyleSheet, Button } from 'react-native'
import React from 'react'
import { useAuthContext } from '../Auth/Authcontext';
function Dashboard({navigation}){
  const { handlingLogout, setAuth } = useAuthContext();
  function handleLogout(){
      setAuth('Logging Out')
      handlingLogout;
      navigation.navigate('Login');
  
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <Button title='Logout' onPress={()=>{handleLogout()}}/>
    </View>
  )
}

export default Dashboard

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