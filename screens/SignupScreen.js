import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Spinner, View } from 'native-base'
import PropTypes from 'prop-types'
import { signupUser } from '../redux/actions/user'
import SignupForm from '../components/Login/SignupForm'

class SignupScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
    this.onSend = this.onSend.bind(this)
  }

  async onSend(userInfo) {
    this.setState({ loading: true })
    const user = await this.props
      .signup(
        userInfo.name,
        userInfo.lastName,
        userInfo.email,
        userInfo.phone,
        userInfo.password,
        userInfo.passwordRepeat
      )
      .then(response => {
        return response
      })
    this.setState({ loading: false })
    if (!user.error) {
      alert('Hubo un problema registrandote. Por favor intentalo de nuevo.')
    } else {
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <View style={styles.container}>
            <SignupForm onSend={this.onSend} />
            {this.state.loading && <Spinner />}
          </View>
          {this.state.loading && <Spinner />}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

SignupScreen.propTypes = {
  signup: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
})

const mapDispatchToProps = dispatch => ({
  signup: (
    name,
    lastName,
    email,
    phone,
    password,
    passwordRepeat
    // selfieLink,
    // driverLicenseLink,
    // dniLink,
    // carPlate,
    // carColor,
    // carBrand,
    // carModel
  ) =>
    dispatch(
      signupUser(
        name,
        lastName,
        email,
        phone,
        password,
        passwordRepeat
        // selfieLink,
        // driverLicenseLink,
        // dniLink,
        // carPlate,
        // carColor,
        // carBrand,
        // carModel
      )
    ),
})

export default connect(
  null,
  mapDispatchToProps
)(SignupScreen)
