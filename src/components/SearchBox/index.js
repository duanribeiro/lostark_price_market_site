import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import axios from "axios"
import Typography from '@material-ui/core/Typography';
import SelectBasicEffect from '../SelectBasicEffect'
import SelectBasicInfo from '../SelectBasicInfo'
import SelectBonusEffect from '../SelectBonusEffect'
import SelectEngravingEffect from '../SelectEngravingEffect'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./styles.scss"

export default function SearchBox(props) {
  var { setAllItemData } = props;

  const [value, ] = React.useState('');
  const [allItemNames, setAllItemNames] = useState([])
  const [regions, ] = useState(['West North America'])
  const [isLoading, setIsLoading] = useState(false)



  const fetchAllItemNames = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_API}/market/get_all_item_names`)
      .then(response => {
        setAllItemNames(response.data)
      })
  }

  const fetchSearchItem = () => {
    setIsLoading(true)
    axios.post(`${process.env.REACT_APP_BACKEND_API}/market/search_item`, 
      searchBoxState
    )
      .then(response => {
        setIsLoading(false)
        setAllItemData(response.data)
      })
  }

  useEffect(() => {
    fetchAllItemNames()
  }, [])

  const [searchBoxState, setSearchBoxState] = useState({
    "name": "",
    "type": "",
    "minimum_bid":  {
      "operation": '>=',
      'value': 0
    },
    "buy_now_price":  {
      "operation": '>=',
      'value': 0
    },
    "traded_times":  {
      "operation": '>=',
      'value': 0
    },
    "quality":  {
      "operation": '>=',
      'value': 0
    },
    "basic_effect": {
      "Strength":  {
        "operation": '>=',
        'value': 0
      },
      "Dexterity":  {
        "operation": '>=',
        'value': 0
      },
      "Intelligence":  {
        "operation": '>=',
        'value': 0
      },
      "Vitality":  {
        "operation": '>=',
        'value': 0
      },
    },
    "bonus_effect": {
      "Crit":  {
        "operation": '>=',
        'value': 0
      },
      "Specialization":  {
        "operation": '>=',
        'value': 0
      },
      "Domination":  {
        "operation": '>=',
        'value': 0
      },
      "Swiftness":  {
        "operation": '>=',
        'value': 0
      },
      "Endurance":  {
        "operation": '>=',
        'value': 0
      },
      "Expertise":  {
        "operation": '>=',
        'value': 0
      },
    },
    "engraving_effect": {
      "engraving_1" : {
        "name": "",
        "operation": '>=',
        'value': 0
      },
      "engraving_2" : {
        "name": "",
        "operation": '>=',
        'value': 0
      },
      "engraving_3" : {
        "name": "",
        "operation": '>=',
        'value': 0
      },

    }
  })


  let loading = <></>
  if (isLoading) {
    loading = <CircularProgress style={{'justifyContent': 'center'}} />
  }

  return (
    <>
      <Card variant="outlined" style={{backgroundColor: "white"}}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item lg={2} xs={12}>
              <Autocomplete
                value={'West North America'}
                onChange={(event, newValue) => {
                  setSearchBoxState({...searchBoxState, 'name': newValue})
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
                value={value}
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
      </CardActions>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        {loading}
      </Grid>
    </Card>
  </>
  );
}
