import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//

export default class Footer extends Component {
  render() {
    return ( 
      <View style={styles.container}>
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filters} onPress={()=>this.props.onFilter()}>
            <Text>All</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.filters}>
            <Text>Active</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.filters}>
            <Text>Complete</Text>
          </TouchableOpacity>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  filters: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent"
  }
});