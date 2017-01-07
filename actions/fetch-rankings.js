'use strict'

import axios from 'axios'

import {
  RANKINGS_REQUEST,
  RANKINGS_SUCCESS,
  RANKINGS_ERROR
} from './../constants'

function rankingsRequest() {
  return {
    type: RANKINGS_REQUEST
  }
}

function rankingsSuccess(data) {
  return {
    type: RANKINGS_SUCCESS,
    data
  }
}

function rankingsError(data) {
  return {
    type: RANKINGS_ERROR,
    data
  }
}

function fetchRankings(params = {country: 'BR'}) {
  return dispatch => {
    dispatch(rankingsRequest())

    return axios.get('https://localhost:3001/rankings', {
      params: {
        country: params.country,
        state: params.state,
        city: params.city,
        limit: params.limit
      }
    })
    .then(({ data }) => dispatch(rankingsSuccess(data)))
    .catch(err => dispatch(rankingsError(err)))
  }
}

export default fetchRankings
