import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import "./styles.scss"


export default function SelectBasicEffect(props) {
  var { label, index, searchBoxState, setSearchBoxState } = props;

  const handleChangeSelect = (event) => {
    const newValue = event.target.value
    switch(index) {
      case 'minimum_bid':
        setSearchBoxState({...searchBoxState, minimum_bid: {...searchBoxState['minimum_bid'], operation: newValue}})
        break
      case 'buy_now_price':
        setSearchBoxState({...searchBoxState, buy_now_price: {...searchBoxState['buy_now_price'], operation: newValue}})
        break
      case 'quality':
        setSearchBoxState({...searchBoxState, quality: {...searchBoxState['quality'], operation: newValue}})
        break
      case 'traded_times':
        setSearchBoxState({...searchBoxState, traded_times: {...searchBoxState['traded_times'], operation: newValue}})
        break
      default:
        break
    }
  };

  const handleChangeValue = (event) => {
    const newValue = parseInt(event.target.value)
    switch(index) {
      case 'minimum_bid':
        setSearchBoxState({...searchBoxState, minimum_bid: {...searchBoxState['minimum_bid'], value: newValue}})
        break
      case 'buy_now_price':
        setSearchBoxState({...searchBoxState, buy_now_price: {...searchBoxState['buy_now_price'], value: newValue}})
        break
      case 'quality':
        setSearchBoxState({...searchBoxState, quality: {...searchBoxState['quality'], value: newValue}})
        break
      case 'traded_times':
        setSearchBoxState({...searchBoxState, traded_times: {...searchBoxState['traded_times'], value: newValue}})
        break
      default:
        break
    }
  };

  return (
    <>
      <Grid container direction='row'>  
        <Grid item lg={4} sm={8} style={{paddingTop: 8}}>
          <Typography variant="body">
          {label}
          </Typography>
        </Grid>

        <Grid item lg={2} sm={2}>
          <Select
            native
            value={searchBoxState[index].operation}
            onChange={handleChangeSelect}
            style={{marginLeft: 10}}
          >
            <option style={{'textAlign': 'center'}} value={'>'}>{'>'}</option>
            <option style={{'textAlign': 'center'}} value={'>='}>{'>='}</option>
            <option style={{'textAlign': 'center'}} value={'='}>{'='}</option>
            <option style={{'textAlign': 'center'}} value={'<='}>{'<='}</option>
            <option style={{'textAlign': 'center'}} value={'<'}>{'<'}</option>
          </Select>
        </Grid>

        <Grid item lg={2} sm={2}>
          <TextField
          value={searchBoxState[index].value}
          onChange={handleChangeValue}
          style={{marginLeft: 10, width: 100}}
          type="number"
          />
        </Grid>

      </Grid>
  </>
  );
}
