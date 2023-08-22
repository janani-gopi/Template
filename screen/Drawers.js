import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Tab1 from './Tab1';

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {backgroundColor: '#00A8E8'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        drawerActiveBackgroundColor: 'lightgrey',
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerLabel: 'Dashboard',
          drawerLabelStyle: {color: '#00A8E8', fontSize: 20},
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Tab1"
        component={Tab1}
        options={{
          drawerLabel: 'Tab1',
          drawerLabelStyle: {color: '#00A8E8', fontSize: 20},
          title: 'Tab1',
        }}
      />
    </Drawer.Navigator>
  );
}
