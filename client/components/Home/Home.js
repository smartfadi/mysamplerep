import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Link as Mylink} from 'react-router-dom'

import Routes from '../Routes'
const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];


const styles = theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
});



class Home extends React.Component {
  render(){
    const {classes} = this.props

      return (
        <div>
          <CssBaseline />
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Button size="small" component={Mylink} to="/" >Home</Button>
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
              >
                Fadi's Blog
              </Typography>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <Button variant="outlined" size="small" component={Mylink} to="/signup">
                Sign up
              </Button>
            </Toolbar>
            <main>
              <Routes/>
            </main>
          </Container>
          {/* Footer */}
          <footer className={classes.footer}>
            <Container maxWidth="lg">
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                {'Built with love by the '}
                <Link color="inherit" href="https://material-ui.com/">
                  Material-UI
                </Link>
                {' team.'}
              </Typography>
            </Container>
          </footer>
          {/* End footer */}
          </div>
      );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)