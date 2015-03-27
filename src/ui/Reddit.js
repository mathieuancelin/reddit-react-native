'use strict';

var React = require('react-native');
var SubReddit = require('./SubReddit');
var styles = require('./Style');

var {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHighlight
} = React;

var SubRedditCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.postCount}>
            {this.props.nbr}
          </Text>
          <Text style={styles.subredditTitle}>
            {this.props.subreddit.data.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false
    };
  },
  componentDidMount: function() {
    this.fetchSubReddits();
  },
  fetchSubReddits: function() {
    fetch("http://www.reddit.com/reddits.json").then((r) => r.json()).then((response) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(response.data.children),
        loaded: true
      });
    }).done();
  },
  render: function() {
    if (!this.state.loaded) {
      return(
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Loading subreddits, please wait ...
          </Text>
        </View>
      );
    }
    return (
      <ListView dataSource={this.state.dataSource} renderRow={this.renderSubReddit} />
    );
  },
  renderSubReddit: function(item){
    return(
      <SubRedditCell onSelect={() => this.selectSubReddit(item)} nbr={''} subreddit={item}/>
    );
  },
  selectSubReddit: function(item){
    this.props.navigator.push({
      title: item.data.title,
      component: SubReddit,
      passProps: {
        id: item.data.id,
        title: item.data.title,  
        url: item.data.url
      }
    });
  }
});