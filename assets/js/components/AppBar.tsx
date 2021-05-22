import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Omit } from '@material-ui/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'center'
    },
  }),
);

// const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
//   <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
// ));

const ButtonAppBar = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <Link to="/" component={RouterLink} color="inherit" >Home</Link>
          </Typography>
          <Typography variant="h4" className={classes.title}>
            <Link to="/gene-editing" component={RouterLink} color="inherit" >Gene Editing</Link>
          </Typography>
          <Typography variant="h4" className={classes.title}>
            <Link to="/diagnostics" component={RouterLink} color="inherit" >Diagnostics</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
