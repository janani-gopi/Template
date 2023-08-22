import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useAuthContext} from '../Auth/Authcontext';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userEmail = 'abc@gmail.com';
  const userPassword = 'abc';

  const {handlingLogin, setAuth} = useAuthContext();

  const handleLogin = async () => {
    try {
      if (email === userEmail && password === userPassword) {
        // set userToken
        setAuth('Logging In');
        await handlingLogin();
        // navigate to HomeScreen
        navigation.navigate('Tabscreen');
      } else {
        console.log('Invalid Credentials');
      }
    } catch (err) {
      console.log('Error user login ', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to your account</Text>
      <TextInput
        style={styles.textinput}
        placeholder="email"
        placeholderTextColor={'gray'}
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="password"
        placeholderTextColor={'gray'}
        onChangeText={e => setPassword(e)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default Login;

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
  textinput: {
    padding: 15,
    width: 310,
    marginBottom: 30,
    color: 'black',
    backgroundColor: 'lightgray',
    borderRadius: 30,
    textAlign: 'left',
  },
});
