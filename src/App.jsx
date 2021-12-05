import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Cont from './components/Content'
import './App.scss'

export default class extends Component {
    render() {
        return (
            <>
              <Header />
              <Cont />
            </>
        )
    }
}
