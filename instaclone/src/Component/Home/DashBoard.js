import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { View, Text, Button, Thumbnail, Icon, Card, CardItem, Left, Right, Body, Input } from 'native-base'
import Dialog, { DialogContent } from 'react-native-popup-dialog'

import connections from '../Connections/Url'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

export default class DashBoard extends Component {

  state = {
    data: [],
    visible: false
  }

   getData() {
     AsyncStorage.getItem('@token')
    .then(res => {
      axios.get(`${connections.BASE_URL}/posts`, {
        headers: {
          authorization: `Bearer ${res}`
        }
      }). then(response => {
        if (response.status === 200) {
          this.setState({data: response.data})
        }
      }).catch(err => alert('Oops !'))
    })
  }

  deletePost(id) {
    axios.delete(`${connections.BASE_URL}/delete/${id}`,{
    }).then(res => {
      if(res.status === 200){
        this.getData()
        alert()
      }
    }).catch(err => alert(err))
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    this.getData()
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const uri = `https://wallpapercave.com/wp/wp2261950.jpg`
    return (
      <View>
        {this.state.data.map((data) => (
          <View key={data.id}>
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: data.url }} style={styles.thumbnail} />
                <Body>
                  <Text>{data.name}</Text>
                  <Text note>{data.location}</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent dark onPress={() => this.setState({visible: true})}>
                  <Icon type="SimpleLineIcons" name="options-vertical" style={{ fontSize: 18 }} />
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: data.url}} style={styles.image} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent dark>
                  <Icon type="FontAwesome" name="heart-o" style={styles.icon} />
                </Button>
                <Button transparent dark >
                  <Icon type="FontAwesome5" name="comment" style={styles.icon} />
                </Button>
                <Button transparent dark>
                  <Icon type="FontAwesome" name="send-o" style={styles.icon} />
                </Button>
              </Left>
              <Right>
                <Button transparent dark>
                  <Icon type="FontAwesome" name="bookmark-o" style={styles.icon} />
                </Button>
              </Right>
            </CardItem>
            <View style={styles.view}>
              <Button style={styles.btn} transparent dark>
                <Text uppercase={false} style={styles.bold}>120 suka</Text>
              </Button>
              <Button small transparent dark>
                <Text uppercase={false} style={styles.fontBoldHundreth}>{data.name}
                  <Text style={styles.quotes}> {data.quotes}</Text>
                </Text>
              </Button>
            </View>
            <View style={styles.comments}>
            <Thumbnail source={{ uri: uri }} style={styles.thumbnail} />
              <Input placeholder="Tambahkan komentar ..." style={styles.input}/>
            </View>
          </Card>
          <Dialog visible={this.state.visible} onTouchOutside={() => {
            this.setState({visible: false})}}>
              <DialogContent style={{backgroundColor: 'white', height: 300, width: 300, justifyContent: 'center'}}>
                <Button full transparent>
                  <Text>Edit</Text>
                </Button>
                <Button full transparent onPress={() => {
                  this.setState({ visible: false})
                  this.deletePost(data.id)
                }}>
                <Text>Delete</Text>
                </Button>
              </DialogContent>
          </Dialog>
        </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({

   thumbnail: {
     width: 30,
     height: 30
   },
   icon: {
     fontSize: 20
   },
   image: {
     height: 200,
     width: null,
     flex: 1
   },
   btn: {
    height: 1
   },
   bold: {
     fontWeight: 'bold'
   },
   fontBoldHundreth: {
     fontWeight: '300'
   },
   comments: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     marginHorizontal: 10
   },
   input: {
     bottom: 10,
     fontSize: 15,
     marginHorizontal: 10
   },
   quotes: {
     fontSize: 14
   }
})