import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';

//

export default class Row extends Component {
  constructor(props){
    super(props);
  
  }


  render() {
    const { complete } = this.props;
    return ( 
      <View style={styles.container}>
        <Switch
          value={ complete } onValueChange = {this.props.onComplete}
        />
        <View style={styles.textWrap}>
           <Text style={[styles.text, complete && styles.complete]}>{this.props.text} </Text> 
        </View>
        <TouchableOpacity onPress={this.props.onRemove}>
          <Text style={styles.destroy}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 24,
    color: "#4d4d4d"
  },
  textWrap: {
    //flex: 1,
    marginHorizontal: 10
  },
  complete:{
    textDecorationLine:"line-through"
  },
  destroy:{
    fontSize:20,
    color: "#CC9a9a"
  }
});