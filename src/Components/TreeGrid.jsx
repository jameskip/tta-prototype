import React, { Component, useEffect } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import MediaCard from './MediaCard'

const ApprovalGrid = () => {
  const [trees, setTrees] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/Trees?filter[order][0]=timeUpdated%20desc&filter[limit][1]=100&filter[skip]=5000`)
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        setTrees(myJson)
        setLoaded(true)
      })
  })

  if (!loaded) {
    return (
      <div>
        <LinearProgress color="secondary" variant="query" />
      </div>
    )
  } else {
    return (
      <div style={{ marginLeft: 45, marginTop: 30 }}>
        <MediaCard style={{ alignContent: 'center' }} trees={trees}/>
      </div>
    )
  }
}
