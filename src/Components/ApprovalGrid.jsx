import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import MediaCard from './MediaCard'

export default class ApprovalGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trees: [],
      loaded: false
    }
  }
  componentDidMount () {
    fetch(`http://localhost:3000/Trees?filter[order][0]=timeUpdated%20desc&filter[limit][1]=250&filter[skip]=5000`)
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        this.setState({ trees: myJson, loaded: true })
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  render () {
    if (!this.state.loaded) {
      return (
        <div>
          <LinearProgress color="secondary" variant="query" />
        </div>
      )
    } else {
      return (
        <div style={{ marginLeft: 45, marginTop: 30 }}>
          <MediaCard style={{ alignContent: 'center' }} trees={this.state.trees}/>
        </div>
      )
    }
  }
}
