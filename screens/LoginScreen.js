import React, { Component } from 'react'
import { Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Spinner } from 'native-base'
import PropTypes from 'prop-types'
import LoginForm from '../components/Login/LoginForm'
import { loginAsync } from '../utils/login'
import { setUser } from '../redux/actions/user'

class LoginScreen extends Component {
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

  async onSend(email, password) {
    this.setState({ loading: true })
    const user = await loginAsync(email, password)
    this.setState({ loading: false })
    if (!user) {
      alert('Hubo un problema iniciando sesión. Por favor intentalo de nuevo.')
    } else if (!user.email) {
      alert(
        'Las credenciales ingresadas son inválidas. Por favor intentalo de nuevo.'
      )
    } else {
      this.props.setUser(user)
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Text style={styles.title}>#Salgode</Text>
        <LoginForm onSend={this.onSend} />
        {this.state.loading && <Spinner />}
      </KeyboardAvoidingView>
    )
  }
}

LoginScreen.propTypes = {
  setUser: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 50,
    fontWeight: '900',
  },
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
})

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen)
