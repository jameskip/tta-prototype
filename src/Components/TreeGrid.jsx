import React, { Component } from 'react'
import MediaCard from './MediaCard'

export default class TreeGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trees: {}
    }
  }
  componentDidMount () {
    fetch(`http://localhost:3000/Trees?filter[limit]=100`)
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        console.log({ myJson })
      })
  }

  render () {
    return (
      <MediaCard />
    )
  }
}
