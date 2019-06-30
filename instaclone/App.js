import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation'

import Logout from './src/Screen/Logout'
import LoginScreen  from './src/Component/Auth/Authentication'
import SplashScreen from './src/Screen/SplashScreen'
import { Main } from './src/Component/Auth/Auth'

export default class App extends Component {
  render() {
    return (
      <First/>
    )
  }
}

const RootScreen = createSwitchNavigator ({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Main : {
    screen: Main,
    navigationOptions : {
      header: null
    },
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      header: null
    }
},
  initialRouteName: 'Splash'
}, )


const First = createAppContainer(RootScreen)