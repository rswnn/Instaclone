import React, { Component } from 'react'
import { StyleSheet, Animated } from 'react-native'
import { View, Text, Button, Thumbnail, Icon } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'

import AnimatedView from '../Home/Animated'

export default class Story extends Component {

    people = [
        { name: 'Zamasu', pic: 'https://storage.googleapis.com/storage.comicsverse.com/uploads/2018/07/cb5136b4-zamasuandblackfail.png'},
        { name: 'Vegeta', pic: 'https://i.ytimg.com/vi/BW5-9aQ5tdE/maxresdefault.jpg'},
        { name: 'gohan', pic: 'https://techanimate.com/wp-content/uploads/2017/11/Why-does-Gohan-Have-so-much-Hidden-Power-1024x576.jpg'},
        { name: 'Jiren', pic: 'https://dimwhp0w2rs83.cloudfront.net/2018/04/1522558548-goku-bekerja-sama-dengan-jiren-dragon-ball-super-movie.jpg'},
        { name: 'Frieza', pic: 'https://i.ytimg.com/vi/28wQjG2fIyo/maxresdefault.jpg'},
        { name: 'Gotenks', pic: 'https://pbs.twimg.com/media/D1kdLUyXgAE93TS.jpg'},
        { name: 'Majinbuu', pic: 'https://cdn.thesolesupplier.co.uk/2018/08/Trefoil.jpg'}
    ]

    render() {

        const uri = `https://wallpapercave.com/wp/wp2261950.jpg`
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.layout}>
                    <View style={styles.view}>
                        <Button transparent dark style={styles.user}>
                            <Thumbnail source={{ uri: uri }}/>
                            <Icon style={styles.iconPlus}
                                type="FontAwesome5" name="plus-circle" />
                        </Button>
                        <Text style={styles.text}>Cerita Anda</Text>
                    </View>
                    {this.people.map((data, index) =>(
                    <View key={index} style={styles.view}>
                            <AnimatedView uri={data.pic}/>
                        <Text style={styles.text}>{data.name}</Text>
                    </View>
                    ))}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1, flexDirection: 'row',
        borderBottomWidth: 0.2, borderColor: '#d3d3d3',
        shadowOpacity: 0.5
    },
    user: {
        margin:8,
        width: 65,
        height: 65,
        marginLeft: 10
    },
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    btn: {
        margin: 8,
        width: 65,
        height: 65,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'tomato',
    },
    thumbnail: {
        marginHorizontal: 3,
        width: 55,
        height: 55,
    },
    iconPlus: {
        position: "absolute",
        left: 31,
        top: 43,
        color: '#2897ff',
        fontSize: 15
    },
    text: {
        fontSize: 12,
        alignSelf: 'center'
    }
})