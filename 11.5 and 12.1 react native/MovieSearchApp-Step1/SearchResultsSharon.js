// Importing React
import React, { Component } from 'react';

// Importing all of the React Components that we're going to use.
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


// Creating the 'Results' component.
class SearchResults extends Component {

  // This is what will be displayed on the page.
  render() {

    // Displaying some selected results from the API call.
    return (
      <View style={styles.item}>
        <Text style={styles.txt}>
          This text is from the SearchResults component! This is where our search data
          will be displayed.
        </Text>
      </View>
    );
  }
}


fetchData(movieinput) {
    fetch('http://www.omdbapi.com/?apikey=40e9cece&Frozen&y=&plot=short&r=json')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({movie: responseJson});
      })
      .catch(error => console.error(error));
      }


// Creating Styles.
const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: 'white'
  },
  item: {
    margin: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    padding: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

// Exporting our component.
export default SearchResults;
