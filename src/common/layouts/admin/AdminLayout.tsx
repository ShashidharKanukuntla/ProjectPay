import React from 'react';
import clsx from 'clsx';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles, Typography, createMuiTheme, AppBar, Toolbar, IconButton, Drawer, Divider, Container, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AdminListItems } from './AdminNavList';

const drawerWidth = 225;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        backgroundColor:"green"
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      drawerPaper: {
        backgroundColor: "lightgreen",
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 0,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      paper: {
        padding: theme.spacing(0),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 270,
      },
      searchpageHeight: {
        height: 205,
      },
      logo: {
        maxWidth: 75,
        paddingTop:5
      },
      icons: {
        paddingTop: 25,
        paddingLeft: 75,
        paddingRight: 35,
      },
      input: {
        height: 25,
        width: 180,
        margin: theme.spacing(1.3),
        backgroundColor: "white"
    },
    label: {
    fontSize: 14,
    color: theme.palette.common.white,
    },
  }),
);

export const AdminLayout: React.FC<any> = (props) => {
  // const { Component, pageProps } = props;
  const {children} = props;
  const classes = useStyles(createMuiTheme);
  const [open, setOpen] = React.useState<boolean>(true);
  const handleDrawerOpen = () => {
        setOpen(true);
      };
  const handleDrawerClose = () => {
        setOpen(false);
      };

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
            <span>FarmerPay</span>
          </Typography>
          <Typography className={classes.label}>Admin</Typography>
          <IconButton>
              <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
            
        <AdminListItems />

       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
        <Grid container>
        {/* <Component {...pageProps} /> */}
        {children}
        </Grid>
        </Container>
        </main>
    </div>
  );
}
