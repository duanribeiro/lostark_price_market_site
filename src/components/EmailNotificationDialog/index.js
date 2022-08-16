import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from "axios"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function EmailNotificationDialog({searchBoxState}) {
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    saveEmailAlert()
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const saveEmailAlert = () => {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/market/save_email_alert`, {
      email,
      searchBoxState
    })
    .then(() => {
      setOpenSnackbar(true);
    })
  }

  return (
    <>
      <Button
        variant="contained"
        color='secondary'
        style={{backgroundColor: "darkgreen"}}
        fullWidth
        onClick={handleClickOpen}
      >
        Click here to receive an email when the item is found!
      </Button>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Success on config email alert!
        </Alert>
      </Snackbar>


      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Email Alert
        </DialogTitle>
        
        <DialogContent dividers>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item lg={12}>
            <TextField
              error={!email.includes('@') || !email.includes('.')}
              value={email}
              onChange={event => setEmail(event.target.value)}
              id="standard-basic" 
              label="Your email" 
              style={{minWidth: 500, marginBottom:20}} 
            />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h4">
              Basic Info
            </Typography>
            <Typography variant="body2">
              Minimum Bid {searchBoxState.minimum_bid.operation} {searchBoxState.minimum_bid.value}
            </Typography>
            <Typography variant="body2">
              Buy Now Price {searchBoxState.buy_now_price.operation} {searchBoxState.buy_now_price.value}
            </Typography>
            <Typography variant="body2">
              Quality {searchBoxState.quality.operation} {searchBoxState.quality.value}
            </Typography>
            <Typography variant="body2">
              Left Traded Times {searchBoxState.traded_times.operation} {searchBoxState.traded_times.value}
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h4">
              Basic Effects
            </Typography>
            <Typography variant="body2">
              Dexterity {searchBoxState.basic_effect.Dexterity.operation} {searchBoxState.basic_effect.Dexterity.value}
            </Typography>
            <Typography variant="body2">
              Intelligence {searchBoxState.basic_effect.Intelligenceoperation} {searchBoxState.basic_effect.Intelligence.value}
            </Typography>
            <Typography variant="body2">
              Strength {searchBoxState.basic_effect.Strength.operation} {searchBoxState.basic_effect.Strength.value}
            </Typography>
            <Typography variant="body2">
              Vitality {searchBoxState.basic_effect.Vitality.operation} {searchBoxState.basic_effect.Vitality.value}
            </Typography>
          </Grid>
          <Grid item lg={6}>
          <Typography variant="h4">
              Bonus Effects
            </Typography>
            <Typography variant="body2">
              Crit {searchBoxState.bonus_effect.Crit.operation} {searchBoxState.bonus_effect.Crit.value}
            </Typography>
            <Typography variant="body2">
              Domination {searchBoxState.bonus_effect.Domination.operation} {searchBoxState.bonus_effect.Domination.value}
            </Typography>
            <Typography variant="body2">
              Endurance {searchBoxState.bonus_effect.Endurance.operation} {searchBoxState.bonus_effect.Endurance.value}
            </Typography>
            <Typography variant="body2">
              Expertise {searchBoxState.bonus_effect.Expertise.operation} {searchBoxState.bonus_effect.Expertise.value}
            </Typography>
            <Typography variant="body2">
              Specialization {searchBoxState.bonus_effect.Specialization.operation} {searchBoxState.bonus_effect.Specialization.value}
            </Typography>
            <Typography variant="body2">
              Swiftness {searchBoxState.bonus_effect.Swiftness.operation} {searchBoxState.bonus_effect.Swiftness.value}
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h4">
              Engravings Effects
            </Typography>
            <Typography variant="body2">
            {searchBoxState.engraving_effect.engraving_1.name} {searchBoxState.engraving_effect.engraving_1.operation} {searchBoxState.engraving_effect.engraving_1.value}
            </Typography>
            <Typography variant="body2">
            {searchBoxState.engraving_effect.engraving_2.name} {searchBoxState.engraving_effect.engraving_2.operation} {searchBoxState.engraving_effect.engraving_2.value}
            </Typography>
            <Typography variant="body2">
            {searchBoxState.engraving_effect.engraving_3.name} {searchBoxState.engraving_effect.engraving_3.operation} {searchBoxState.engraving_effect.engraving_3.value}
            </Typography>
          </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSave} color="primary">
            Save Alert
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}