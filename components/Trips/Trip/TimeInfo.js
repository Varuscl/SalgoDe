import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import PropTypes from 'prop-types'
import { showDate, showOnlyTime } from '../../../utils/time'

const TimeInfo = ({ timestamp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowElement}>
        <Icon name="calendar" style={styles.icon} />
        <Text style={styles.location}>{showDate(timestamp)}</Text>
      </View>
      <View style={styles.rowElement}>
        <Icon name="clockcircleo" style={styles.icon} />
        <Text style={styles.location}>{showOnlyTime(timestamp)}</Text>
      </View>
    </View>
  )
}

TimeInfo.propTypes = {
  timestamp: PropTypes.number.isRequired,
  isDate: PropTypes.bool,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  icon: {
    color: 'grey',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 10,
    // Correct icons white space
    top: 2,
  },
  location: {
    color: 'grey',
    fontSize: 17,
    marginRight: 15,
  },
  rowElement: {
    flexDirection: 'row',
  },
})

export default TimeInfo
