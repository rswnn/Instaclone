import React, { Component } from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'

import HomeScreen from '../../Screen/HomeScreen'
import SearchScreen from '../../Screen/SearchScreen'
import UploadPhoto from '../../Screen/UploadPhoto'
import LoveLike from '../../Screen/LoveLike'
import Account from '../../Screen/Account'

export const Main = createBottomTabNavigator({
    Home: HomeScreen,
    Search: SearchScreen,
    Upload: UploadPhoto,
    Love: LoveLike,
    Account: Account,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Search') {
          iconName = `search1`;
        } else if (routeName === 'Upload') {
          iconName = `pluscircleo`
        } else if (routeName === 'Love') {
          iconName = `hearto`
        } else if (routeName === 'Account'){
          iconName = `user`
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showLabel: false  
    }
  }
);