import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SelectBasicEffect from '../SelectBasicEffect'
import SelectBasicInfo from '../SelectBasicInfo'
import SelectBonusEffect from '../SelectBonusEffect'
import SelectEngravingEffect from '../SelectEngravingEffect'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import "./styles.scss"

export default function SearchBox({
  fetchAllItemNames, allItemNames, fetchSearchItem, 
  searchBoxState, setSearchBoxState 
}) {
  const [value, ] = React.useState('');
  const [regions, ] = useState(['North America West', 'Central Europe', 'South America'])

  useEffect(() => {
    fetchAllItemNames()
  }, [])



  return (
    <>
      <Card variant="outlined" style={{backgroundColor: "white"}}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item lg={2} xs={12}>
                <Autocomplete
                  value={searchBoxState.region}
                  onChange={(event, newValue) => {
                    setSearchBoxState({...searchBoxState, 'region': newValue})
                  }}
                  id="combo-box-demo"
                  options={regions}
                  getOptionLabel={(option) => option}
                  renderInput={params => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="REGION"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item lg={5} xs={12}>
                <Autocomplete
                  value={searchBoxState.name}
                  onChange={(event, newValue) => {
                    setSearchBoxState({...searchBoxState, 'name': newValue})
                  }}
                  id="combo-box-demo"
                  options={allItemNames}
                  getOptionLabel={(option) => option}
                  renderInput={params => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="ITEM NAME"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item lg={5} xs={12}>
                <Autocomplete
                  value={searchBoxState.type}
                  onChange={(event, newValue) => {
                    setSearchBoxState({...searchBoxState, 'type': newValue})
                  }}
                  id="combo-box-demo"
                  options={['Necklace', 'Ring', 'Earring']}
                  getOptionLabel={(option) => option}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="ITEM TYPE"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item lg={3} sm={12}>
                <Typography variant="h4">
                  Basic Info
                </Typography>
                <SelectBasicInfo label='Minimun Bid' index='minimum_bid' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBasicInfo label='Buy Now Price' index='buy_now_price' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBasicInfo label='Quality' index='quality' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBasicInfo label='Left Traded Times' index='traded_times' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
              </Grid>

              <Grid item lg={3} sm={12}>
                <Typography variant="h4">
                  Basic Effects
                </Typography>
                <SelectBasicEffect label='Strength' index='Strength' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBasicEffect label='Dexterity' index='Dexterity' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBasicEffect label='Intelligence' index='Intelligence' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBasicEffect label='Vitality' index='Vitality' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
              </Grid>

              <Grid item lg={3} sm={12}>
                <Typography variant="h4">
                  Bonus Effects
                </Typography>
                <SelectBonusEffect label='Crit' index='Crit' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBonusEffect label='Specialization' index='Specialization' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBonusEffect label='Domination' index='Domination' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBonusEffect label='Swiftness' index='Swiftness' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBonusEffect label='Endurance' index='Endurance' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectBonusEffect label='Expertise' index='Expertise' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
              </Grid>

              <Grid item lg={3} sm={12}>
                <Typography variant="h4">
                  Engravings Effects
                </Typography>
                <SelectEngravingEffect index='engraving_1' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectEngravingEffect index='engraving_2' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
                <SelectEngravingEffect index='engraving_3' searchBoxState={searchBoxState} setSearchBoxState={setSearchBoxState}/>
              </Grid>
          </Grid>
        </CardContent>
        <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item lg={12} sm={12}>
            <Button
              variant="contained"
              color='secondary'
              style={{backgroundColor: "darkred"}}
              fullWidth
              onClick={() => {
                fetchSearchItem()
              }}
            >
              Click to search
            </Button>
          </Grid>
        </Grid>
        </CardActions>
      </Card>
    </>
  );
}
