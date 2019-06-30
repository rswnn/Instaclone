import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Container, Header, Content, Footer, Icon, Form, Item, Input, Picker } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import connections from '../Component/Connections/Url'

export default class LoginScreen extends Component {

    state = {
        email: "",
        password: "",
        token: '',
        selected: 'key1'
    }

    onValueChange(value = string) {
        this.setState({
            selected: value
        })
    }

    loginUser() {
        const { email, password } = this.state
        axios.post(`${connections.BASE_URL}/login`, {
            email,
            password
        })
            .then(res => {
                if (res.status === 200) {
                    AsyncStorage.setItem('@token', res.data.token)
                    .then((res) => {
                        this.navigateMain()
                    }).catch(console.log('Email atau password salah'))
                }
            })
            .catch(err => alert('Network Error !'))
    }

    navigateMain() {
        this.props.navigation.navigate('Main')
    }

    loginFacebook() {
        alert('Facebook Button')
    }

    render() {
        const userNamePlaceholder = 'Nomer telepon, email, atau nama pengguna'
        const passwordPlaceholder = 'Kata Sandi'
        const forgotPassword = 'Lupa detail informasi masuk anda ?'
        const helpText = 'Dapatkan bantuan untuk masuk'
        return (
            <Container>
                <Header transparent />
                <Form>
                    <Picker
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: 200, alignSelf: 'center', height: 50, bottom: 50, color: 'gray' }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Picker.Item label="English" value="key0" />
                        <Picker.Item label="Indonesia (Indonesia)" value="key1" />
                        <Picker.Item label="Arab" value="key2" />
                        <Picker.Item label="Sunda" value="key3" />
                        <Picker.Item label="Jawa" value="key4" />
                    </Picker>
                </Form>
                <Content>
                    <Text style={styles.logo}>Intsagram</Text>
                    <View style={styles.field}>
                        <Item regular style={styles.input}>
                            <Input placeholder={userNamePlaceholder} style={styles.label} onChangeText={(text) => this.setState({ email: text })} />
                        </Item>
                        <Item regular style={styles.input}>
                            <Input secureTextEntry={true} placeholder={passwordPlaceholder} style={styles.label} onChangeText={(password) => this.setState({ password })} />
                        </Item>
                        <Button style={styles.btn} block onPress={() => this.loginUser()}>
                            <Text style={styles.textBtn}>Masuk</Text>
                        </Button>
                    </View>
                    <View style={styles.span}>
                        <Text style={[styles.smallText, styles.gray]}>{forgotPassword}</Text>
                        <Text style={[styles.smallText, styles.bold]}>{helpText}</Text>
                    </View>
                    <View style={styles.span}>
                        <View style={[styles.span, styles.hr]} />
                        <Text>ATAU</Text>
                        <View style={[styles.span, styles.hr]} />
                    </View>
                    <View style={styles.span}>
                        <Icon type="FontAwesome5" name="facebook" style={styles.facebook} />
                        <TouchableOpacity>
                            <Button small transparent onPress={this.loginFacebook}>
                                <Text style={[styles.facebookBtn, styles.facebook]}>Masuk dengan Facebook</Text>
                            </Button>
                        </TouchableOpacity>
                    </View>
                </Content>
                <Footer style={styles.footer}>
                    <Text style={[styles.grayText, styles.smallText]}>Tidak punya akun?</Text>
                    <Button transparent>
                        <Text style={[styles.createAccount, styles.smallText]}> Buat akun</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerIcon: {
        fontSize: 15
    },
    logo: {
        alignSelf: 'center',
        fontSize: 50,
        fontFamily: 'Billabong',
        color: 'black',
        top: 10
    },
    field: {
        width: 300,
        margin: 30,
        fontSize: 10,
    },
    input: {
        marginVertical: 5,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
        height: 50,
        backgroundColor: '#fcfcfc',
        fontSize: 10,
    },
    label: {
        fontSize: 15,
    },
    btn: {
        width: 300,
        height: 50,
        backgroundColor: '#398bdd',
        borderRadius: 5,
        marginLeft: 30,
        marginRight: 30,
        alignSelf: 'center'
    },
    textBtn: {
        color: 'white'
    },
    span: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        paddingHorizontal: 3,
        bottom: 40
    },
    smallText: {
        fontSize: 13
    },
    grayText: {
        color: 'gray'
    },
    bold: {
        fontWeight: 'bold'
    },
    hr: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        width: 120,
        margin: 10,
        top: 2
    },
    facebook: {
        color: '#398bdd',
    },
    facebookBtn: {
        fontWeight: 'bold',
        marginHorizontal: 5,
        fontSize: 13
    },
    createAccount: {
        fontWeight: 'bold',
        marginVertical: 5,
        top: 5,
    },
    footer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})



// gunakan state untuk data apapun yg akan ditambahkan
// gunakan flatlist agar tidak terrender
