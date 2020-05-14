import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, Grid} from '@material-ui/core';
import {DynamicModal} from '../../components/DynamicModal';
import {Login} from '../../../routes/Login';
import {useRouter} from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1
    },
    paper: {
      marginTop: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
);

export const HomeLayout:React.FC<any> = (props) => {
    const {children} = props;
  const classes = useStyles();
  const Router = useRouter();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              FarmerPay
            </Typography>
            <DynamicModal
                displayComponent={() => <Login />}
                actionComponent={(openModal) => (
                    <Button color="primary" variant="contained" onClick={openModal}>
                        Login
                    </Button>
                    )}
            />
            <Button color="inherit" onClick={() => Router.push('/register')}>Register</Button>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} className={classes.paper}>
        {children}
      </Grid>
    </Grid>
  );
}