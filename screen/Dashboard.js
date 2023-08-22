import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  DrawerLayoutAndroid,
} from 'react-native';
import React from 'react';
import {useRef} from 'react';
import {useAuthContext} from '../Auth/Authcontext';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Dashboard({navigation}) {
  const {handlingLogout, setAuth} = useAuthContext();
  const drawer = useRef(null);
  const handleLogout =() => {
    setAuth('Logging Out');
     handlingLogout();
    navigation.navigate('Login');
  };
  const navigationView = () => (
    <View style={styles.container}>
      <Pressable onPress={()=>{navigation.navigate("Tab1")}}><Text style={{color:"black", padding:20 , borderWidth:1}}>Tab 1</Text></Pressable>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Button
          title="open drawer"
          onPress={() => {
            drawer.current.openDrawer();
          }}
        />
        <Text style={styles.text}>Dashboard</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </DrawerLayoutAndroid>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    marginBottom: 20,
    fontSize: 20,
  },
});
