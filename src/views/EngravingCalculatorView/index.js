import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import SelectEngravingEffect from '../../components/SelectEngravingEffect'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import "./styles.scss"

export default function PriceMarketView() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <Card variant="outlined" style={{backgroundColor: "white"}}>
          <CardContent>
            <Grid item lg={3} sm={12}>
              <Typography variant="h4">
                Engravings Effects
              </Typography>
              <SelectEngravingEffect index='engraving_1' />
              <SelectEngravingEffect index='engraving_2' />
              <SelectEngravingEffect index='engraving_3' />
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color='secondary'
              style={{backgroundColor: "darkred"}}
              fullWidth
              onClick={() => {
              }}
            >
             
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}
