'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { style } from 'next/css'
import Slider from 'react-slick'
import CopyToClipboard from 'react-copy-to-clipboard'

import fetchAccount from '../actions/fetch-account'
import editUser from './../actions/edit-user'
import addSummoner from './../actions/add-summoner'
import confirmSummoner from '../actions/confirm-summoner'
import { countries, locations } from '../services/places'
import {
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR,
  CONFIRM_SUMMONER_SUCCESS,
  CONFIRM_SUMMONER_ERROR,
  ACCOUNT_SUCCESS,
  ACCOUNT_ERROR
} from './../constants'

class Onboard extends Component {
  constructor () {
    super()

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.submitLocation = this.submitLocation.bind(this)
    this.submitSummoner = this.submitSummoner.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.confirmSummoner = this.confirmSummoner.bind(this)
    this.copy = this.copy.bind(this)

    this.state = {
      countryList: countries,
      stateList: null,
      cityList: null,
      country: null,
      state: null,
      city: null,
      account: {},
      requesting: false,
      code: 'We love you'
    }
  }

  nextSlide () {
    this.slider.slickNext()
  }

  previousSlide () {
    this.slider.slickPrev()
  }

  handleCountry (e) {
    this.setState({
      country: e.value,
      stateList: locations[e.value]
    })
  }

  handleState (e) {
    const city = locations[this.state.country].filter(state => state.value === e.value)
    this.setState({
      state: e.label,
      stateParam: e.value,
      cityList: city[0].cities
    })
  }

  handleCity (e) {
    this.setState({city: e.value})
  }

  submitLocation () {
    this.setState({requesting: true})
    const userData = {
      country: this.state.country,
      state: this.state.state,
      city: this.state.city
    }

    this.props.editUser(userData)
      .then(({ data, type }) => {
        this.setState({requesting: false})

        if (type === EDIT_USER_SUCCESS) {
          this.props.throwSuccess('Localização atualizada')
          this.nextSlide()
        }

        if (type === EDIT_USER_ERROR) {
          this.props.throwError(data)
        }
      })
  }

  submitSummoner () {
    const summoner = {name: this.summoner.value}
    this.setState({requesting: true})

    this.props.addSummoner(summoner)
      .then(({ data, type }) => {
        this.setState({requesting: false})

        if (type === ADD_SUMMONER_SUCCESS) {
          this.props.throwSuccess('Invocador adicionado')
          this.nextSlide()
          this.setState({code: data.code})
          this.props.fetchAccount()
            .then(({ data, type }) => {
              if (type === ACCOUNT_SUCCESS) {
                this.setState({account: data})
              }
            })
        }

        if (type === ADD_SUMMONER_ERROR) {
          this.props.throwError(data)
        }
      })
  }

  confirmSummoner () {
    const summoner = this.state.account.summoners[0].name
    this.setState({requesting: true})

    this.props.confirmSummoner(summoner)
      .then(({ data, type }) => {
        this.setState({requesting: false})

        if (data) {
          this.props.throwSuccess('Localização confirmado')
          this.props.routing.url.pushTo('/profile')
        } else {
          this.props.throwError('Invocador não confirmado ainda, tente novamente em alguns segundos')
        }
      })
  }

  copy () {
    this.props.throwSuccess('Código copiado')
  }

  render () {
    const settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false
    }

