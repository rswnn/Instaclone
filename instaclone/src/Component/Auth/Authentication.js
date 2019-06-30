import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from '../../Screen/LoginScreen'
import LogoutScreen from '../../Screen/Logout'

export default user = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Logout: {
        screen: LogoutScreen,
        navigationOptions: {
            header: null
        }
    }
})
