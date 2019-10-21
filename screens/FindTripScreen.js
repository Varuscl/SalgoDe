import React, { Component } from 'react'
import Layout from '../constants/Layout'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'
import PropTypes from 'prop-types'
import FindTripForm from '../components/FindTrip/FindTripForm'

class FindTripScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Text style={styles.title}>#Salgode</Text>
        <FindTripForm items={items} />
      </KeyboardAvoidingView>
    )
  }
}

FindTripScreen.propTypes = {}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: '#f4f7fc',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    width: Layout.window.width * 0.85,
    color: '#3b3e43',
    textAlign: 'left',
    fontSize: 35,
    fontWeight: '900',
  },
})

const items = [
  {
    "id": 0,
    "name": "Metro La Moneda"
  },
  {
    "id": 1,
    "name": "Metro cincuenta"
  },
  {
    "id": 2,
    "name": "Metro San Joaquín"
  },
  {
    "id": 3,
    "name": "Metro Tobalaba"
  },
  {
    "id": 4,
    "name": "Mall X"
  }
]

export default FindTripScreen
