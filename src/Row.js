import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

//

export default class Row extends Component {
  constructor(props){
    super(props);
  
  }


  render() {
    return ( 
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content:{
    flex: 1
  }
});