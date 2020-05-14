import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import LayersIcon from '@material-ui/icons/Layers';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StoreIcon from '@material-ui/icons/Store';
import BusinessIcon from '@material-ui/icons/Business';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {useRouter} from 'next/router';

export const AdminListItems: React.FC<any> = () => {

    const Router = useRouter();
     return(
  <div>
    <ListItem button onClick={() => Router.push('/admin/dashboard')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="DashBoard" />
    </ListItem>
    <ListItem button onClick={() => Router.push('/admin/employees')}>
      <ListItemIcon>
        <SupervisedUserCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Employees" />
    </ListItem>
    <ListItem button onClick={() => Router.push('/admin/pendingrequests')}>
      <ListItemIcon>
        <AddToQueueIcon />
      </ListItemIcon>
      <ListItemText primary="Pending Requests" />
    </ListItem>
    <ListItem button onClick={() => Router.push('/admin/companies')}>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Companies" />
    </ListItem>
    <ListItem button onClick={() => Router.push('/admin/retaildealers')}>
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText primary="Retail Dealers" />
    </ListItem>
    <ListItem button onClick={() => Router.push('/admin/positions')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Positions" />
    </ListItem>
    <ListItem button onClick={() => Router.push('/admin/notifications')}>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
    <ListItem button onClick={() => Router.push('/admin/reports')}>
      <ListItemIcon>
        <EqualizerIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);
     }