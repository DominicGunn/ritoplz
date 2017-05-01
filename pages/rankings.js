'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import Footer from '../components/footer'
import configureStore from '../store/configureStore'
import Header from './../components/header'
import RankingsList from './../containers/rankings-list'
import { isLogged } from './../services/auth'

const store = configureStore()

class Rankings extends Component {
  constructor() {
    super()

    store.subscribe(() => store.getState())
  }

  render () {
    let items = []

    if (isLogged()) {
      const item = {name: 'Profile', link: 'profile', type: 'button'}
      items.push(item)
    } else {
      const item = {name: 'Profile', link: 'profile', type: 'button'}
      items.push(item)
    }

    return (
      <Provider store={store}>
        <div>
          <Meta/>

          <Header items={items}/>

          <section className="row">
            <RankingsList/>
          </section>

          <Footer/>

          <style jsx>{`
            .row {
              maxWidth: 900px;
              marginLeft: auto;
              marginRight: auto;
            }
          `}</style>
        </div>
      </Provider>
    )
  }
}

export default Rankings
