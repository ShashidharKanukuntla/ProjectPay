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
            id="companyName"
            name="companyName"
            label="Company name"
            fullWidth
            autoComplete="companyname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companyGst"
            name="companyGst"
            label="Company GStNo"
            fullWidth
            autoComplete="GstNum"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companyFpId"
            name="companyFpId"
            label="Company FP ID"
            fullWidth
            autoComplete="CompanyFpId"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companyPhone"
            name="companPhone"
            label="Company Phone"
            fullWidth
            autoComplete="Phonenum"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companyMD"
            name="companyMD"
            label="Company MD"
            fullWidth
            autoComplete="companyMD"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mdPhone"
            name="mdPhone"
            label="MD Phone"
            fullWidth
            autoComplete="mdPhone"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}