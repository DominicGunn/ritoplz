'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Alert from 'react-s-alert'

import { isLogged } from './../services/auth'
import Page from './../layouts/page'
import { UiButton, TextInput, Row, Notify } from './../components/ui'
import { colors, typography } from './../components/ui/theme'
import store from './../store/configure-store'
import Header from './../components/header'
import { fetchAccount } from './../actions/fetch-account'
import resetPassword from './../actions/reset-password'

class ResetPassword extends Component {
  constructor() {
    super()

    this.resetPassword = this.resetPassword.bind(this)
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      return fetchAccount().then(res => {
        if (res.error) {
          Router.push('/login')
        }
      })
    }
  }

  resetPassword(e) {
    e.preventDefault()
    const { resetPassword } = this.props
    const userData = { email: this.email }

    resetPassword(userData).then(({ data, error }) => {
      if (data) {
        Alert.success('Instructions sent to your email.')
        Router.push('/login')
      }

      if (error) {
        Alert.error(
          'We were not able to reset your password at the moment, please contact us.'
        )
      }
    })
  }

  render() {
    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          <h2>Reset your password</h2>
          <p>
            Forgot your password? Happens all the time. Enter your email below to reset it.
          </p>

          <form onSubmit={this.resetPassword}>
            <TextInput
              label="Email"
              placeholder="ritoplz@gmail.com"
              type="email"
              inputRef={ref => {
                this.email = ref
              }}
            />

            <UiButton ui="primary block" type="submit">Reset password</UiButton>
          </form>

          <Notify />
        </Row>

        <style jsx>{`
          h2 {
            text-align: center;
            padding-top: 120px;
            font-size: ${typography.f30};
            color: ${colors.grayDark};
            margin-bottom: 8px;
            font-weight: 600;
          }

          p {
            text-align: center;
            margin-bottom: 50px;
            font-size: ${typography.f16};
            color: ${colors.gray};
          }

          form {
            max-width: 60%;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </Page>
    )
  }
}

ResetPassword.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    resetPassword: email => dispatch(resetPassword(email))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(
  ResetPassword
)
