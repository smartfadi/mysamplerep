import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Markdown from '../Markdown';
import post1 from './post1.md';
import post2 from './post2.md';
import post3 from './post3.md';

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const posts = [post1, post2, post3];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];
export default function Tech() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* Main featured post */}
      <Paper className={classes.mainFeaturedPost}>
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: 'none' }}
            src="https://source.unsplash.com/user/erondu"
            alt="background"
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Title of a longer featured blog post
      </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Multiple lines of text that form the lede, informing new readers quickly and
                efficiently about what&apos;s most interesting in this post&apos;s contents.
      </Typography>
              <Link variant="subtitle1" href="#">
                Continue reading…
      </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {/* End main featured post */}
      {/* Sub featured posts */}
      <Grid container spacing={4} className={classes.cardGrid}>
        {featuredPosts.map(post => (
          <Grid item key={post.title} xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
            </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      {/* End sub featured posts */}
      <Grid container spacing={5} className={classes.mainGrid}>
        {/* Main content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            From the Firehose
  </Typography>
          <Divider />
          {posts.map(post => (
            <Markdown className={classes.markdown} key={post.substring(0, 40)}>
              {post}
            </Markdown>
          ))}
        </Grid>
        {/* End main content */}
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              About
    </Typography>
            <Typography>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
              amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
    </Typography>
          </Paper>
          <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
            Archives
  </Typography>
          {archives.map(archive => (
            <Link display="block" variant="body1" href="#" key={archive}>
              {archive}
            </Link>
          ))}
          <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
            Social
  </Typography>
          {social.map(network => (
            <Link display="block" variant="body1" href="#" key={network}>
              {network}
            </Link>
          ))}
        </Grid>
        {/* End sidebar */}
      </Grid>
    </React.Fragment>
  )
}
