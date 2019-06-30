import React,  { Component } from 'react'
import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Thumbnail } from 'native-base';

export default class AnimatedView extends Component {
    
    state = {
        scale : new Animated.Value(1)
    }

    inPress = () => {
        Animated.timing(
            this.state.scale, {
                toValue: 0.92,
                duration: 100
            }
        ).start()
    }

    outPress = () => {
        Animated.timing(
            this.state.scale, {
                toValue: 1,
                duration: 100
            }
        ).start();
    }

    render() {

        const animated = {
            transform : [
                {
                    scale: this.state.scale
                }
            ]
        }

        return (
            <View>
                <TouchableWithoutFeedback style={styles.btn} onPressIn={this.inPress} onPressOut={this.outPress} onPress={this.props.onPress}>
                    <Animated.View style={[animated, styles.btn]}>
                        <Thumbnail source={{uri: this.props.uri}} style={styles.thumbnail}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    thumbnail: {
        width: 55,
        height: 55,
        left: 3,
        top: 2.5
    },
    btn: {
        margin: 8,
        width: 65,
        height: 65,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'tomato',
    },
})