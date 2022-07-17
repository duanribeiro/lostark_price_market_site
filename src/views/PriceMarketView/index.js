import React, { useState } from 'react'
import SearchBox from '../../components/SearchBox'
import ItemPricesTable from '../../components/ItemPricesTable'
import Grid from '@material-ui/core/Grid';
import "./styles.scss"

export default function PriceMarketView() {
  const [allItemData, setAllItemData] = useState([])

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
         <SearchBox setAllItemData={setAllItemData}/>
        </Grid>

        <Grid item xs={12} style={{margin: 20}}>
          <ItemPricesTable allItemData={allItemData}/>
        </Grid>
      </Grid>
    </>
  )
}
