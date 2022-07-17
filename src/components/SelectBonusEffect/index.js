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
      case 'Crit':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Crit': { ...searchBoxState['bonus_effect']['Crit'], operation: newValue}}})
        break
      case 'Specialization':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Specialization': { ...searchBoxState['bonus_effect']['Specialization'], operation: newValue}}})
        break
      case 'Domination':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Domination': { ...searchBoxState['bonus_effect']['Domination'], operation: newValue}}})
        break
      case 'Swiftness':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Swiftness': { ...searchBoxState['bonus_effect']['Swiftness'], operation: newValue}}})
        break
      case 'Endurance':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Endurance': { ...searchBoxState['bonus_effect']['Endurance'], operation: newValue}}})
        break
      case 'Expertise':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Expertise': { ...searchBoxState['bonus_effect']['Expertise'], operation: newValue}}})
        break
      default:
        break
      }
  };

  const handleChangeValue = (event) => {
    const newValue = parseInt(event.target.value);
    switch(index) {
      case 'Crit':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Crit': { ...searchBoxState['bonus_effect']['Crit'], value: newValue}}})
        break
      case 'Specialization':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Specialization': { ...searchBoxState['bonus_effect']['Specialization'], value: newValue}}})
        break
      case 'Domination':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Domination': { ...searchBoxState['bonus_effect']['Domination'], value: newValue}}})
        break
      case 'Swiftness':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Swiftness': { ...searchBoxState['bonus_effect']['Swiftness'], value: newValue}}})
        break
      case 'Endurance':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Endurance': { ...searchBoxState['bonus_effect']['Endurance'], value: newValue}}})
        break
      case 'Expertise':
        setSearchBoxState({...searchBoxState, bonus_effect: {...searchBoxState['bonus_effect'], 'Expertise': { ...searchBoxState['bonus_effect']['Expertise'], value: newValue}}})
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
            value={searchBoxState['bonus_effect'][index]["operation"]}
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
            value={searchBoxState['bonus_effect'][index].value}
            onChange={handleChangeValue}
            style={{marginLeft: 10, width: 100}}
            type="number"
          />
        </Grid>
      </Grid>
  </>
  );
}
