import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Wishlist from './screens/Wishlist'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
import Profile from './screens/Profile'

import {Component} from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "Profile" screenOptions = {{tabbarActiveTintColor: '#e91e63',}}>  
      <Tab.Screen
        name="Explore"
        component={Explore}
        options= {{
          tabBarLabel: 'EXPLORE',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search-outline" color={tintColor} size={24} />
            )}}
    />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: 'WISHLIST',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart-outline" color={tintColor} size={24} />
              )
      }}
    />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarLabel: 'TRIPS',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
              )
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'INBOX',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-chatbox-outline" color={tintColor} size={24} />
              )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person-outline" color={tintColor} size={24} />
              )
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});