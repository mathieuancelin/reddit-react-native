'use strict';

var React = require('react-native');
var Reddit = require('./src/ui/Reddit');
var appStyle = require('./src/ui/Style');

var { AppRegistry, StyleSheet, NavigatorIOS } = React;

var redditios = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style = {appStyle.navigatorios}
        tintColor = '#030C22'
        initialRoute = {{
          title: 'Select a sub reddit',
          component: Reddit,
        }} />
    );
  }
});

AppRegistry.registerComponent('redditios', () => redditios);