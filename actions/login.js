'use strict'

import axios from 'axios'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants'

function loginRequest () {
  return {
    type: LOGIN_REQUEST
  }
}

function loginSuccess (data) {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

function loginError (data) {
  return {
    type: LOGIN_ERROR,
    data
  }
}

function handleLogin (userData) {
  return dispatch => {
    dispatch(loginRequest())
    return axios.post('http://localhost:3001/login', userData)
      .then(({ data }) => {
        dispatch(loginSuccess(data))
        const token = data.token
        localStorage.setItem('token', token)
      })
      .catch(err => dispatch(loginError(err.response.data.error.message)))
  }
}

export default handleLogin
