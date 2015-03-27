'use strict';

var React = require('react-native');
var styles = require('./Style');
var { View, WebView, StyleSheet } = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.webView}>
        <WebView url={this.props.url}/>
      </View>
    );
  }
});