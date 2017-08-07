import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

//

export default class Component extends Component {
  constructor(props){
    super(props);
  
  }


  render() {
    return ( 
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});