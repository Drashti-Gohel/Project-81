import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
const Tab = createBottomTabNavigator();
export default class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Post') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor:'red',
          inactiveTintColor:'gray',
        }}>
        <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}} />
           <Tab.Screen name="Post" component={CreatePost} options={{headerShown:false}} />
      </Tab.Navigator>
    );
  }
}
