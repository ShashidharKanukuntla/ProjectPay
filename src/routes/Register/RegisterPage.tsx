import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Grid, TextField, MenuItem} from '@material-ui/core';
import { RegisterForm } from './RegisterForm';

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
    },
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    register: {
      marginTop: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  }),
);

export const RegisterPage:React.FC<any> = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("company");

  return (
    <Grid container>
      <Grid item xs={12} className={classes.paper}>
        <TextField 
          select 
          name="category" 
          label = "Select Category"
          value={category} 
          variant="outlined" 
          color="primary"
          onChange={(e)=>{setCategory(e.target.value)}}>
          <MenuItem value="company">{"company"}</MenuItem>
          <MenuItem value="retailer/distributor">{"retailer/distributor"}</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} className={classes.register}>
        <RegisterForm category={category} />
      </Grid>
    </Grid>
  );
}