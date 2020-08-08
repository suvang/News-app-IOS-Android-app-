import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { getArticles } from '../../service/news';
import { Alert,View, ActivityIndicator,Text } from 'react-native';
import DataItem from '../../component/dataitem';
import Modal from '../../component/modal';

export default class Tab3 extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null,
            setModalVisible: false,
            modalArticleData: {}
        }
    }

    handleItemDataOnPress = (articleData) => {
        this.setState({
            setModalVisible: true,
            modalArticleData: articleData
        })
    }

    handleModalClose = () => {
        this.setState({
            setModalVisible: false,
            modalArticleData: {}
        })
    }

    componentDidMount() {
        getArticles('technology').then(data => {
            this.setState({
                isLoading: false,
                data: data
            });
        }, error => {
            Alert.alert('Error', 'Something went wrong');
        })
    }

  render() {
      console.log(this.state.data);

      let view = this.state.isLoading ? (
          <View>
              <ActivityIndicator animating={this.state.isLoading} />
              <Text style={{marginTop: 10}}>please wait...</Text> 
          </View>
      ) : (
        <List
        dataArray={this.state.data}
        renderRow={(item,id) => {
            return (
                 <DataItem onPress={this.handleItemDataOnPress} key={item.id} data={item} />
            )
        }}
       />
      )

    return (
      <Container style={{backgroundColor: 'black'}}>
        {/*<Header /> */}
        <Content>
         {view}
        </Content>
         <Modal
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this.handleModalClose}
         />
      </Container>
    );
  }
}