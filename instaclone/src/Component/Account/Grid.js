import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Example extends Component {

    state = {
        loading: false,
        results: []
      }
    
      componentWillMount() {
        fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=1670511745.1677ed0.16fd0cff992b43f1b72b4c490c7b7427')
        .then(res => res.json())
        .then(response => response.data)
        .then((hsl) => {
          this.setState({
            loading: false,
            results: hsl
          })
        })
        .catch(error => alert(error) )
      }

    render() {
        return (
                <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                    {this.state.results.map((data) =>(
                        <Image key={data.id} source={{uri: data.images.low_resolution.url}} style={styles.boxStyle}/>
                    ))}
                </View>
        );
    }
}

const styles = StyleSheet.create({
    boxStyle: {
        height: 118,
        width: 118,
        margin: 1
    },
});

//{uri: data.images.low_resolution.url}