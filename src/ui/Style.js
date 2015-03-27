'use strict';

var React = require('react-native');
var { StyleSheet } = React;

module.exports = StyleSheet.create({
  navigatorios: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9B0B3',
  },
  postCount: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
    color: 'gray',
    marginLeft: 15,
  },
  subredditTitle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    color: '#404749'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#20293F'
  },
  webView: {
    flex: 1,
    backgroundColor: '#A9B0B3',
    flexDirection: 'column',
  }
});