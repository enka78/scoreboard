import React from 'react';
import { StyleSheet, View, ScrollView,  Text, TouchableOpacity } from 'react-native';

export default function content() {
  return (
       <View style={styles.content}>
            <ScrollView>
                  <TouchableOpacity style={styles.contentItem}>
                      <Text> Touch Here </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contentItem}>
                      <Text> Touch Here </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contentItem}>
                      <Text> Touch Here </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contentItem}>
                      <Text> Touch Here </Text>
                  </TouchableOpacity>
            </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex:6,
    backgroundColor: '#fff',
    paddingLeft:2,
    paddingRight:2
  },
  contentItem: {
    flex: 1,
    height:100,
    backgroundColor: '#bbdefb',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#dcc',
    marginBottom:2,
  }
});
