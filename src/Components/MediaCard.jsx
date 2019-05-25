import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    margin: 30,
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
              <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
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
