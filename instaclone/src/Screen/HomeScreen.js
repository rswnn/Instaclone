import React, { Component } from 'react'
import { StyleSheet, Linking, Animated, Image, Easing } from 'react-native'
import { Container, Header,Body, Content, Left, Button, Text, Right, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

import Story from '../Component/Home/Story'
import DashBoard from '../Component/Home/DashBoard'


export default class HomeScreen extends Component {

  constructor() {
    super() 
  }

  _linkPressed (uri) {
    Linking.openURL(uri)
    .catch(error => alert(error))
  }

  render() {
    return (
      <Container>
        <Header transparent dark>
            <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
              <Button transparent dark>
                <Icon type="FontAwesome" name = 'camera'size={30}/>
              </Button>
              </TouchableOpacity>
            </Left>
            <Body>
              <Text style={styles.logo}>Instagramer</Text>
            </Body>
            <Right>
                <Button transparent style={styles.btn}>
                <TouchableOpacity onPress={() => this._linkPressed(`https://www.youtube.com`)}>
                <LinearGradient
                    colors={['#405DE6', '#5851DB', '#833AB4', '#C13584', '#E1306C', '#FD1D1D', '#F56040', '#F77737', '#FCAF45']}
                    style={styles.icon}>
                    <Icon type ="MaterialIcons"name ="live-tv"/>
                </LinearGradient>
                </TouchableOpacity>
                </Button>
                <TouchableOpacity onPress={() => this._linkPressed('http://api.whatsapp.com')}>
                <Button transparent dark>
                    <Icon type ="FontAwesome" name ="paper-plane-o" style={styles.rotateIcon}/>
                </Button>
                </TouchableOpacity>
            </Right>
        </Header>
        <Content>
            <Story/>
            <DashBoard/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
      fontFamily: 'Billabong',
      fontSize: 30,
      right: 10,
      marginTop: 18
    },
    icon: {
      fontSize: 25,
      borderRadius: 8,
      padding: 2
    },
    btn: {
      left: 10
    },
    rotateIcon: {
      transform: [{ rotate: '20deg' }]
    }
})