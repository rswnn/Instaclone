import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import connection from '../Component/Connections/Url'

export default class FormExample extends Component {

  state = {
    location: '',
    url: '',
    quotes: '',
    byId: ''

  }

  insertPost() {
    const { location, url, quotes } = this.state
    AsyncStorage.getItem('@token').then(res => {
      console.log(res)
      axios.post(`${connection.BASE_URL}/post`, {
        location: location,
        url: url,
        quotes: quotes
      },
        {
          headers: {
            authorization: `Bearer ${res}`
          }
        }).then(res => {
          if (res.status === 200) {
            this.alertPost()
            this.props.navigation.goBack()
          }
        }).catch(err => alert(err))
    }).catch(err => alert(err))
  }

  alertPost() {
    alert('Inserted !')
  }
  
  render() {
    return (
      <Container>
        <Header />
        <View style={styles.views}>
          <View>
            <Text style={styles.textBold}>Location</Text>
            <TextInput onChangeText={(text) => this.setState({ location: text })} placeholder="Location" style={styles.input} />
          </View>
          <View>
            <Text style={styles.textBold}>Image Url</Text>
            <TextInput onChangeText={(text) => this.setState({ url: text })} placeholder="Image Url" style={styles.input} />
          </View>
          <View>
            <Text style={styles.textBold}>Quotes</Text>
            <TextInput onChangeText={(text) => this.setState({ quotes: text })} placeholder="Quotes" style={styles.input} />
          </View>
          <Button onPress={() => this.insertPost()}>
            <Text>Post !</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  views: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  textBold: {
    fontSize: 20,
    color: 'black',
    paddingTop: 20
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#f4f4f4',
    borderColor: 'gray'
  }
})