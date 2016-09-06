import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './components/MyContainerComponent'

class ListView extends Component {
   render() {
      return (
         <MyContainerComponent />
      )
   }
}

AppRegistry.registerComponent('ListView', () => ListView)
