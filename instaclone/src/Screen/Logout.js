import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Container, Header, Content, Footer } from 'native-base';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Logout extends Component {
    navigateLogin() {
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <Container>
                <Header transparent />
                <Content>
                    <Text style={styles.logo}>Instagram</Text>
                    <TouchableHighlight>
                        <Text style={styles.login}>Login</Text>
                    </TouchableHighlight>
                </Content>
                <Footer style={styles.footer} />
                <View style={{ flexDirection: 'column' }}>
                    <View>
                        <Text>Okay</Text>
                    </View>
                    <View>
                        <Text>boleh</Text>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 50,
        fontFamily: 'Billabong',
        alignSelf: 'center',
        color: '#000',
        top: 30
    },
    login: {
        textAlign: 'center',
        color: '#398bdd',
        marginTop: 150,
    },
    footer: {
        backgroundColor: 'white'
    },
    flex: {
        flex: 7,
        flexDirection: 'row'
    }
})