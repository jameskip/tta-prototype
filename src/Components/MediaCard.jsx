import React from 'react'
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MapsModal from './MapsModal'

const useStyles = makeStyles({
  card: {
    margin: 20,
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

const MediaCard = (props) => {
  const propTrees = props.trees
  const classes = useStyles()

  console.log({ propTrees })

  const isItMissing = curr => curr.missing ? '⚠️ Missing!' : null

  const renderedCards = Object.values(propTrees).map((curr) => {
    return (
      <React.Fragment key={curr.id}>

        <Card className={classes.card}>

          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={curr.imageUrl}
              title="Tree"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                #{curr.id}
              </Typography>

              {isItMissing(curr)}

              <Typography variant="body2" color="textSecondary" component="p">
                📍{`Lat: ${Number.parseFloat(curr.lat).toFixed(2)}, Lon: ${Number.parseFloat(curr.lon).toFixed(2)}`}
              </Typography>

              <Typography variant="overline" component="p">
                {moment(curr.timeUpdated).fromNow()}
              </Typography>

            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" color="secondary">
            Reject
            </Button>
            <Button size="small" color="primary">
            Approve
            </Button>
            <MapsModal location={`${curr.lat},${curr.lon}`} />
          </CardActions>

        </Card>
      </React.Fragment>
    )
  })
  return (
    <Grid container spacing={5}>
      {renderedCards}
    </Grid>
  )
}

export default MediaCard
