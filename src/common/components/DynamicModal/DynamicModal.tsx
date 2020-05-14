import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {Modal, Fade, Backdrop, Box, Grid, Omit} from '@material-ui/core';
import {ModalProps} from '@material-ui/core/Modal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

export interface DynamicModalProps extends Omit<ModalProps, 'children' | 'open'> {
  displayComponent: (closeModal: () => void) => React.ReactElement<any>;
  actionComponent: (openModal: () => void) => React.ReactElement<any>;
}

export const DynamicModal: React.FC<DynamicModalProps> = (props) => {
  const {displayComponent, actionComponent, ...otherProps} = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <Box>
      {actionComponent(openModal)}
      <Modal
        {...otherProps}
        className={classes.modal}
        open={open}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Grid className={classes.paper}>{displayComponent(closeModal)}</Grid>
        </Fade>
      </Modal>
    </Box>
  );
};
