import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen(){
  return <View>
    <Text>hi from home page</Text>
  </View>
}

function SettingsScreen(){
  return <View>
    <Text>hi from settings page</Text>
  </View>
}