import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native'
import Modal from 'react-native-modalbox'
import { Icon, Container, Header, Left, Right, Button, Content, Card, CardItem, Tab, Tabs, TabHeading } from 'native-base'

import Stories from '../Component/Account/Stories'
import DashBoard from '../Component/Home/DashBoard'
import Grid from '../Component/Account/Grid'
import AsyncStorage from '@react-native-community/async-storage';

export default class Account extends Component {

  constructor() {
    super()
    this.state = {
        loading: false,
        results: [],
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3
    }
  }
  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  openModal() {
    this.refs.modal4.open()
  }

  componentWillMount() {
    fetch('https://api.instagram.com/v1/users/self/?access_token=1670511745.1677ed0.16fd0cff992b43f1b72b4c490c7b7427')
    .then(res => res.json())
    .then(response => {
      this.setState({
        loading: false,
        results: response.data
      })
    })
    .catch(error => alert(error))
  }

  removeToken() {
    AsyncStorage.removeItem('@token')
    try {
      this.navigateToLogout()
    } catch(err) {
      alert('error')
    }
  }

  navigateToLogout() {
    this.props.navigation.navigate('Logout')
  }

  render() {
    return (
      <Container>
        <Header transparent >
          <Left>
            <Button small transparent dark onPress={() => this.openModal()}>
              <Text style={styles.username}>{this.state.results.username}</Text>
              <Icon type="AntDesign" name="down" style={styles.iconDown} />
            </Button>
          </Left>
          <Right>
            <Button transparent dark>
              <Icon type="Entypo" name="back-in-time" />
            </Button>
            <Button transparent dark>
              <Icon type="MaterialIcons" name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card transparent>
            <CardItem>
              <Left>
                <Image large source={{ uri: this.state.results.profile_picture }} style={styles.image} />
              </Left>
              <Right>
                <View style={styles.flex}>
                  <Text style={[styles.bold, styles.bold.left]}>12</Text>
                  <Button transparent style={styles.post}>
                    <Text>Postingan</Text>
                  </Button>
                  <Text style={styles.countFollow}>12k</Text>
                  <Button transparent style={styles.btnFollow}>
                    <Text>Pengikut</Text>
                  </Button>
                  <Text style={styles.following}>70</Text>
                  <Button transparent style={styles.btnFollowing}>
                    <Text>Mengikuti</Text>
                  </Button>
                </View>
                <Button block transparent dark style={styles.buttonBlock} onPress={() => this.props.navigation.navigate('Edit')}>
                  <Text style={[styles.btnProfle, styles.username]}>Edit Profile</Text>
                </Button>
              </Right>
            </CardItem>
            <View style={styles.info}>
              <Text style={styles.username}>{this.state.results.full_name}</Text>
              <Text style={styles.bio}>{this.state.results.bio}</Text>
              <Text style={styles.web}>{this.state.results.website}</Text>
            </View>
          </Card>
          <Stories />
          <Tabs tabBarUnderlineStyle={false}>
            <Tab heading={<TabHeading style={styles.tabHeadingColor}>
              <Icon type="MaterialCommunityIcons" name="grid" style={styles.iconGray} />
            </TabHeading>}>
              <Grid/>
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeadingColor}>
              <Icon type="MaterialIcons" name="filter-list" style={styles.iconGray} /></TabHeading>}>
              <DashBoard />
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeadingColor}>
              <Icon type="AntDesign" name="contacts" style={styles.iconGray} /></TabHeading>}>
              <DashBoard />
            </Tab>
          </Tabs>
        </Content>
        <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
          <TouchableHighlight onPress={() => this.removeToken()}>
            <Text style={styles.btnModal}>Logout</Text>
          </TouchableHighlight>
        </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    view: {
      alignSelf: 'center'
    },
    flex: {
      flex: 1,
      flexDirection: 'row',
      left: 20
    },
    username: {
      fontWeight: 'bold',
      color: 'black'
    },
    bio: {
      color: 'black'
    },
    web: {
      color: '#398bdd'
    },
    iconDown: {
      fontSize: 13
    },
    bold: {
      fontWeight: 'bold',
      color: 'black',
      left: 50
    },
    image: {
      width: 90,
      height: 90,
      borderRadius: 100
    },
    tabHeadingColor: {
      backgroundColor: 'white'
    },
    iconGray: {
      color: 'gray'
    },
    buttonBlock: {
      width: 220,
      height: 30,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 5,
      right: 70,
      bottom: 20
    },
    btnModal: {
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      paddingHorizontal: 100,
      fontSize: 20,
      borderRadius: 10,
      padding: 10
    },
    info: {
      flex: 1, justifyContent: "center", alignContent: 'center', margin: 10, marginLeft: 15
    },
    post: { marginLeft: 5, marginTop: 5, marginBottom: 5 },
    countFollow: { left: 30, fontWeight: "bold", color: 'black' },
    btnFollow: { marginTop: 5, marginBottom: 5, right: 10 },
    following: { left: 20, fontWeight: "bold", color: 'black' },
    btnFollowing: { marginTop: 5, marginBottom: 5, right: 20 },
    modal: {
      justifyContent: 'center',
      alignItems: 'center'
  },
    modal4: {
      height: 100,
      borderTopStartRadius: 10,
      borderTopEndRadius: 10
  }
})