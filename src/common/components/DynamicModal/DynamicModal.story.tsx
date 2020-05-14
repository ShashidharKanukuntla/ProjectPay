import React from 'react';
import {Card, CardHeader, CardContent, Button, IconButton, CardActionArea, CardActions} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import {DynamicModal} from './DynamicModal';

export default {
  component: DynamicModal,
  title: 'Dynamic Modal'
};

const SimpleCardComponent: React.FC<any> = (props) => {
  const {closeModal} = props;
  const buttonName = 'Close';
  return (
    <Card>
      <CardHeader title="This is header" />
      <CardContent>
        <h4>This is content</h4>
      </CardContent>
      <CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant="contained" onClick={closeModal}>
            {buttonName}
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export const SampleTextModalButton = () => {
  const buttonName = 'Click to Open';
  return (
    <DynamicModal
      displayComponent={() => <div>sample Text</div>}
      actionComponent={(openModal) => (
        <Button color="primary" variant="contained" onClick={openModal}>
          {buttonName}
        </Button>
      )}
    />
  );
};

export const CardModalButton = () => {
  const buttonName = 'Click to Open';
  return (
    <DynamicModal
      displayComponent={() => (
        <Card>
          <CardHeader title="This is header" />
          <CardContent>
            <h4>This is content</h4>
          </CardContent>
        </Card>
      )}
      actionComponent={(openModal) => (
        <Button color="primary" variant="contained" onClick={openModal}>
          {buttonName}
        </Button>
      )}
    />
  );
};

export const CardModalIconButton = () => {
  return (
    <DynamicModal
      displayComponent={() => (
        <Card>
          <CardHeader title="This is header" />
          <CardContent>
            <h4>This is content</h4>
          </CardContent>
        </Card>
      )}
      actionComponent={(openModal) => (
        <IconButton color="primary" onClick={openModal}>
          <OpenInNewIcon />
        </IconButton>
      )}
    />
  );
};

export const SampleModalwithCloseButton = () => {
  const openButton = 'Click to Open';
  const closeButton = 'Click to Close';
  return (
    <DynamicModal
      displayComponent={(closeModal) => (
        <div>
          <div>Test</div>
          <div>
            <Button color="primary" variant="contained" onClick={closeModal}>
              {closeButton}
            </Button>
          </div>
        </div>
      )}
      actionComponent={(openModal) => (
        <Button color="primary" variant="contained" onClick={openModal}>
          {openButton}
        </Button>
      )}
    />
  );
};

export const CardModalwithCloseButton = () => {
  const buttonName = 'Click to Open';
  return (
    <DynamicModal
      displayComponent={(closeModal) => <SimpleCardComponent closeModal={closeModal} />}
      actionComponent={(openModal) => (
        <Button color="primary" variant="contained" onClick={openModal}>
          {buttonName}
        </Button>
      )}
    />
  );
};
