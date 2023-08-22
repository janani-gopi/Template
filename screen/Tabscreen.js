import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Dashboard from "./Dashboard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createBottomTabNavigator();

export default function Tabscreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: { backgroundColor: "#00A8E8" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: "#00A8E8",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Dashboard") {
            iconName = focused
              ? "wallet"
              : "wallet-outline";
          } else if (route.name === "Tab1") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "Tab2") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          }else if (route.name === "Tab3") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          }else if (route.name === "Tab4") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      initialRouteName="Dashboard"
    >
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Tab3" component={Tab3} />
      <Tab.Screen name="Tab4" component={Tab4} />
    </Tab.Navigator>
  );
}