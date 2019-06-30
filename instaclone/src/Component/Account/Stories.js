import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Button, Thumbnail, Icon } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'

export default class Story extends Component {

    people = [
        {uri : `https://wallpapercave.com/wp/wp2261950.jpg`}
    ]

    render() {
        const uri = `https://wallpapercave.com/wp/wp2261950.jpg`
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.layout}>
                    <View style={styles.view}>
                        <Button transparent dark style={styles.btn}>
                            <Thumbnail style={styles.thumbnail} source={{ uri: uri }}/>
                        </Button>
                        <Text style={styles.text}>Baru</Text>
                    </View>
                    {this.people.map((data, index) =>(
                    <View key={index} style={styles.view}>
                        <Button transparent dark style={styles.btn}>
                            <Thumbnail style={styles.thumbnail} source={{ uri: data.uri }} />
                        </Button>
                        <Text style={styles.text}>Sorotan</Text>
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
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    btn: {
        margin: 13
    },
    thumbnail: {
        width: 55,
        height: 55
    },
    iconPlus: {
        position: "absolute",
        left: 30,
        top: 35,
        color: '#2897ff',
        fontSize: 15
    },
    text: {
        fontSize: 12,
        alignSelf: 'center',
        padding: 5
    }
})