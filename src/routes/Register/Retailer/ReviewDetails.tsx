import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const details = [
  { name: 'Company Name', value: 'test' },
  { name: 'Company GST Num', value: 'test' },
  { name: 'Company FP ID', value: 'test' },
  { name: 'Company Phone', value: 'test' },
  { name: 'Company MD', value: 'test' },
  { name: 'MD Phone', value: 'test' },
];

const addresses = [
  { name: 'Address Line 1', value: 'test' },
  { name: 'Address Line 2', value: 'test' },
  { name: 'City/District', value: 'test' },
  { name: 'State', value: 'test' },
  { name: 'Zip/Postal Code', value: 'test' },
  { name: 'Country', value: 'test' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export const ReviewDetails:React.FC<any> = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Details summary
      </Typography>
      <List disablePadding>
        {details.map((detail) => (
          <ListItem className={classes.listItem} key={detail.name}>
            <ListItemText primary={detail.name} />
            <Typography variant="body2">{detail.value}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Address
          </Typography>
          <List disablePadding>
        {addresses.map((address) => (
          <ListItem className={classes.listItem} key={address.name}>
            <ListItemText primary={address.name} />
            <Typography variant="body2">{address.value}</Typography>
          </ListItem>
        ))}
      </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}