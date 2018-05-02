/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { ScrollView ,TouchableOpacity, Image } from 'react-native';
 import { getData } from './services/dataApi';
 import {
   Platform,
   StyleSheet,
   Text,
   View
 } from 'react-native';

type props = {};
export default class App extends Component<props> {
  render() {
    const menuDesc = getData('menuDesc');
    const moviesDesc = getData('moviesDesc');
    return (
      <ScrollView>
        <View style = { styles.menu } >
          <Text style = { styles.menuText } >
            MENU
          </Text>
          <View>
            { menuDesc.map(( menuItem ) => (
              <TouchableOpacity key = { menuItem } style = { styles.menuButton }>
                <Text style = { styles.buttonText }>
                  { menuItem }
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <Text style = { styles.moviesText }>
            MOVIES
          </Text>

          <View style = { styles.movies }>
            { moviesDesc.map((movie) => (
              <TouchableOpacity key = { movie.name } style = { styles.moviesContainer } >
                <Image source = {{uri: `${ movie.image }`}} style = {{width: 180, height: 120}} />
                <Text style = { styles.moviesTitleText }>
                  { movie.name }
                </Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create ({
    moviesText: {
      fontSize: 15,
      paddingLeft: 0,
      padding: 8,
    },

    moviesContainer: {
        padding:2,
    },

    menu: {
        flex: 2,
        padding: 10,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'stretch'
    },

    buttonText:{
        color: 'green',
    },

    menuButton: {
        marginTop: 20,
        borderRadius: 7,
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },

    movies: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        display: 'flex'
    },

    moviesText: {
        fontSize: 30,
        padding: 10,
        marginTop: 20,
    },

    menuText: {
        marginTop: 20,
        padding: 10,
        fontSize: 30,
    }

});
