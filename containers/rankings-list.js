'use strict'

import React, { Component } from 'react'
import { style, insertRule } from 'next/css'
import { connect } from 'react-redux'

import fetchRankings from '../actions/fetch-rankings'
import Header from './../components/header'
import Featured from './../components/featured'
import RankingUser from './../components/ranking-user'

const styles = {
  ranking: {
    display: 'flex'
  },

  rankingList: {
    flexBasis: '40%',
    maxHeight: 'calc(100vh - 70px)',
    overflow: 'auto'
  }
}

class RankingsList extends Component {
  constructor() {
    super()

    this.handleFeatured = this.handleFeatured.bind(this)

    this.state = {
      summoners: [],
      featured: {},
      fetched: false
    }
  }

  componentDidMount() {
    this.props.fetchRankings().then(() => {
      this.setState({fetched: true})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({summoners: nextProps.rankings.data.summoners})
    this.handleFeatured()
  }

  handleFeatured (index = 0) {
    this.setState({
      featured: this.state.summoners[index]
    })
  }

  render () {
    let rankingList
    let featured

    if(this.state.fetched) {
      featured = <Featured data={this.state.featured}/>

      rankingList = this.state.summoners.map((summoner, i) => {
        return <RankingUser data={summoner} key={summoner._id} position={i + 1} avatar="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" username="nice"/>
      })

    } else {
      rankingList = <h1>NO USERS</h1>
    }

    return (
      <div className={style(styles.ranking)}>
        {featured}

        <ul className={style(styles.rankingList)}>
          {rankingList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rankings: state.rankings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRankings: () => dispatch(fetchRankings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingsList)
