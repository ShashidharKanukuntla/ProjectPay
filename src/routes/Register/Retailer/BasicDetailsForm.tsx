import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export const BasicDetailsForm:React.FC<any> = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shopName"
            name="shopName"
            label="Shop name"
            fullWidth
            autoComplete="shopname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shopPhone"
            name="shopPhone"
            label="Shop Phone"
            fullWidth
            autoComplete="Phonenum"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dealerName"
            name="dealerName"
            label="Dealer Name"
            fullWidth
            autoComplete="dealername"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dealerPhone"
            name="dealerPhone"
            label="Dealer Phone"
            fullWidth
            autoComplete="dealerPhone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shopGst"
            name="shopGst"
            label="Shop GStNo"
            fullWidth
            autoComplete="GstNum"
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        License Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="seedLicense"
            name="seedLicense"
            label="Seed License"
            fullWidth
            autoComplete="seedLicense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fertilizerLicense"
            name="fertilizerLicense"
            label="Fertilizer License"
            fullWidth
            autoComplete="fertilizerLicense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pesticideLicense"
            name="pesticideLicense"
            label="Pesticide License"
            fullWidth
            autoComplete="pesticideLicense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bioLicense"
            name="bioLicense"
            label="Bio License"
            fullWidth
            autoComplete="bioLicense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="otherLicense"
            name="otherLicense"
            label="Other License"
            fullWidth
            autoComplete="otherLicense"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}