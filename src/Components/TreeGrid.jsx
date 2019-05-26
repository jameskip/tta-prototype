import React, { Component } from 'react'
import MediaCard from './MediaCard'

export default class TreeGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trees: []
    }
  }
  componentDidMount () {
    fetch(`http://localhost:3000/Trees?filter[order][0]=timeUpdated%20desc&filter[limit][1]=100&filter[skip]=0`)
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        this.setState({ trees: myJson })
      })
  }

  render () {
    return (
      <div style={{ marginLeft: 45, marginTop: 30 }}>
        <MediaCard style={{ alignContent: 'center' }} trees={this.state.trees}/>
      </div>
    )
  }
}
