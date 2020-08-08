import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#E9E9E9'}} hasTabs>
        <Left/>
          <Body>
            <Title style={{color: 'black'}}>Daily News App</Title>
          </Body>
          <Right />    
        </Header> 
        <Tabs >
          <Tab  tabStyle={{backgroundColor: '#E9E9E9'}}  heading="GENERAL">
            <Tab1 />
          </Tab>
          <Tab  tabStyle={{backgroundColor: '#E9E9E9'}}heading="BUSINESS">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#E9E9E9'}} heading="TECHNOLOGY">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}