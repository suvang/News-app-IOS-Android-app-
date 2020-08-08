import React, { Component } from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { View } from 'react-native';
import TimeAgo from './time';

export default class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
         const {url,title} =this.data;
        this.props.onPress({url, title})
    }

    render() {
        return(
        <ListItem thumbnail>
            <Left>
            <Thumbnail square source={{ uri: this.data.urlToImage !=
                 null? this.data.urlToImage :
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6ifj0hsUFn_xeEOXPrKVUjStjnb8ubGbQXg&usqp=CAU'
                   }} />
            </Left>
            <Body>
            <Text style={{color: 'white'}} numberOfLines={2}>{this.data.title}</Text>
            <Text style={{color: '#66FEEA'}} note numberOfLines={2}>{this.data.description}</Text>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0}}>
                <Text style={{color: 'white'}}  note>{this.data.source.name}</Text>
                <TimeAgo time={this.data.publishedAt} />
            </View>
            </Body>
            <Right>
            <Button transparent onPress={this.handlePress}>
                <Text>View</Text>
            </Button>
            </Right>
        </ListItem>
        );
    }
}


