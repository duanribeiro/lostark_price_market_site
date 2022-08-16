import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "./styles.scss"


export default function SelectEngravingEffect(props) {
  var { index, searchBoxState, setSearchBoxState } = props;

  const engravings = [
    'Disrespect',
    'Spirit Absorption',
    'Ether Enhancement',
    'Grudge',
    'Super Charge',
    'Strong Will',
    'Drops of Ether',
    'Crisis Evasion',
    'Keen Blunt Weapon',
    'Vital Point Strike',
    'Increased Max MP',
    'MP Regen',
    'Master of Escape',
    'Fortitude',
    'Crushing Fist',
    'Shield Piercing',
    "Masters's Tenacity",
    'Divine Protection',
    'Heavy Armor',
    'Explosive Expert',
    'Enhanced Shield',
    'Necromancy',
    'Preemptive Strike',
    'Broken Bone',
    'Lightning Fury',
    'Cursed Doll',
    'Contender',
    'Ambush Master',
    'Magick Stream',
    'Barricade',
    'Raid Captain',
    'Awakening',
    'Master Brawler',
    'Mass Increase',
    'Propulsion',
    'Hit Master',
    'Adrenaline',
    'All-out Attack',
    'Expert',
    'Emergency Rescue',
    'Precise Dagger',
    // NEGATIVE
    'Atk. Power Reduction',
    'Atk. Speed Reduction',
    'Defense Reduction',
    'Move Speed Reduction',
    // CLASS
    'Mayhem',
    "Berserker's Technique",
    'Enhanced Weapon',
    'Pistoleer',
    'Esoteric Skill Enhancement',
    'First Intention',
    'Ultimate Skill: Taijutsu',
    'Shock Training',
    'Barrage',
    'Firepower Enhancement',
    'True Courage',
    'Desperate Salvation',
    'Reflux',
    'Igniter',
    'Esoteric Flurry',
    'Deathblow',
    'Time to Hunt',
    'Peacemaker',
    'Blessed Aura',
    'Judgment',
    'Demonic Impulse',
    'Perfect Suppression',
    'Surge',
    'Remaining Energy',
    'Death Strike',
    'Loyal Companion',
    'Energy Overflow',
    'Robust Spirit',
    'Lone Knight',
    'Combat Readiness'
  ]

  const handleChangeName = (event, value) => {
    const newValue = value;
    switch(index) {
      case 'engraving_1':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_1': { ...searchBoxState['engraving_effect']['engraving_1'], name: newValue}}})
        break
      case 'engraving_2':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_2': { ...searchBoxState['engraving_effect']['engraving_2'], name: newValue}}})
        break
      case 'engraving_3':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_3': { ...searchBoxState['engraving_effect']['engraving_3'], name: newValue}}})
        break
      default:
        break
      }
  };

  const handleChangeSelect = (event) => {
    const newValue = event.target.value;
    switch(index) {
      case 'engraving_1':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_1': { ...searchBoxState['engraving_effect']['engraving_1'], operation: newValue}}})
        break
      case 'engraving_2':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_2': { ...searchBoxState['engraving_effect']['engraving_2'], operation: newValue}}})
        break
      case 'engraving_3':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_3': { ...searchBoxState['engraving_effect']['engraving_3'], operation: newValue}}})
        break
      default:
        break
      }
  };

  const handleChangeValue = (event) => {
    const newValue = parseInt(event.target.value);
    switch(index) {
      case 'engraving_1':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_1': { ...searchBoxState['engraving_effect']['engraving_1'], value: newValue}}})
        break
      case 'engraving_2':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_2': { ...searchBoxState['engraving_effect']['engraving_2'], value: newValue}}})
        break
      case 'engraving_3':
        setSearchBoxState({...searchBoxState, engraving_effect: {...searchBoxState['engraving_effect'], 'engraving_3': { ...searchBoxState['engraving_effect']['engraving_3'], value: newValue}}})
        break
      default:
        break
      }
  };

  return (
    <>
      <Grid container direction='row'>
        <Grid item lg={5} sm={8}>
          <Autocomplete
            value={searchBoxState['engraving_effect'][index]["name"]}
            onChange={handleChangeName}
            options={engravings}
            getOptionLabel={(option) => option}
            renderInput={params => (
              <TextField
                {...params}
                style={{width: 150}}
              />
            )}
          />
        </Grid>

        <Grid item lg={2} sm={2}>
          <Select
            native
            value={searchBoxState['engraving_effect'][index]["operation"]}
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
            value={searchBoxState['engraving_effect'][index].value}
            onChange={handleChangeValue}
            style={{width: 40}}
            type="number"
          />
        </Grid>
      </Grid>
  </>
  );
}
