import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, Image, Easing } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class SplashScreen extends Component {

    constructor () {
        super()
        this.spinValue = new Animated.Value(0)
        this.token = ''
      }

      

    componentDidMount() {
        this.spin()
    }

    spin () {
    this.spinValue.setValue(0)
    Animated.timing(
        this.spinValue,
        {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
        }
    ).start(() => this.spin())
  }

    componentWillMount() {
        setTimeout(() => {
            try {
                AsyncStorage.getItem('@token').then(res => {
                    if (res === null) {
                        this.props.navigation.navigate('Login')
                    } else {
                        this.props.navigation.navigate('Main')
                    }
                })
            } catch(err) {
                throw err
            }
        }, 3000)
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.container}>
                <Animated.Image
                style={{
                width: 20,
                height: 20,
                transform: [{rotate: spin}] }}
                source={{uri: 'https://www.pinclipart.com/picdir/big/175-1750251_loader-loading-progress-wait-icon-loading-png-clipart.png'}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
