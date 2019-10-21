import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { Card, View, Text, CardItem } from 'native-base'
import Location from './Location'
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/AntDesign'
import TimeInfo from './TimeInfo'
import PedirBoton from './PedirBoton'
import PropTypes from 'prop-types'

const ChooseTrip = ({
  timestamp,
  // spacesUsed,
  user,
  startPoint,
  endPoint,
  onSend,
}) => {
  return (
    <Card style={styles.containerRequested}>
      <CardItem style={styles.dataContainer}>
        <View style={styles.user}>
          <View style={styles.userData}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
              size={80}
            />
            <Text style={styles.userText}>{user.name}</Text>
          </View>
          <View style={styles.iconInfoGroup}>
            <View style={styles.iconContainer}>
              <Icon name="like1" style={styles.infoIcon} />
              <Text style={styles.iconText}>{user.reputation}</Text>
            </View>
          </View>
        </View>
      </CardItem>
      <CardItem style={styles.locationContainer}>
        <Location color={'#fd5844'} location={startPoint} />
        <Location color={'#886afe'} location={endPoint} />
      </CardItem>
      <CardItem style={styles.bottomSection}>
        <TimeInfo timestamp={timestamp} />
        <PedirBoton onSend={onSend} />
      </CardItem>
    </Card>
  )
}

ChooseTrip.propTypes = {
  timestamp: PropTypes.number.isRequired,
  // spacesUsed: PropTypes.number.isRequired,
  onSend: PropTypes.func,
}

const styles = StyleSheet.create({
  bottomSection: {
    alignSelf: 'stretch',
  },
  containerRequested: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 0,
    elevation: 1,
    padding: 15,
    shadowColor: '#bbb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  dataContainer: {
    alignSelf: 'stretch',
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconInfoGroup: {
    position: 'absolute',
    right: 5,
  },
  iconText: {
    color: 'grey',
  },
  infoIcon: {
    color: 'grey',
    fontSize: 30,
    paddingRight: 5,
  },
  locationContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  user: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  userData: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userText: {
    fontSize: 17,
    marginLeft: 15,
  },
})

export default ChooseTrip