import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class Menu extends Component {

  render() {
    const { classes } = this.props
    return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          {
            <Typography 
            variant="h6" 
            className={classes.grow} 
            color="inherit">{this.props.username ? "Hello, " + this.props.username : ""}</Typography>
          }
        
          <Button color="inherit" onClick={this.props.onLoginStateClick}>{this.props.isloggedIn ? "Login" : "Logout"}</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}
export default withStyles(styles)(Menu)