    return (
      <Slider ref={c => this.slider = c } {...settings}>
        <div>
          <img className="slickImage" src="static/placeholder.svg" alt=""/>

          <h1 className="title">Bem vindo ao Ritoplz</h1>
          <h2 className="subtitle">Vamos ajudar você a configurar sua conta</h2>

          <button className="btnNext" onClick={this.nextSlide}>Próximo</button>
        </div>

        <div>
          <h1 className="title">Escolha sua localização</h1>
          <h2 className="subtitle">Essa será sua localização no Rankings</h2>

          <div className="form">
            <fieldset className="formInput">
              <label className="label">País</label>
              <Select options={this.state.countryList} value={this.state.country} onChange={this.handleCountry}/>
            </fieldset>

            <fieldset className="formInput">
              <label className="label">Estado</label>
              <Select options={this.state.stateList} value={this.state.stateParam} onChange={this.handleState}/>
            </fieldset>

            <fieldset className="formInput">
              <label className="label">Cidade</label>
              <Select options={this.state.cityList} value={this.state.city} onChange={this.handleCity}/>
            </fieldset>
          </div>

          <button className="btnPrev" onClick={this.previousSlide}>Anterior</button>
          <button className="btnNext" onClick={this.submitLocation} disabled={this.state.requesting}>Próximo</button>
        </div>

        <div>
          <div className="summoner">
            <h1 className="title">Vamos adicionar seu invocador</h1>
            <h2 className="subtitle">Nome do seu invocador</h2>

            <div className="form">
              <fieldset className="formInput">
                <label className="label">Nome do Invocador</label>
                <input className="input" type="text" ref={node => this.summoner = node}/>
              </fieldset>
            </div>
          </div>

          <button className="btnPrev" onClick={this.previousSlide}>Anterior</button>
          <button className="btnNext" onClick={this.submitSummoner} disabled={this.state.requesting}>Próximo</button>
        </div>

        <div>
          <h1 className="title">Confirme seu invocador</h1>
          <h2 className="subtitle">Siga as instruções abaixo para confirmar seu invocador</h2>

          <div className="steps">
            <div className="stepImage">
              <img className="mastery" src="static/mastery-lol.png" alt=""/>
            </div>

            <ul className="stepList">
              <li className="step">
                <span className="stepNumber">Passo 1.</span>
                <span className="stepText">Crie ou edite uma Página de Talentos ou Página de Runas</span>
              </li>

              <li className="step">
                <span className="stepNumber">Passo 2.</span>
                <span className="stepText">Use esse código ("{this.state.code}") como nome da página</span>
              </li>

              <li className="step">
                <span className="stepNumber">Passo 3.</span>
                <span className="stepText">Clique em confirmar invocador abaixo</span>
              </li>
            </ul>
          </div>

          <div className="codeCase">
            <p className="code">{this.state.code}</p>

            <CopyToClipboard text={this.state.code} onCopy={this.copy}>
              <span className="codeBtn">Copiar código</span>
            </CopyToClipboard>
          </div>

          <button className="btnPrev" onClick={this.previousSlide}>Anterior</button>
          <button className="btnNext" onClick={this.confirmSummoner} disabled={this.state.requesting}>Confirmar Invocador</button>
        </div>

        <style jsx>{`
          .formInput {
            border: none;
            marginBottom: 20px;
          }

          .label {
            display: inline-block;
            marginBottom: 10px;
            fontWeight: 600,
            fontSize: 1.15rem;
            color: #333;
          }

          .input {
            padding: 20px 15px;
            width: 100%;
            border: 1px solid #eee;
            borderRadius: 5px;
            fontSize: 1.1rem;
            outline: none;
          }

          .title {
            textAlign: center;
            color: #333;
            fontSize: 2rem;
            fontWeight: 500;
            marginBottom: 10px;
          }

          .subtitle {
            color: #999;
            fontSize: 1.15rem;
            fontWeight: 400;
            textAlign: center;
            marginBottom: 30px;
            lineHeight: 2rem;
          }

          .slickImage {
            display: inline-block;
            width: 70%;
            marginTop: 55px;
            marginLeft: auto;
            marginRight: auto;
          }

          .form {
            maxWidth: 500px;
            marginLeft: auto;
            marginRight: auto;
          }

          .summoner {
            marginTop: 75px;
          }

          .btnPrev {
            float: left;
            outline: none;
            color: #52bdab;
            border: none;
            borderRadius: 5px;
            padding: 10px 25px;
            fontSize: 1rem;
            height: 45px;
            marginTop: 30px;
            fontWeight: 500;
            cursor: pointer;
            background: transparent;
          }

          .btnNext {
            float: right;
            outline: none;
            color: #fff;
            border: none;
            borderRadius: 5px;
            padding: 10px 25px;
            fontSize: 1rem;
            height: 45px;
            marginTop: 30px;
            fontWeight: 500;
            cursor: pointer;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          }

          .codeCase {
            border: 1px solid #ccc;
            padding: 20px;
            borderRadius: 4px;
            width: 300px;
            position: relative;
            margin: 25px auto;
          }

          .code {
            fontSize: 1.5rem;
            color: #333;
            lineHeight: 1;
            verticalAlign: middle;
          }

          .codeBtn {
            height: 64px;
            backgroundColor: transparent;
            border: none;
            top: 0;
            position: absolute;
            right: 0;
            width: 125px;
            fontSize: 1rem;
            borderLeft: 1px solid #ccc;
            outline: none;
            color: #333;
            lineHeight: 64px;
            textAlign: center;
            cursor: pointer;
            transition: .15s;
          }

          .mastery {
            maxWidth: 90%;
            borderRadius: 6px;
          }

          .stepImage {
            flexBasis: 70%;
          }

          .steps {
            display: flex;
            justifyContent: space-between;
            flexWrap: wrap;
          }

          .stepList {
            marginTop: 50px;
            flexBasis: 30%;
          }

          .step {
            marginBottom: 30px;
          }

          .stepNumber {
            display: block;
            fontSize: 1.5rem;
            color: #333;
            marginBottom: 10px;
          }

          .stepText {
            color: #999;
          }
        `}</style>
      </Slider>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    editUser: (user) => dispatch(editUser(user)),
    addSummoner: summoner => dispatch(addSummoner(summoner)),
    confirmSummoner: summoner => dispatch(confirmSummoner(summoner))
  }
}

export default connect(null, mapDispatchToProps)(Onboard)
