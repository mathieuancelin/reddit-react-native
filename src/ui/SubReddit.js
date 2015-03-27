'use strict';

var React = require('react-native');
var Story = require('./Story');
var styles = require('./Style');

var {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHighlight
} = React;

var StoryCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.postCount}>
            {this.props.story.data.score}
          </Text>
          <Text style={styles.subredditTitle}>
            {this.props.story.data.title}
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
    this.fetchStories();
  },
  fetchStories: function() {
    fetch("http://www.reddit.com/" + this.props.url + ".json?sort=top&t=month").then((r) => r.json()).then((response) => {
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
            Loading Stories, please wait ...
          </Text>
        </View>
      );
    }
    return (
      <ListView dataSource={this.state.dataSource} renderRow={this.renderStories} />
    );
  },
  renderStories: function(item){
    return(
      <StoryCell onSelect={() => this.selectStory(item)} nbr={''} story={item}/>
    );
  },
  selectStory: function(item){
    this.props.navigator.push({
      title: item.data.title,
      component: Story,
      passProps: {
        id: item.data.id,
        title: item.data.title,
        url: item.data.url
      }
    });
  }
});