import React, { useState, useEffect } from 'react'
import ItemDataHistoryChart from '../../components/ItemDataHistoryChart'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios"

import "./styles.scss"

export default function PriceMarketView() {
  const [allItemNames, setAllItemNames] = useState([])
  const [allItemData, setAllItemData] = useState([])
  const [value, ] = useState('')

  useEffect(() => {
    fetchAllItemNames()
  }, [])

  const fetchAllItemNames = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_API}/market/get_all_item_names`)
      .then(response => {
        setAllItemNames(response.data)
      })
  }

  const fetchItemByName = (name) => {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/market/get_item_by_name`, {
      name
    }).then(response => {
      setAllItemData(response.data)
    })
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        
        <Grid item xs={12} style={{margin: 20}}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              fetchItemByName(newValue)
            }}
            id="combo-box-demo"
            options={allItemNames}
            getOptionLabel={(option) => option}
            renderInput={params => (
              <TextField
                {...params}
                InputProps={{ ...params.InputProps, style:{ color: '#fff' } }}
                InputLabelProps={{style: { color: '#fff' }}}
                label="Digite o nome do item..."
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Card className="graph_card">
            <ItemDataHistoryChart allItemData={allItemData}/>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
