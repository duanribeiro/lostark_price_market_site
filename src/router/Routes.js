import React from 'react' 
import { BasicLayout} from '../layouts' 
import PublicRoute from './PublicRoute' 
import { PriceMarketView, UnsubscribeView } from '../views' 
import {
  Switch
} from "react-router-dom";



const Routes = () => {
  return (
    <Switch>
      <PublicRoute
        exact
        path="/"
        layout={BasicLayout}
        component={PriceMarketView}
      />
      <PublicRoute
        exact
        path="/delete_email_alert"
        layout={BasicLayout}
        component={UnsubscribeView}
      />
    </Switch>
  ) 
} 

export default Routes 
