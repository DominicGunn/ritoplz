'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Alert from 'react-s-alert'

import signupRequest from '../actions/signup'
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from './../constants'
import { setToken } from './../services/auth'

class FormSignup extends Component {
  constructor () {
    super()

    this.handleSignup = this.handleSignup.bind(this)
    this.state = {
      requesting: false
    }
  }

  handleSignup(e) {
    this.setState({requesting: true})
    e.preventDefault()

    const data = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    }

    this.props.signupRequest(data)
      .then(({ data, type }) => {
        const token = data.token
        this.setState({requesting: false})

        if (type === SIGNUP_SUCCESS) {
          setToken(token)
          this.props.routing.url.pushTo('/welcome')
        }

        if (type === SIGNUP_ERROR) {
          Alert.error(data, {position: 'top-right'})
        }
      })
  }

  render () {
    return (
      <form className="registerForm" onSubmit={this.handleSignup}>
        <fieldset className="formInput">
          <label className="label">Seu nome</label>
          <input className="input" type="text" ref={input => this.name = input}/>
        </fieldset>

        <fieldset className="formInput">
          <label className="label">E-mail</label>
          <input className="input" type="email" ref={input => this.email = input}/>
        </fieldset>

        <fieldset className="formInput">
          <label className="label">Senha</label>
          <input className="input" type="password" ref={input => this.password = input}/>
        </fieldset>

        <button className="btn" type="submit" disabled={this.state.requesting}>Cadastrar</button>

        <Alert effect="jelly" stack={{limit: 3}}/>

        <style jsx>{`
          .registerForm {
            maxWidth: 60%;
            marginLeft: auto;
            marginRight: auto;
            paddingBottom: 50px;
          }

          .formInput {
            border: none;
            marginBottom: 25px;
          }

          .label {
            display: block;
            fontSize: 1rem;
            fontWeight: 500;
            marginBottom: 10px;
          }

          .input {
            width: 100%;
            height: 55px;
            borderRadius: 4px;
            border: 1px solid #f2f2f2;
            padding: 15px;
            fontSize: 1.15rem;
            outline: none;
            color: #333;
            transition: .25s;
          }

          .btn {
            width: 100%;
            color: #fff;
            border: none;
            borderRadius: 5px;
            padding: 10px 25px;
            fontSize: .9rem;
            height: 55px;
            marginTop: 25px;
            fontWeight: 500;
            cursor: pointer;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          }
        `}</style>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signupRequest: userData => dispatch(signupRequest(userData))
  }
}

export default connect(null, mapDispatchToProps)(FormSignup)
