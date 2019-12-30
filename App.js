import React from 'react';
import { StyleSheet, View, ScrollView,  Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
         <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarItem}>
                <Text>Test</Text>
            </TouchableOpacity>
         </ScrollView>
       </View>
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
        <View style={styles.promo}>
              <Text> Promo side </Text>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    marginTop: 24
  },
  navbar: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      paddingTop: 3,
      paddingLeft:1,
      paddingRight:1
  },
  navbarItem: {
    width:100,
    height:78,
    marginRight: 1,
    marginLeft:1,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#dcc',
  },
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
  },
  promo: {
    flex:1,
    backgroundColor: '#d9e3f0'
  }
});
