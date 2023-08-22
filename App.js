import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screen/Splash';
import Login from './screen/Login';
import Tabscreen from './screen/Tabscreen';
import Tab1 from './screen/Tab1';
import Tab2 from './screen/Tab2';
import Tab3 from './screen/Tab3';
import Tab4 from './screen/Tab4';
import Dashboard from './screen/Dashboard';
import {useState, useEffect} from 'react';
import AuthContextProvider from './Auth/Authcontext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, View} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  // initial route state
  const [initialRoute, setInitialRoute] = useState('');

  useEffect(() => {
    console.log('Checking Auth State');
    checkLoginStatus();
  }, []);

  // checking Login in Status
  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        console.log("User already logged in")
        setInitialRoute('Tabscreen');
      } else{
        setInitialRoute('Login');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };
  return (
    <AuthContextProvider>
      <NavigationContainer>
        {initialRoute != '' ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={initialRoute}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tabscreen" component={Tabscreen} />
            {/* <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Tab1" component={Tab1} />
            <Stack.Screen name="Tab2" component={Tab2} />
            <Stack.Screen name="Tab3" component={Tab3} />
            <Stack.Screen name="Tab4" component={Tab4} /> */}
          </Stack.Navigator>
        ) : (
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              color: '#000',
            }}>
            <ActivityIndicator
              //visibility of Overlay Loading Spinner
              visible={initialRoute === ''}
              size={50}
              color={'#00A8E8'}
            />
          </View>
        )}
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default App;
