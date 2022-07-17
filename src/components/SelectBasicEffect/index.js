import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';

import "./styles.scss"



export default function SelectBasicEffect(props) {
  var { label, index, searchBoxState, setSearchBoxState } = props;

  const handleChangeSelect = (event) => {
    const newValue = event.target.value;

    switch(index) {
      case 'Strength':
        setSearchBoxState({...searchBoxState, basic_effect: {...searchBoxState['basic_effect'], 'Strength': { ...searchBoxState['basic_effect']['Strength'], operation: newValue}}})
        break
      case 'Dexterity':
        setSearchBoxState({...searchBoxState, basic_effect: {...searchBoxState['basic_effect'], 'Dexterity': { ...searchBoxState['basic_effect']['Dexterity'], operation: newValue}}})
        break
      case 'Intelligence':
        setSearchBoxState({...searchBoxState, basic_effect: {...searchBoxState['basic_effect'], 'Intelligence': { ...searchBoxState['basic_effect']['Intelligence'], operation: newValue}}})
        break
      case 'Vitality':
        setSearchBoxState({...searchBoxState, basic_effect: {...searchBoxState['basic_effect'], 'Vitality': { ...searchBoxState['basic_effect']['Vitality'], operation: newValue}}})
        break
      default:
        break
    }
  };

  const handleChangeValue = (event) => {
    const newValue = parseInt(event.target.value);
    switch(index) {
      case 'Strength':
        setSearchBoxState({...searchBoxState, basic_effect: {...searchBoxState['basic_effect'], 'Strength': { ...searchBoxState['basic_effect']['Strength'], value: newValue}}})
        break
      case 'Dexterity':
        setSearchBoxState({...searchBoxState, basic_effect: {...searchBoxState['basic_effect'], 'Dexterity': { ...searchBoxState['basic_effect']['Dexterity'], value: newValue}}})
        break
      case 'Intelligence':
        setSearchBoxState({...searchBoxState, basic_effect: {...searchBoxState['basic_effect'], 'Intelligence': { ...searchBoxState['basic_effect']['Intelligence'], value: newValue}}})
        break
      case 'Vitality':
        setSearchBoxState({...searchBoxState, basic_effect: {...searchBoxState['basic_effect'], 'Vitality': { ...searchBoxState['basic_effect']['Vitality'], value: newValue}}})
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
            value={searchBoxState['basic_effect'][index]["operation"]}
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
            value={searchBoxState['basic_effect'][index].value}
            onChange={handleChangeValue}
            style={{marginLeft: 10, width: 100}}
            type="number"
          />
        </Grid>

      </Grid>
  </>
  );
}
